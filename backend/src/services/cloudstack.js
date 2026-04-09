const axios = require('axios');
const crypto = require('crypto');
const logger = require('../utils/logger');

class CloudStackService {
  constructor() {
    this.apiUrl = process.env.CLOUDSTACK_API_URL || 'http://localhost:8080/client/api';
    this.apiKey = process.env.CLOUDSTACK_API_KEY;
    this.secretKey = process.env.CLOUDSTACK_SECRET_KEY;
    
    if (!this.apiKey || !this.secretKey) {
      logger.error('CloudStack API credentials not configured');
    }
  }

  // Generate signature for CloudStack API
  generateSignature(params) {
    // Sort params alphabetically
    const sortedParams = Object.keys(params).sort().reduce((acc, key) => {
      acc[key.toLowerCase()] = params[key];
      return acc;
    }, {});

    // Create query string
    const queryString = Object.keys(sortedParams)
      .map(key => `${key}=${encodeURIComponent(sortedParams[key])}`)
      .join('&');

    // Generate HMAC SHA1 signature
    const signature = crypto
      .createHmac('sha1', this.secretKey)
      .update(queryString.toLowerCase())
      .digest('base64');

    return signature;
  }

  // Make API request to CloudStack
  async makeRequest(command, params = {}) {
    const requestParams = {
      apikey: this.apiKey,
      command: command,
      response: 'json',
      ...params
    };

    // Add timestamp
    requestParams.signatureversion = '3';
    requestParams.expires = new Date(Date.now() + 60000).toISOString();

    // Generate signature
    const signature = this.generateSignature(requestParams);

    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          ...requestParams,
          signature: signature
        },
        timeout: 30000,
        headers: {
          'Accept': 'application/json'
        }
      });

      return response.data;
    } catch (error) {
      logger.error(`CloudStack API Error - Command: ${command}`, error.message);
      throw new Error(`CloudStack API Error: ${error.message}`);
    }
  }

  // Deploy Virtual Machine
  async deployVirtualMachine(config) {
    const params = {
      serviceofferingid: config.serviceOfferingId,
      templateid: config.templateId,
      zoneid: config.zoneId,
      networkids: config.networkId,
      name: config.name,
      displayname: config.displayName,
      keypair: config.sshKeypair || undefined,
      rootdisksize: config.rootDiskSize || undefined,
      userdata: config.userData ? Buffer.from(config.userData).toString('base64') : undefined
    };

    // Remove undefined values
    Object.keys(params).forEach(key => {
      if (params[key] === undefined) delete params[key];
    });

    logger.info(`Deploying VM: ${config.name} in zone: ${config.zoneId}`);
    
    try {
      const response = await this.makeRequest('deployVirtualMachine', params);
      return response.deployvirtualmachineresponse;
    } catch (error) {
      logger.error('VM Deployment failed:', error);
      throw error;
    }
  }

  // Stop Virtual Machine
  async stopVirtualMachine(vmId, forced = false) {
    const params = { id: vmId };
    if (forced) params.forced = true;

    logger.info(`Stopping VM: ${vmId}`);
    const response = await this.makeRequest('stopVirtualMachine', params);
    return response.stopvirtualmachineresponse;
  }

  // Start Virtual Machine
  async startVirtualMachine(vmId) {
    logger.info(`Starting VM: ${vmId}`);
    const response = await this.makeRequest('startVirtualMachine', { id: vmId });
    return response.startvirtualmachineresponse;
  }

  // Reboot Virtual Machine
  async rebootVirtualMachine(vmId) {
    logger.info(`Rebooting VM: ${vmId}`);
    const response = await this.makeRequest('rebootVirtualMachine', { id: vmId });
    return response.rebootvirtualmachineresponse;
  }

  // Destroy Virtual Machine
  async destroyVirtualMachine(vmId, expunge = true) {
    logger.info(`Destroying VM: ${vmId}`);
    const params = { 
      id: vmId,
      expunge: expunge
    };
    const response = await this.makeRequest('destroyVirtualMachine', params);
    return response.destroyvirtualmachineresponse;
  }

  // Get Virtual Machine details
  async getVirtualMachine(vmId) {
    const response = await this.makeRequest('listVirtualMachines', { 
      id: vmId,
      details: 'all'
    });
    
    const vms = response.listvirtualmachinesresponse.virtualmachine;
    return vms && vms.length > 0 ? vms[0] : null;
  }

  // List all Virtual Machines
  async listVirtualMachines(filters = {}) {
    const response = await this.makeRequest('listVirtualMachines', {
      details: 'all',
      ...filters
    });
    
    return response.listvirtualmachinesresponse.virtualmachine || [];
  }

  // Resize Virtual Machine
  async resizeVirtualMachine(vmId, newServiceOfferingId) {
    logger.info(`Resizing VM: ${vmId} to offering: ${newServiceOfferingId}`);
    const response = await this.makeRequest('scaleVirtualMachine', {
      id: vmId,
      serviceofferingid: newServiceOfferingId
    });
    return response.scalevirtualmachineresponse;
  }

  // Create Snapshot
  async createSnapshot(vmId, volumeId, name) {
    logger.info(`Creating snapshot for VM: ${vmId}`);
    const response = await this.makeRequest('createSnapshot', {
      volumeid: volumeId,
      name: name,
      vmid: vmId
    });
    return response.createsnapshotresponse;
  }

  // Create Template from VM
  async createTemplate(vmId, name, displayText, osTypeId) {
    logger.info(`Creating template from VM: ${vmId}`);
    const response = await this.makeRequest('createTemplate', {
      displaytext: displayText,
      name: name,
      ostypeid: osTypeId,
      virtualmachineid: vmId
    });
    return response.createtemplateresponse;
  }

  // List Zones
  async listZones() {
    const response = await this.makeRequest('listZones', { available: true });
    return response.listzonesresponse.zone || [];
  }

  // List Templates
  async listTemplates(templateFilter = 'featured', zoneId = null) {
    const params = {
      templatefilter: templateFilter
    };
    if (zoneId) params.zoneid = zoneId;

    const response = await this.makeRequest('listTemplates', params);
    return response.listtemplatesresponse.template || [];
  }

  // List Service Offerings
  async listServiceOfferings() {
    const response = await this.makeRequest('listServiceOfferings');
    return response.listserviceofferingsresponse.serviceoffering || [];
  }

  // List Networks
  async listNetworks(zoneId = null) {
    const params = {};
    if (zoneId) params.zoneid = zoneId;

    const response = await this.makeRequest('listNetworks', params);
    return response.listnetworksresponse.network || [];
  }

  // Create Network
  async createNetwork(name, displayText, networkOfferingId, zoneId, cidr = null) {
    const params = {
      name: name,
      displaytext: displayText,
      networkofferingid: networkOfferingId,
      zoneid: zoneId
    };
    if (cidr) params.cidr = cidr;

    logger.info(`Creating network: ${name} in zone: ${zoneId}`);
    const response = await this.makeRequest('createNetwork', params);
    return response.createnetworkresponse;
  }

  // Delete Network
  async deleteNetwork(networkId) {
    logger.info(`Deleting network: ${networkId}`);
    const response = await this.makeRequest('deleteNetwork', { id: networkId });
    return response.deletenetworkresponse;
  }

  // Get VM Console URL
  async getVMCConsole(vmId) {
    const response = await this.makeRequest('getVMPassword', { id: vmId });
    return response.getvmpasswordresponse;
  }

  // Reset VM Password
  async resetVMPassword(vmId) {
    const response = await this.makeRequest('resetVMPassword', { id: vmId });
    return response.resetvmpasswordresponse;
  }

  // Update VM
  async updateVirtualMachine(vmId, params) {
    const updateParams = { id: vmId, ...params };
    const response = await this.makeRequest('updateVirtualMachine', updateParams);
    return response.updatevirtualmachineresponse;
  }

  // Add SSH Keypair
  async registerSSHKeyPair(name, publicKey) {
    const response = await this.makeRequest('registerSSHKeyPair', {
      name: name,
      publickey: publicKey
    });
    return response.registersshkeypairresponse;
  }

  // Delete SSH Keypair
  async deleteSSHKeyPair(name) {
    const response = await this.makeRequest('deleteSSHKeyPair', { name: name });
    return response.deletesshkeypairresponse;
  }
}

module.exports = new CloudStackService();
