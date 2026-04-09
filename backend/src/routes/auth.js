const express = require('express');
const { v4: uuidv4 } = require('uuid');
const Joi = require('joi');
const database = require('../database/connection');
const { generateToken, hashPassword, comparePassword, protect, logActivity } = require('../middleware/auth');
const { AppError } = require('../middleware/errorHandler');
const logger = require('../utils/logger');

const router = express.Router();

// Validation schemas
const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

// Register new user
router.post('/register', async (req, res, next) => {
  try {
    // Validate input
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return next(new AppError(error.details[0].message, 400, 'VALIDATION_ERROR'));
    }

    const { email, password, firstName, lastName } = req.body;

    // Check if user exists
    const existingUsers = await database.query(
      'SELECT id FROM users WHERE email = ?',
      [email]
    );

    if (existingUsers.length > 0) {
      return next(new AppError('Email already registered', 409, 'EMAIL_EXISTS'));
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Create user
    const userId = uuidv4();
    await database.query(
      `INSERT INTO users (id, email, password_hash, first_name, last_name) 
       VALUES (?, ?, ?, ?, ?)`,
      [userId, email, passwordHash, firstName, lastName]
    );

    // Create default project for user
    const projectId = uuidv4();
    await database.query(
      `INSERT INTO projects (id, name, description, owner_id) 
       VALUES (?, 'My First Project', 'Default project created automatically', ?)`,
      [projectId, userId]
    );

    // Add user as owner of project
    await database.query(
      `INSERT INTO project_members (project_id, user_id, role) 
       VALUES (?, ?, 'owner')`,
      [projectId, userId]
    );

    // Generate token
    const token = generateToken(userId);

    // Log activity
    await logActivity(userId, 'USER_REGISTERED', 'user', userId, null, req.ip, req.headers['user-agent']);

    logger.info(`New user registered: ${email}`);

    res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      data: {
        token,
        user: {
          id: userId,
          email,
          firstName,
          lastName,
          role: 'user'
        }
      }
    });
  } catch (error) {
    next(error);
  }
});

// Login user
router.post('/login', async (req, res, next) => {
  try {
    // Validate input
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return next(new AppError(error.details[0].message, 400, 'VALIDATION_ERROR'));
    }

    const { email, password } = req.body;

    // Find user
    const users = await database.query(
      'SELECT id, email, password_hash, first_name, last_name, role, status FROM users WHERE email = ?',
      [email]
    );

    if (users.length === 0) {
      return next(new AppError('Invalid email or password', 401, 'INVALID_CREDENTIALS'));
    }

    const user = users[0];

    // Check if user is active
    if (user.status !== 'active') {
      return next(new AppError('Account is not active. Please contact support.', 403, 'ACCOUNT_INACTIVE'));
    }

    // Check password
    const isPasswordValid = await comparePassword(password, user.password_hash);

    if (!isPasswordValid) {
      return next(new AppError('Invalid email or password', 401, 'INVALID_CREDENTIALS'));
    }

    // Update last login
    await database.query(
      'UPDATE users SET last_login = NOW() WHERE id = ?',
      [user.id]
    );

    // Generate token
    const token = generateToken(user.id);

    // Log activity
    await logActivity(user.id, 'USER_LOGIN', 'user', user.id, null, req.ip, req.headers['user-agent']);

    logger.info(`User logged in: ${email}`);

    res.status(200).json({
      status: 'success',
      data: {
        token,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          role: user.role
        }
      }
    });
  } catch (error) {
    next(error);
  }
});

// Get current user
router.get('/me', protect, async (req, res, next) => {
  try {
    const users = await database.query(
      `SELECT u.id, u.email, u.first_name, u.last_name, u.role, u.status, u.created_at, u.last_login,
              COUNT(p.id) as project_count
       FROM users u
       LEFT JOIN projects p ON p.owner_id = u.id
       WHERE u.id = ?
       GROUP BY u.id`,
      [req.user.id]
    );

    if (users.length === 0) {
      return next(new AppError('User not found', 404, 'USER_NOT_FOUND'));
    }

    const user = users[0];

    res.status(200).json({
      status: 'success',
      data: {
        user: {
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          role: user.role,
          status: user.status,
          createdAt: user.created_at,
          lastLogin: user.last_login,
          projectCount: user.project_count
        }
      }
    });
  } catch (error) {
    next(error);
  }
});

// Update user profile
router.patch('/me', protect, async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;

    await database.query(
      'UPDATE users SET first_name = ?, last_name = ? WHERE id = ?',
      [firstName, lastName, req.user.id]
    );

    await logActivity(req.user.id, 'USER_PROFILE_UPDATED', 'user', req.user.id, null, req.ip, req.headers['user-agent']);

    res.status(200).json({
      status: 'success',
      message: 'Profile updated successfully'
    });
  } catch (error) {
    next(error);
  }
});

// Change password
router.patch('/password', protect, async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // Get current password hash
    const users = await database.query(
      'SELECT password_hash FROM users WHERE id = ?',
      [req.user.id]
    );

    // Verify current password
    const isValid = await comparePassword(currentPassword, users[0].password_hash);
    if (!isValid) {
      return next(new AppError('Current password is incorrect', 401, 'INVALID_PASSWORD'));
    }

    // Hash new password
    const newPasswordHash = await hashPassword(newPassword);

    // Update password
    await database.query(
      'UPDATE users SET password_hash = ? WHERE id = ?',
      [newPasswordHash, req.user.id]
    );

    await logActivity(req.user.id, 'PASSWORD_CHANGED', 'user', req.user.id, null, req.ip, req.headers['user-agent']);

    res.status(200).json({
      status: 'success',
      message: 'Password changed successfully'
    });
  } catch (error) {
    next(error);
  }
});

// Logout (client-side token removal, but we log the activity)
router.post('/logout', protect, async (req, res, next) => {
  try {
    await logActivity(req.user.id, 'USER_LOGOUT', 'user', req.user.id, null, req.ip, req.headers['user-agent']);

    res.status(200).json({
      status: 'success',
      message: 'Logged out successfully'
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
