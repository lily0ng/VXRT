const express = require('express');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');
const database = require('../database/connection');
const { protect, restrictTo, logActivity } = require('../middleware/auth');
const { AppError } = require('../middleware/errorHandler');
const logger = require('../utils/logger');

const router = express.Router();

// Get all users (admin only)
router.get('/', protect, restrictTo('admin'), async (req, res, next) => {
  try {
    const { status, role, search } = req.query;
    
    let query = `
      SELECT id, email, first_name, last_name, role, status, created_at, last_login
      FROM users
      WHERE 1=1
    `;
    const params = [];

    if (status) {
      query += ' AND status = ?';
      params.push(status);
    }

    if (role) {
      query += ' AND role = ?';
      params.push(role);
    }

    if (search) {
      query += ' AND (email LIKE ? OR first_name LIKE ? OR last_name LIKE ?)';
      const searchTerm = `%${search}%`;
      params.push(searchTerm, searchTerm, searchTerm);
    }

    query += ' ORDER BY created_at DESC';

    const users = await database.query(query, params);

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: { users }
    });
  } catch (error) {
    next(error);
  }
});

// Get user SSH keys
router.get('/ssh-keys', protect, async (req, res, next) => {
  try {
    const sshKeys = await database.query(
      'SELECT id, name, fingerprint, created_at FROM ssh_keys WHERE user_id = ?',
      [req.user.id]
    );

    res.status(200).json({
      status: 'success',
      data: { sshKeys }
    });
  } catch (error) {
    next(error);
  }
});

// Add SSH key
router.post('/ssh-keys', protect, async (req, res, next) => {
  try {
    const { name, publicKey } = req.body;

    if (!name || !publicKey) {
      return next(new AppError('Name and public key are required', 400, 'VALIDATION_ERROR'));
    }

    // Generate fingerprint
    const fingerprint = crypto
      .createHash('sha256')
      .update(publicKey)
      .digest('hex')
      .substring(0, 16);

    const keyId = uuidv4();

    await database.query(
      'INSERT INTO ssh_keys (id, user_id, name, fingerprint, public_key) VALUES (?, ?, ?, ?, ?)',
      [keyId, req.user.id, name, fingerprint, publicKey]
    );

    await logActivity(req.user.id, 'SSH_KEY_ADDED', 'user', req.user.id,
      { keyName: name }, req.ip, req.headers['user-agent']);

    res.status(201).json({
      status: 'success',
      message: 'SSH key added successfully',
      data: {
        sshKey: {
          id: keyId,
          name,
          fingerprint,
          createdAt: new Date().toISOString()
        }
      }
    });
  } catch (error) {
    next(error);
  }
});

// Delete SSH key
router.delete('/ssh-keys/:id', protect, async (req, res, next) => {
  try {
    const result = await database.query(
      'DELETE FROM ssh_keys WHERE id = ? AND user_id = ?',
      [req.params.id, req.user.id]
    );

    if (result.affectedRows === 0) {
      return next(new AppError('SSH key not found', 404, 'SSH_KEY_NOT_FOUND'));
    }

    await logActivity(req.user.id, 'SSH_KEY_DELETED', 'user', req.user.id,
      null, req.ip, req.headers['user-agent']);

    res.status(200).json({
      status: 'success',
      message: 'SSH key deleted successfully'
    });
  } catch (error) {
    next(error);
  }
});

// Get user activity logs
router.get('/activity', protect, async (req, res, next) => {
  try {
    const { limit = 50, offset = 0 } = req.query;

    const activities = await database.query(
      `SELECT id, action, resource_type, resource_id, details, ip_address, status, created_at
       FROM activity_logs
       WHERE user_id = ?
       ORDER BY created_at DESC
       LIMIT ? OFFSET ?`,
      [req.user.id, parseInt(limit), parseInt(offset)]
    );

    const total = await database.query(
      'SELECT COUNT(*) as count FROM activity_logs WHERE user_id = ?',
      [req.user.id]
    );

    res.status(200).json({
      status: 'success',
      results: activities.length,
      total: total[0].count,
      data: { activities }
    });
  } catch (error) {
    next(error);
  }
});

// Admin: Update user status
router.patch('/:id/status', protect, restrictTo('admin'), async (req, res, next) => {
  try {
    const { status } = req.body;

    if (!['active', 'inactive', 'suspended'].includes(status)) {
      return next(new AppError('Invalid status', 400, 'INVALID_STATUS'));
    }

    await database.query(
      'UPDATE users SET status = ? WHERE id = ?',
      [status, req.params.id]
    );

    await logActivity(req.user.id, 'USER_STATUS_UPDATED', 'user', req.params.id,
      { newStatus: status }, req.ip, req.headers['user-agent']);

    logger.info(`User ${req.params.id} status changed to ${status}`);

    res.status(200).json({
      status: 'success',
      message: 'User status updated'
    });
  } catch (error) {
    next(error);
  }
});

// Admin: Update user role
router.patch('/:id/role', protect, restrictTo('admin'), async (req, res, next) => {
  try {
    const { role } = req.body;

    if (!['admin', 'user', 'viewer'].includes(role)) {
      return next(new AppError('Invalid role', 400, 'INVALID_ROLE'));
    }

    await database.query(
      'UPDATE users SET role = ? WHERE id = ?',
      [role, req.params.id]
    );

    await logActivity(req.user.id, 'USER_ROLE_UPDATED', 'user', req.params.id,
      { newRole: role }, req.ip, req.headers['user-agent']);

    logger.info(`User ${req.params.id} role changed to ${role}`);

    res.status(200).json({
      status: 'success',
      message: 'User role updated'
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
