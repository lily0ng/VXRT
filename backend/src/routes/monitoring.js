const express = require('express');
const database = require('../database/connection');
const { protect } = require('../middleware/auth');
const { AppError } = require('../middleware/errorHandler');
const logger = require('../utils/logger');

const router = express.Router();

// Get instance metrics (simulated - in production this would come from monitoring system)
router.get('/instances/:id/metrics', protect, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { timeRange = '1h' } = req.query;

    // Verify instance belongs to user
    const instances = await database.query(
      'SELECT id, status FROM instances WHERE id = ? AND user_id = ?',
      [id, req.user.id]
    );

    if (instances.length === 0) {
      return next(new AppError('Instance not found', 404, 'INSTANCE_NOT_FOUND'));
    }

    // Generate simulated metrics data
    const now = Date.now();
    const points = timeRange === '1h' ? 60 : timeRange === '24h' ? 288 : 168;
    const interval = timeRange === '1h' ? 60000 : timeRange === '24h' ? 300000 : 3600000;

    const metrics = {
      cpu: [],
      memory: [],
      disk: [],
      network: []
    };

    for (let i = 0; i < points; i++) {
      const timestamp = now - (points - i) * interval;
      
      // Simulate realistic metrics with some randomness
      metrics.cpu.push({
        timestamp,
        value: Math.random() * 30 + 10 // 10-40% CPU
      });
      
      metrics.memory.push({
        timestamp,
        value: Math.random() * 20 + 40 // 40-60% Memory
      });
      
      metrics.disk.push({
        timestamp,
        read: Math.random() * 100,
        write: Math.random() * 50
      });
      
      metrics.network.push({
        timestamp,
        inbound: Math.random() * 1000,
        outbound: Math.random() * 500
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        instanceId: id,
        timeRange,
        metrics
      }
    });
  } catch (error) {
    next(error);
  }
});

// Get instance status history
router.get('/instances/:id/history', protect, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { limit = 100 } = req.query;

    // Verify instance belongs to user
    const instances = await database.query(
      'SELECT id FROM instances WHERE id = ? AND user_id = ?',
      [id, req.user.id]
    );

    if (instances.length === 0) {
      return next(new AppError('Instance not found', 404, 'INSTANCE_NOT_FOUND'));
    }

    // Get status changes from activity logs
    const history = await database.query(
      `SELECT action, status, details, created_at
       FROM activity_logs
       WHERE resource_id = ? AND resource_type = 'instance'
       AND action IN ('INSTANCE_START', 'INSTANCE_STOP', 'INSTANCE_REBOOT', 'INSTANCE_DEPLOYED', 'INSTANCE_DESTROYED')
       ORDER BY created_at DESC
       LIMIT ?`,
      [id, parseInt(limit)]
    );

    res.status(200).json({
      status: 'success',
      data: { history }
    });
  } catch (error) {
    next(error);
  }
});

// Get dashboard stats
router.get('/dashboard', protect, async (req, res, next) => {
  try {
    const userId = req.user.id;

    // Get instance counts
    const instanceStats = await database.query(
      `SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN status = 'running' THEN 1 ELSE 0 END) as running,
        SUM(CASE WHEN status = 'stopped' THEN 1 ELSE 0 END) as stopped,
        SUM(CASE WHEN status = 'provisioning' THEN 1 ELSE 0 END) as provisioning,
        SUM(CASE WHEN status = 'error' THEN 1 ELSE 0 END) as error
       FROM instances
       WHERE user_id = ? AND status != 'destroyed'`,
      [userId]
    );

    // Get network counts
    const networkStats = await database.query(
      `SELECT COUNT(*) as total
       FROM networks n
       LEFT JOIN projects p ON n.project_id = p.id
       WHERE (n.project_id IS NULL OR p.owner_id = ? OR EXISTS (
         SELECT 1 FROM project_members pm WHERE pm.project_id = n.project_id AND pm.user_id = ?
       ))`,
      [userId, userId]
    );

    // Get project count
    const projectStats = await database.query(
      `SELECT COUNT(*) as total
       FROM projects p
       WHERE p.status = 'active' AND (p.owner_id = ? OR EXISTS (
         SELECT 1 FROM project_members pm WHERE pm.project_id = p.id AND pm.user_id = ?
       ))`,
      [userId, userId]
    );

    // Get monthly cost estimate
    const costEstimate = await database.query(
      `SELECT SUM(monthly_estimate) as total
       FROM instances
       WHERE user_id = ? AND status != 'destroyed'`,
      [userId]
    );

    // Get recent activity
    const recentActivity = await database.query(
      `SELECT action, resource_type, resource_id, status, created_at
       FROM activity_logs
       WHERE user_id = ?
       ORDER BY created_at DESC
       LIMIT 10`,
      [userId]
    );

    res.status(200).json({
      status: 'success',
      data: {
        instances: instanceStats[0],
        networks: networkStats[0],
        projects: projectStats[0],
        monthlyEstimate: costEstimate[0].total || 0,
        recentActivity
      }
    });
  } catch (error) {
    next(error);
  }
});

// Get alerts/notifications
router.get('/alerts', protect, async (req, res, next) => {
  try {
    // In production, this would query an alerts/notification system
    // For now, return simulated alerts based on instance status
    const instances = await database.query(
      `SELECT id, name, status, created_at
       FROM instances
       WHERE user_id = ? AND status IN ('error', 'provisioning')
       ORDER BY created_at DESC
       LIMIT 10`,
      [req.user.id]
    );

    const alerts = instances.map(instance => ({
      id: `alert-${instance.id}`,
      type: instance.status === 'error' ? 'error' : 'info',
      message: instance.status === 'error' 
        ? `Instance "${instance.name}" encountered an error`
        : `Instance "${instance.name}" is being provisioned`,
      instanceId: instance.id,
      createdAt: instance.created_at,
      read: false
    }));

    res.status(200).json({
      status: 'success',
      data: { alerts, unreadCount: alerts.length }
    });
  } catch (error) {
    next(error);
  }
});

// System health check (admin only)
router.get('/system/health', protect, async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return next(new AppError('Admin access required', 403, 'INSUFFICIENT_PERMISSIONS'));
    }

    const health = {
      database: 'unknown',
      cloudstack: 'unknown',
      timestamp: new Date().toISOString()
    };

    // Check database
    try {
      await database.query('SELECT 1');
      health.database = 'healthy';
    } catch (error) {
      health.database = 'unhealthy';
      health.databaseError = error.message;
    }

    // Check CloudStack
    try {
      const cloudstack = require('../services/cloudstack');
      await cloudstack.listZones();
      health.cloudstack = 'healthy';
    } catch (error) {
      health.cloudstack = 'unhealthy';
      health.cloudstackError = error.message;
    }

    // Get system stats
    const stats = await database.query(
      `SELECT 
        (SELECT COUNT(*) FROM users WHERE status = 'active') as active_users,
        (SELECT COUNT(*) FROM instances WHERE status = 'running') as running_instances,
        (SELECT COUNT(*) FROM instances WHERE status = 'provisioning') as provisioning_instances,
        (SELECT COUNT(*) FROM networks WHERE status = 'active') as active_networks,
        (SELECT SUM(monthly_estimate) FROM instances WHERE status != 'destroyed') as total_monthly_revenue
      FROM dual`
    );

    health.stats = stats[0];

    res.status(200).json({
      status: 'success',
      data: { health }
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
