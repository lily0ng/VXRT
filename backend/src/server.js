const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const logger = require('./utils/logger');
const errorHandler = require('./middleware/errorHandler');
const database = require('./database/connection');

// Import routes
const authRoutes = require('./routes/auth');
const instanceRoutes = require('./routes/instances');
const networkRoutes = require('./routes/networks');
const projectRoutes = require('./routes/projects');
const userRoutes = require('./routes/users');
const cloudstackRoutes = require('./routes/cloudstack');
const monitoringRoutes = require('./routes/monitoring');
const chatRoutes = require('./routes/chat');

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Health check endpoint
app.get('/api/health', async (req, res) => {
  try {
    await database.query('SELECT 1');
    res.json({ 
      status: 'healthy', 
      database: 'connected',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Health check failed:', error);
    res.status(503).json({ 
      status: 'unhealthy', 
      database: 'disconnected',
      error: error.message 
    });
  }
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/instances', instanceRoutes);
app.use('/api/networks', networkRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cloudstack', cloudstackRoutes);
app.use('/api/monitoring', monitoringRoutes);
app.use('/api/chat', chatRoutes);

// WebSocket for real-time updates
const WebSocket = require('ws');
const http = require('http');
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  logger.info('WebSocket client connected');
  
  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      // Handle different message types
      if (data.type === 'subscribe') {
        ws.subscription = data.channel;
      }
    } catch (error) {
      logger.error('WebSocket message error:', error);
    }
  });

  ws.on('close', () => {
    logger.info('WebSocket client disconnected');
  });
});

// Broadcast function for real-time updates
global.broadcast = (channel, data) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client.subscription === channel) {
      client.send(JSON.stringify({ channel, data }));
    }
  });
};

// Error handling
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
server.listen(PORT, () => {
  logger.info(`VXRT Backend Server running on port ${PORT}`);
  logger.info(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = { app, server };
