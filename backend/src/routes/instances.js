const express = require('express');
const { v4: uuidv4 } = require('uuid');
const Joi = require('joi');
const database = require('../database/connection');
const { protect, logActivity } = require('../middleware/auth');
const { AppError } = require('../middleware/errorHandler');
const cloudstack = require('../services/cloudstack');
const logger = require('../utils/logger');

const router = express.Router();

// Validation schemas
const createInstanceSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  projectId: Joi.string().uuid().optional(),
  region: Joi.string().required(),
  planId: Joi.string().required(),
  templateId: Joi.string().required(),
  networkId: Joi.string().optional(),
  backupFrequency: Joi.string().valid('disable', 'weekly', 'monthly', 'yearly').default('disable'),
  authMethod: Joi.string().valid('ssh', 'password').default('password'),
  sshKeyId: Joi.string().optional(),
  publicIPEnabled: Joi.boolean().default(true),
  ipv6Enabled: Joi.boolean().default(false),
  monitoringEnabled: Joi.boolean().default(true),
  quantity: Joi.number().integer().min(1).max(10).default(1)
});

// Get all instances for user
router.get('/', protect, async (req, res, next) => {
  try {
    const { status, projectId, region } = req.query;
    
    let query = `
      SELECT i.*, p.name as project_name, n.name as network_name
      FROM instances i
      LEFT JOIN projects p ON i.project_id = p.id
      LEFT JOIN networks n ON i.network_id = n.id
      WHERE i.user_id = ?
    `;
    const params = [req.user.id];

    if (status) {
      query += ' AND i.status = ?';
      params.push(status);
    }

    if (projectId) {
      query += ' AND i.project_id = ?';
      params.push(projectId);
    }

    if (region) {
      query += ' AND i.region = ?';
      params.push(region);
    }

    query += ' ORDER BY i.created_at DESC';

    const instances = await database.query(query, params);

    res.status(200).json({
      status: 'success',
      results: instances.length,
      data: { instances }
    });
  } catch (error) {
    next(error);
  }
});

// Get single instance
router.get('/:id', protect, async (req, res, next) => {
  try {
    const instances = await database.query(
      `SELECT i.*, p.name as project_name, n.name as network_name
       FROM instances i
       LEFT JOIN projects p ON i.project_id = p.id
       LEFT JOIN networks n ON i.network_id = n.id
       WHERE i.id = ? AND i.user_id = ?`,
      [req.params.id, req.user.id]
    );

    if (instances.length === 0) {
      return next(new AppError('Instance not found', 404, 'INSTANCE_NOT_FOUND'));
    }

    const instance = instances[0];

    // If instance has CloudStack ID, get latest status from CloudStack
    if (instance.cloudstack_vm_id) {
      try {
        const csVm = await cloudstack.getVirtualMachine(instance.cloudstack_vm_id);
        if (csVm) {
          instance.cloudstack_state = csVm.state;
          instance.cloudstack_ip = csVm.nic?.[0]?.ipaddress;
        }
      } catch (csError) {
        logger.warn(`Failed to get CloudStack status for VM ${instance.cloudstack_vm_id}:`, csError.message);
      }
    }

    res.status(200).json({
      status: 'success',
      data: { instance }
    });
  } catch (error) {
    next(error);
  }
});

// Create new instance
router.post('/', protect, async (req, res, next) => {
  try {
    // Validate input
    const { error } = createInstanceSchema.validate(req.body);
    if (error) {
      return next(new AppError(error.details[0].message, 400, 'VALIDATION_ERROR'));
    }

    const {
      name,
      projectId,
      region,
      planId,
      templateId,
      networkId,
      backupFrequency,
      authMethod,
      sshKeyId,
      publicIPEnabled,
      ipv6Enabled,
      monitoringEnabled
    } = req.body;

    // Get plan details
    const plans = await database.query(
      'SELECT * FROM service_offerings WHERE id = ?',
      [planId]
    );

    if (plans.length === 0) {
      return next(new AppError('Invalid plan selected', 400, 'INVALID_PLAN'));
    }

    const plan = plans[0];

    // Get template details
    const templates = await database.query(
      'SELECT * FROM templates WHERE id = ?',
      [templateId]
    );

    if (templates.length === 0) {
      return next(new AppError('Invalid template selected', 400, 'INVALID_TEMPLATE'));
    }

    const template = templates[0];

    // Get network details if provided
    let network = null;
    if (networkId) {
      const networks = await database.query(
        'SELECT * FROM networks WHERE id = ? AND (user_id IS NULL OR user_id = ?)',
        [networkId, req.user.id]
      );
      if (networks.length > 0) {
        network = networks[0];
      }
    }

    // Get region details
    const regions = await database.query(
      'SELECT * FROM regions WHERE code = ?',
      [region]
    );

    if (regions.length === 0) {
      return next(new AppError('Invalid region selected', 400, 'INVALID_REGION'));
    }

    const regionData = regions[0];

    // Calculate costs
    const backupMultiplier = {
      disable: 0,
      weekly: 0.15,
      monthly: 0.05,
      yearly: 0.02
    }[backupFrequency];

    const hourlyRate = plan.hourly_rate * (1 + backupMultiplier);
    const monthlyEstimate = plan.monthly_rate * (1 + backupMultiplier);

    // Create instance record
    const instanceId = `srv-${Date.now()}`;
    
    await database.query(
      `INSERT INTO instances (
        id, name, project_id, user_id, network_id,
        vcpu, memory_gb, disk_gb,
        os_type, os_version,
        public_ip_enabled, ipv6_enabled, monitoring_enabled,
        backup_enabled, backup_frequency,
        hourly_rate, monthly_estimate,
        auth_method, ssh_key_id,
        region, cloudstack_zone_id,
        cloudstack_template_id, cloudstack_service_offering_id,
        status, state
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        instanceId,
        name,
        projectId || null,
        req.user.id,
        networkId || null,
        plan.vcpu,
        plan.memory_gb,
        plan.disk_gb,
        template.os_type,
        template.os_version,
        publicIPEnabled,
        ipv6Enabled,
        monitoringEnabled,
        backupFrequency !== 'disable',
        backupFrequency,
        hourlyRate,
        monthlyEstimate,
        authMethod,
        sshKeyId || null,
        regionData.name,
        regionData.cloudstack_zone_id,
        template.cloudstack_template_id,
        plan.cloudstack_offering_id,
        'provisioning',
        'Starting'
      ]
    );

    // Deploy to CloudStack asynchronously
    const deployVM = async () => {
      try {
        // Get SSH key if provided
        let keypairName = null;
        if (sshKeyId) {
          const sshKeys = await database.query(
            'SELECT name FROM ssh_keys WHERE id = ? AND user_id = ?',
            [sshKeyId, req.user.id]
          );
          if (sshKeys.length > 0) {
            keypairName = sshKeys[0].name;
          }
        }

        // Deploy VM to CloudStack
        const deployResult = await cloudstack.deployVirtualMachine({
          serviceOfferingId: plan.cloudstack_offering_id,
          templateId: template.cloudstack_template_id,
          zoneId: regionData.cloudstack_zone_id,
          networkId: network?.cloudstack_id,
          name: name,
          displayName: name,
          sshKeypair: keypairName,
          rootDiskSize: plan.disk_gb
        });

        const jobId = deployResult.jobid;
        const vmId = deployResult.id;

        // Update instance with CloudStack ID
        await database.query(
          'UPDATE instances SET cloudstack_vm_id = ? WHERE id = ?',
          [vmId, instanceId]
        );

        // Poll for deployment completion
        let deployed = false;
        let attempts = 0;
        const maxAttempts = 60; // 5 minutes (5 seconds * 60)

        while (!deployed && attempts < maxAttempts) {
          await new Promise(resolve => setTimeout(resolve, 5000));
          
          try {
            const vm = await cloudstack.getVirtualMachine(vmId);
            if (vm && vm.state === 'Running') {
              deployed = true;
              
              // Update instance with IP and status
              const ipAddress = vm.nic?.[0]?.ipaddress;
              
              await database.query(
                `UPDATE instances SET 
                  status = 'running', 
                  state = 'Running',
                  ipv4 = ?,
                  started_at = NOW()
                WHERE id = ?`,
                [ipAddress, instanceId]
              );

              // Broadcast update via WebSocket
              if (global.broadcast) {
                global.broadcast(`user:${req.user.id}`, {
                  type: 'INSTANCE_DEPLOYED',
                  data: { instanceId, status: 'running', ipv4: ipAddress }
                });
              }

              await logActivity(req.user.id, 'INSTANCE_DEPLOYED', 'instance', instanceId, 
                { vmId, ipAddress }, req.ip, req.headers['user-agent']);
            }
          } catch (pollError) {
            logger.warn(`Polling error for VM ${vmId}:`, pollError.message);
          }
          
          attempts++;
        }

        if (!deployed) {
          throw new Error('Deployment timeout');
        }

      } catch (deployError) {
        logger.error('CloudStack deployment failed:', deployError);
        
        await database.query(
          `UPDATE instances SET status = 'error', state = 'Error' WHERE id = ?`,
          [instanceId]
        );

        await logActivity(req.user.id, 'INSTANCE_DEPLOY_FAILED', 'instance', instanceId,
          { error: deployError.message }, req.ip, req.headers['user-agent'], 'failed', deployError.message);
      }
    };

    // Start deployment in background
    deployVM();

    // Log activity
    await logActivity(req.user.id, 'INSTANCE_CREATED', 'instance', instanceId,
      { plan: planId, region, template: templateId }, req.ip, req.headers['user-agent']);

    logger.info(`Instance created: ${instanceId} by user ${req.user.id}`);

    res.status(201).json({
      status: 'success',
      message: 'Instance creation started',
      data: {
        instance: {
          id: instanceId,
          name,
          status: 'provisioning',
          region: regionData.name,
          plan: plan.name,
          os: template.os_type,
          version: template.os_version
        }
      }
    });
  } catch (error) {
    next(error);
  }
});

// Start instance
router.post('/:id/start', protect, async (req, res, next) => {
  try {
    const instance = await database.query(
      'SELECT * FROM instances WHERE id = ? AND user_id = ?',
      [req.params.id, req.user.id]
    );

    if (instance.length === 0) {
      return next(new AppError('Instance not found', 404, 'INSTANCE_NOT_FOUND'));
    }

    if (!instance[0].cloudstack_vm_id) {
      return next(new AppError('Instance not yet deployed to CloudStack', 400, 'NOT_DEPLOYED'));
    }

    await cloudstack.startVirtualMachine(instance[0].cloudstack_vm_id);

    await database.query(
      `UPDATE instances SET status = 'starting', state = 'Starting' WHERE id = ?`,
      [req.params.id]
    );

    await logActivity(req.user.id, 'INSTANCE_START', 'instance', req.params.id,
      null, req.ip, req.headers['user-agent']);

    res.status(200).json({
      status: 'success',
      message: 'Instance starting'
    });
  } catch (error) {
    next(error);
  }
});

// Stop instance
router.post('/:id/stop', protect, async (req, res, next) => {
  try {
    const instance = await database.query(
      'SELECT * FROM instances WHERE id = ? AND user_id = ?',
      [req.params.id, req.user.id]
    );

    if (instance.length === 0) {
      return next(new AppError('Instance not found', 404, 'INSTANCE_NOT_FOUND'));
    }

    if (!instance[0].cloudstack_vm_id) {
      return next(new AppError('Instance not yet deployed to CloudStack', 400, 'NOT_DEPLOYED'));
    }

    await cloudstack.stopVirtualMachine(instance[0].cloudstack_vm_id);

    await database.query(
      `UPDATE instances SET status = 'stopping', state = 'Stopping' WHERE id = ?`,
      [req.params.id]
    );

    await logActivity(req.user.id, 'INSTANCE_STOP', 'instance', req.params.id,
      null, req.ip, req.headers['user-agent']);

    res.status(200).json({
      status: 'success',
      message: 'Instance stopping'
    });
  } catch (error) {
    next(error);
  }
});

// Reboot instance
router.post('/:id/reboot', protect, async (req, res, next) => {
  try {
    const instance = await database.query(
      'SELECT * FROM instances WHERE id = ? AND user_id = ?',
      [req.params.id, req.user.id]
    );

    if (instance.length === 0) {
      return next(new AppError('Instance not found', 404, 'INSTANCE_NOT_FOUND'));
    }

    if (!instance[0].cloudstack_vm_id) {
      return next(new AppError('Instance not yet deployed to CloudStack', 400, 'NOT_DEPLOYED'));
    }

    await cloudstack.rebootVirtualMachine(instance[0].cloudstack_vm_id);

    await logActivity(req.user.id, 'INSTANCE_REBOOT', 'instance', req.params.id,
      null, req.ip, req.headers['user-agent']);

    res.status(200).json({
      status: 'success',
      message: 'Instance rebooting'
    });
  } catch (error) {
    next(error);
  }
});

// Delete instance
router.delete('/:id', protect, async (req, res, next) => {
  try {
    const instance = await database.query(
      'SELECT * FROM instances WHERE id = ? AND user_id = ?',
      [req.params.id, req.user.id]
    );

    if (instance.length === 0) {
      return next(new AppError('Instance not found', 404, 'INSTANCE_NOT_FOUND'));
    }

    // Destroy in CloudStack if deployed
    if (instance[0].cloudstack_vm_id) {
      try {
        await cloudstack.destroyVirtualMachine(instance[0].cloudstack_vm_id, true);
      } catch (csError) {
        logger.warn(`CloudStack destroy failed for ${instance[0].cloudstack_vm_id}:`, csError.message);
      }
    }

    await database.query(
      `UPDATE instances SET status = 'destroyed', state = 'Destroyed', destroyed_at = NOW() WHERE id = ?`,
      [req.params.id]
    );

    await logActivity(req.user.id, 'INSTANCE_DESTROYED', 'instance', req.params.id,
      null, req.ip, req.headers['user-agent']);

    logger.info(`Instance destroyed: ${req.params.id}`);

    res.status(200).json({
      status: 'success',
      message: 'Instance destroyed successfully'
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
