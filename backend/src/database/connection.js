const mysql = require('mysql2/promise');
const logger = require('../utils/logger');

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'vxrt_user',
  password: process.env.DB_PASSWORD || 'vxrt_password',
  database: process.env.DB_NAME || 'vxrt_db',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  acquireTimeout: 60000,
  timeout: 60000,
  reconnect: true
};

// Create connection pool
const pool = mysql.createPool(dbConfig);

// Test connection
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    logger.info('MySQL Database connected successfully');
    connection.release();
    return true;
  } catch (error) {
    logger.error('MySQL Database connection failed:', error.message);
    return false;
  }
};

// Query helper
const query = async (sql, params) => {
  try {
    const [results] = await pool.execute(sql, params);
    return results;
  } catch (error) {
    logger.error('Database query error:', error.message);
    throw error;
  }
};

// Transaction helper
const transaction = async (callback) => {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    const result = await callback(connection);
    await connection.commit();
    return result;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};

module.exports = {
  pool,
  query,
  transaction,
  testConnection
};
