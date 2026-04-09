const logger = require('../utils/logger');

// Custom error class
class AppError extends Error {
  constructor(message, statusCode, code = null) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    this.code = code;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Error handler middleware
const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // Log error
  logger.error({
    message: err.message,
    statusCode: err.statusCode,
    stack: err.stack,
    path: req.path,
    method: req.method,
    ip: req.ip
  });

  // Different error responses for dev and prod
  if (process.env.NODE_ENV === 'development') {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      code: err.code,
      error: err,
      stack: err.stack
    });
  }

  // Production error response
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      code: err.code
    });
  }

  // Unknown errors - don't leak details
  return res.status(500).json({
    status: 'error',
    message: 'Something went wrong!'
  });
};

// Handle specific error types
const handleDBError = (error) => {
  // MySQL duplicate entry
  if (error.code === 'ER_DUP_ENTRY') {
    const message = 'Duplicate field value entered';
    return new AppError(message, 400, 'DUPLICATE_ENTRY');
  }

  // MySQL foreign key constraint
  if (error.code === 'ER_NO_REFERENCED_ROW' || error.code === 'ER_ROW_IS_REFERENCED') {
    const message = 'Referenced record not found';
    return new AppError(message, 400, 'REFERENCED_ERROR');
  }

  // MySQL validation error
  if (error.code === 'ER_BAD_NULL_ERROR') {
    const message = 'Required field is missing';
    return new AppError(message, 400, 'VALIDATION_ERROR');
  }

  return error;
};

const handleJWTError = () => {
  return new AppError('Invalid token. Please log in again.', 401, 'INVALID_TOKEN');
};

const handleJWTExpiredError = () => {
  return new AppError('Your token has expired. Please log in again.', 401, 'TOKEN_EXPIRED');
};

module.exports = {
  AppError,
  errorHandler,
  handleDBError,
  handleJWTError,
  handleJWTExpiredError
};
