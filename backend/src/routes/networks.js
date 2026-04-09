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
const createNetworkSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  type: Joi.string().valid('isolated', 'vpc', 'l2').required(),
  networkType: Joi.string().valid('Public Network', 'Private Network', 'Hybrid Network').default('Public Network'),
  region: Joi.string().required(),
  cidr: Joi.string().optional(),
  subnet: Joi.string().optional(),
  isDefault: Joi.boolean().default(false),
  projectId: Joi.string().uuid().optional()
});

// Get all networks
router.get('/', protect, async (req, res, next) => {
  try {
    const { projectId } = req.query;
    
    let query = `
      SELECT n.*, p.name as project_name
      FROM networks n
      LEFT JOIN projects p ON n.project_id = p.id
      WHERE (n.project_id IS NULL OR p.owner_id = ? OR EXISTS (
        SELECT 1 FROM project_members pm WHERE pm.project_id = n.project_id AND pm.user_id = ?
      ))
    `;
    const params = [req.user.id, req.user.id];

    if (projectId) {
      query += ' AND n.project_id = ?';
      params.push(projectId);
    }

    query += ' ORDER BY n.created_at DESC';

    const networks = await database.query(query, params);

    res.status(200).json({
      status: 'success',
      results: networks.length,
      data: { networks }
    });
  } catch (error) {
    next(error);
  }
});

// Get single network
router.get('/:id', protect, async (req, res, next) => {
  try {
    const networks = await database.query(
      `SELECT n.*, p.name as project_name
       FROM networks n
       LEFT JOIN projects p ON n.project_id = p.id
       WHERE n.id = ? AND (p.owner_id = ? OR EXISTS (
         SELECT 1 FROM project_members pm WHERE pm.project_id = n.project_id AND pm.user_id = ?
       ))`,
      [req.params.id, req.user.id, req.user.id]
    );

    if (networks.length === 0) {
      return next(new AppError('Network not found', 404, 'NETWORK_NOT_FOUND'));
    }

    res.status(200).json({
      status: 'success',
      data: { network: networks[0] }
    });
  } catch (error) {
    next(error);
  }
});

// Create new network
router.post('/', protect, async (req, res, next) => {
  try {
    // Validate input
    const { error } = createNetworkSchema.validate(req.body);
    if (error) {
      return next(new AppError(error.details[0].message, 400, 'VALIDATION_ERROR'));
    }

    const {
      name,
      type,
      networkType,
      region,
      cidr,
      subnet,
      isDefault,
      projectId
    } = req.body;

    // Get region details
    const regions = await database.query(
      'SELECT * FROM regions WHERE code = ? OR name = ?',
      [region, region]
    );

    if (regions.length === 0) {
      return next(new AppError('Invalid region selected', 400, 'INVALID_REGION'));
    }

    const regionData = regions[0];

    // If setting as default, unset other defaults
    if (isDefault) {
      await database.query(
        'UPDATE networks SET is_default = FALSE WHERE is_default = TRUE'
      );
    }

    // Create network ID
    const networkId = `d-net-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;

    // Create in CloudStack
    let cloudstackNetworkId = null;
    try {
      // Get network offering based on type
      const networkOfferings = await cloudstack.makeRequest('listNetworkOfferings', {
        guestiptype: type === 'isolated' ? 'Isolated' : type === 'vpc' ? 'Shared' : 'L2',
        state: 'Enabled'
      });

      const offerings = networkOfferings.listnetworkofferingsresponse?.networkoffering || [];
      if (offerings.length > 0) {
        const offering = offerings[0];
        
        const createResult = await cloudstack.createNetwork(
          name,
          `${name} - ${type} network`,
          offering.id,
          regionData.cloudstack_zone_id,
          cidr
        );
        
        cloudstackNetworkId = createResult.network?.id;
      }
    } catch (csError) {
      logger.warn(`CloudStack network creation failed: ${csError.message}`);
      // Continue with local creation even if CloudStack fails
    }

    // Create network in database
    await database.query(
      `INSERT INTO networks (
        id, name, type, network_type, region, cidr, subnet,
        is_default, project_id, cloudstack_id, status, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active', NOW())`,
      [
        networkId,
        name,
        type,
        networkType,
        regionData.name,
        cidr || '192.168.0.0/16',
        subnet || '255.255.255.0',
        isDefault,
        projectId || null,
        cloudstackNetworkId
      ]
    );

    await logActivity(req.user.id, 'NETWORK_CREATED', 'network', networkId,
      { type, region: regionData.name }, req.ip, req.headers['user-agent']);

    logger.info(`Network created: ${networkId}`);

    res.status(201).json({
      status: 'success',
      message: 'Network created successfully',
      data: {
        network: {
          id: networkId,
          name,
          type,
          networkType,
          region: regionData.name,
          isDefault,
          status: 'active',
          createdAt: new Date().toISOString()
        }
      }
    });
  } catch (error) {
    next(error);
  }
});

// Update network
router.patch('/:id', protect, async (req, res, next) => {
  try {
    const { name, isDefault } = req.body;

    // Check if network exists
    const networks = await database.query(
      `SELECT n.* FROM networks n
       LEFT JOIN projects p ON n.project_id = p.id
       WHERE n.id = ? AND (p.owner_id = ? OR EXISTS (
         SELECT 1 FROM project_members pm WHERE pm.project_id = n.project_id AND pm.user_id = ? AND pm.role IN ('owner', 'admin')
       ))`,
      [req.params.id, req.user.id, req.user.id]
    );

    if (networks.length === 0) {
      return next(new AppError('Network not found or insufficient permissions', 404, 'NETWORK_NOT_FOUND'));
    }

    // If setting as default, unset others
    if (isDefault) {
      await database.query('UPDATE networks SET is_default = FALSE');
    }

    await database.query(
      'UPDATE networks SET name = ?, is_default = ? WHERE id = ?',
      [name, isDefault, req.params.id]
    );

    await logActivity(req.user.id, 'NETWORK_UPDATED', 'network', req.params.id,
      null, req.ip, req.headers['user-agent']);

    res.status(200).json({
      status: 'success',
      message: 'Network updated successfully'
    });
  } catch (error) {
    next(error);
  }
});

// Delete network
router.delete('/:id', protect, async (req, res, next) => {
  try {
    // Check if network exists and has no attached instances
    const networks = await database.query(
      `SELECT n.*, COUNT(i.id) as instance_count
       FROM networks n
       LEFT JOIN projects p ON n.project_id = p.id
       LEFT JOIN instances i ON i.network_id = n.id
       WHERE n.id = ? AND (p.owner_id = ? OR EXISTS (
         SELECT 1 FROM project_members pm WHERE pm.project_id = n.project_id AND pm.user_id = ? AND pm.role IN ('owner', 'admin')
       ))
       GROUP BY n.id`,
      [req.params.id, req.user.id, req.user.id]
    );

    if (networks.length === 0) {
      return next(new AppError('Network not found or insufficient permissions', 404, 'NETWORK_NOT_FOUND'));
    }

    if (networks[0].instance_count > 0) {
      return next(new AppError('Cannot delete network with attached instances', 400, 'NETWORK_IN_USE'));
    }

    // Delete from CloudStack
    if (networks[0].cloudstack_id) {
      try {
        await cloudstack.deleteNetwork(networks[0].cloudstack_id);
      } catch (csError) {
        logger.warn(`CloudStack network delete failed: ${csError.message}`);
      }
    }

    await database.query('DELETE FROM networks WHERE id = ?', [req.params.id]);

    await logActivity(req.user.id, 'NETWORK_DELETED', 'network', req.params.id,
      null, req.ip, req.headers['user-agent']);

    logger.info(`Network deleted: ${req.params.id}`);

    res.status(200).json({
      status: 'success',
      message: 'Network deleted successfully'
    });
  } catch (error) {
    next(error);
  }
});

// Get available regions
router.get('/regions/list', protect, async (req, res, next) => {
  try {
    const regions = await database.query(
      'SELECT * FROM regions WHERE is_active = TRUE ORDER BY name'
    );

    res.status(200).json({
      status: 'success',
      data: { regions }
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
