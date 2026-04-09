const express = require('express');
const { protect } = require('../middleware/auth');
const { AppError } = require('../middleware/errorHandler');
const cloudstack = require('../services/cloudstack');
const logger = require('../utils/logger');

const router = express.Router();

// Get available zones (regions)
router.get('/zones', protect, async (req, res, next) => {
  try {
    const zones = await cloudstack.listZones();

    res.status(200).json({
      status: 'success',
      results: zones.length,
      data: { zones }
    });
  } catch (error) {
    logger.error('Failed to list zones:', error);
    next(new AppError('Failed to fetch zones from CloudStack', 500, 'CLOUDSTACK_ERROR'));
  }
});

// Get available templates (OS images)
router.get('/templates', protect, async (req, res, next) => {
  try {
    const { zoneId, filter = 'featured' } = req.query;

    const templates = await cloudstack.listTemplates(filter, zoneId);

    res.status(200).json({
      status: 'success',
      results: templates.length,
      data: { templates }
    });
  } catch (error) {
    logger.error('Failed to list templates:', error);
    next(new AppError('Failed to fetch templates from CloudStack', 500, 'CLOUDSTACK_ERROR'));
  }
});

// Get available service offerings (plans)
router.get('/offerings', protect, async (req, res, next) => {
  try {
    const offerings = await cloudstack.listServiceOfferings();

    res.status(200).json({
      status: 'success',
      results: offerings.length,
      data: { offerings }
    });
  } catch (error) {
    logger.error('Failed to list offerings:', error);
    next(new AppError('Failed to fetch service offerings from CloudStack', 500, 'CLOUDSTACK_ERROR'));
  }
});

// Get networks from CloudStack
router.get('/networks', protect, async (req, res, next) => {
  try {
    const { zoneId } = req.query;

    const networks = await cloudstack.listNetworks(zoneId);

    res.status(200).json({
      status: 'success',
      results: networks.length,
      data: { networks }
    });
  } catch (error) {
    logger.error('Failed to list networks:', error);
    next(new AppError('Failed to fetch networks from CloudStack', 500, 'CLOUDSTACK_ERROR'));
  }
});

// Get VM console URL
router.get('/instances/:id/console', protect, async (req, res, next) => {
  try {
    const database = require('../database/connection');
    
    const instances = await database.query(
      'SELECT cloudstack_vm_id FROM instances WHERE id = ? AND user_id = ?',
      [req.params.id, req.user.id]
    );

    if (instances.length === 0) {
      return next(new AppError('Instance not found', 404, 'INSTANCE_NOT_FOUND'));
    }

    if (!instances[0].cloudstack_vm_id) {
      return next(new AppError('Instance not yet deployed', 400, 'NOT_DEPLOYED'));
    }

    const consoleData = await cloudstack.getVMCConsole(instances[0].cloudstack_vm_id);

    res.status(200).json({
      status: 'success',
      data: { console: consoleData }
    });
  } catch (error) {
    logger.error('Failed to get console:', error);
    next(new AppError('Failed to get VM console', 500, 'CONSOLE_ERROR'));
  }
});

// Reset VM password
router.post('/instances/:id/reset-password', protect, async (req, res, next) => {
  try {
    const database = require('../database/connection');
    
    const instances = await database.query(
      'SELECT cloudstack_vm_id FROM instances WHERE id = ? AND user_id = ?',
      [req.params.id, req.user.id]
    );

    if (instances.length === 0) {
      return next(new AppError('Instance not found', 404, 'INSTANCE_NOT_FOUND'));
    }

    if (!instances[0].cloudstack_vm_id) {
      return next(new AppError('Instance not yet deployed', 400, 'NOT_DEPLOYED'));
    }

    const result = await cloudstack.resetVMPassword(instances[0].cloudstack_vm_id);

    res.status(200).json({
      status: 'success',
      message: 'Password reset initiated',
      data: { password: result.password }
    });
  } catch (error) {
    logger.error('Failed to reset password:', error);
    next(new AppError('Failed to reset VM password', 500, 'PASSWORD_RESET_ERROR'));
  }
});

// Get VM status from CloudStack
router.get('/instances/:id/status', protect, async (req, res, next) => {
  try {
    const database = require('../database/connection');
    
    const instances = await database.query(
      'SELECT cloudstack_vm_id FROM instances WHERE id = ? AND user_id = ?',
      [req.params.id, req.user.id]
    );

    if (instances.length === 0) {
      return next(new AppError('Instance not found', 404, 'INSTANCE_NOT_FOUND'));
    }

    if (!instances[0].cloudstack_vm_id) {
      return res.status(200).json({
        status: 'success',
        data: { state: 'Provisioning', ready: false }
      });
    }

    const vm = await cloudstack.getVirtualMachine(instances[0].cloudstack_vm_id);

    res.status(200).json({
      status: 'success',
      data: {
        state: vm?.state || 'Unknown',
        ready: vm?.state === 'Running',
        ipAddress: vm?.nic?.[0]?.ipaddress,
        cpuNumber: vm?.cpunumber,
        memory: vm?.memory,
        diskSize: vm?.rootdisksize
      }
    });
  } catch (error) {
    logger.error('Failed to get VM status:', error);
    next(new AppError('Failed to get VM status', 500, 'STATUS_ERROR'));
  }
});

// Sync CloudStack resources to local database
router.post('/sync', protect, async (req, res, next) => {
  try {
    // This would typically be restricted to admin users
    if (req.user.role !== 'admin') {
      return next(new AppError('Admin access required', 403, 'INSUFFICIENT_PERMISSIONS'));
    }

    const { resourceType } = req.body;

    let synced = 0;

    switch (resourceType) {
      case 'templates':
        const templates = await cloudstack.listTemplates('all');
        // Sync logic here
        synced = templates.length;
        break;

      case 'offerings':
        const offerings = await cloudstack.listServiceOfferings();
        // Sync logic here
        synced = offerings.length;
        break;

      case 'zones':
        const zones = await cloudstack.listZones();
        // Sync logic here
        synced = zones.length;
        break;

      default:
        return next(new AppError('Invalid resource type', 400, 'INVALID_RESOURCE_TYPE'));
    }

    res.status(200).json({
      status: 'success',
      message: `Synced ${synced} ${resourceType}`,
      data: { synced }
    });
  } catch (error) {
    logger.error('Sync failed:', error);
    next(new AppError('Failed to sync resources', 500, 'SYNC_ERROR'));
  }
});

module.exports = router;
