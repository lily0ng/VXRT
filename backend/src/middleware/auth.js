const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const database = require('../database/connection');
const { AppError } = require('./errorHandler');
const logger = require('../utils/logger');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
const JWT_COOKIE_EXPIRES_IN = parseInt(process.env.JWT_COOKIE_EXPIRES_IN) || 7;

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN
  });
};

// Hash password
const hashPassword = async (password) => {
  return await bcrypt.hash(password, 12);
};

// Compare password
const comparePassword = async (candidatePassword, userPassword) => {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// Protect routes - verify JWT token
const protect = async (req, res, next) => {
  try {
    let token;

    // Get token from header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return next(new AppError('You are not logged in. Please log in to get access.', 401, 'NOT_AUTHENTICATED'));
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Check if user still exists
    const users = await database.query(
      'SELECT id, email, first_name, last_name, role, status FROM users WHERE id = ?',
      [decoded.id]
    );

    if (users.length === 0) {
      return next(new AppError('The user belonging to this token no longer exists.', 401, 'USER_NOT_FOUND'));
    }

    const user = users[0];

    // Check if user is active
    if (user.status !== 'active') {
      return next(new AppError('Your account is not active. Please contact support.', 403, 'ACCOUNT_INACTIVE'));
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return next(new AppError('Invalid token. Please log in again.', 401, 'INVALID_TOKEN'));
    }
    if (error.name === 'TokenExpiredError') {
      return next(new AppError('Your token has expired. Please log in again.', 401, 'TOKEN_EXPIRED'));
    }
    next(error);
  }
};

// Restrict to specific roles
const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError('You do not have permission to perform this action.', 403, 'INSUFFICIENT_PERMISSIONS'));
    }
    next();
  };
};

// Optional authentication - doesn't require auth but attaches user if available
const optionalAuth = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (token) {
      const decoded = jwt.verify(token, JWT_SECRET);
      const users = await database.query(
        'SELECT id, email, first_name, last_name, role, status FROM users WHERE id = ?',
        [decoded.id]
      );

      if (users.length > 0 && users[0].status === 'active') {
        req.user = users[0];
      }
    }

    next();
  } catch (error) {
    next();
  }
};

// Refresh token
const refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return next(new AppError('Refresh token is required', 400, 'MISSING_REFRESH_TOKEN'));
    }

    const decoded = jwt.verify(refreshToken, JWT_SECRET);
    
    const users = await database.query(
      'SELECT id, email, status FROM users WHERE id = ?',
      [decoded.id]
    );

    if (users.length === 0 || users[0].status !== 'active') {
      return next(new AppError('Invalid refresh token', 401, 'INVALID_REFRESH_TOKEN'));
    }

    const token = generateToken(users[0].id);

    res.status(200).json({
      status: 'success',
      token
    });
  } catch (error) {
    next(error);
  }
};

// Log activity
const logActivity = async (userId, action, resourceType, resourceId, details = null, ipAddress = null, userAgent = null, status = 'success', errorMessage = null) => {
  try {
    await database.query(
      `INSERT INTO activity_logs (user_id, action, resource_type, resource_id, details, ip_address, user_agent, status, error_message) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [userId, action, resourceType, resourceId, details ? JSON.stringify(details) : null, ipAddress, userAgent, status, errorMessage]
    );
  } catch (error) {
    logger.error('Failed to log activity:', error);
  }
};

module.exports = {
  generateToken,
  hashPassword,
  comparePassword,
  protect,
  restrictTo,
  optionalAuth,
  refreshToken,
  logActivity,
  JWT_SECRET,
  JWT_COOKIE_EXPIRES_IN
};
