const express = require('express');
const { v4: uuidv4 } = require('uuid');
const Joi = require('joi');
const database = require('../database/connection');
const { protect, restrictTo, logActivity } = require('../middleware/auth');
const { AppError } = require('../middleware/errorHandler');
const logger = require('../utils/logger');

const router = express.Router();

// Validation schemas
const createProjectSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().max(500).optional(),
  color: Joi.string().valid('blue', 'green', 'red', 'yellow', 'purple', 'orange', 'pink').default('blue')
});

const addMemberSchema = Joi.object({
  email: Joi.string().email().required(),
  role: Joi.string().valid('admin', 'member').default('member')
});

// Get all projects for user
router.get('/', protect, async (req, res, next) => {
  try {
    const projects = await database.query(
      `SELECT p.*, 
        COUNT(DISTINCT pm.user_id) as member_count,
        COUNT(DISTINCT i.id) as instance_count,
        u.first_name as owner_first_name,
        u.last_name as owner_last_name
      FROM projects p
      LEFT JOIN project_members pm ON p.id = pm.project_id
      LEFT JOIN instances i ON i.project_id = p.id
      LEFT JOIN users u ON p.owner_id = u.id
      WHERE p.status = 'active' AND (
        p.owner_id = ? OR 
        EXISTS (SELECT 1 FROM project_members pm2 WHERE pm2.project_id = p.id AND pm2.user_id = ?)
      )
      GROUP BY p.id
      ORDER BY p.created_at DESC`,
      [req.user.id, req.user.id]
    );

    res.status(200).json({
      status: 'success',
      results: projects.length,
      data: { projects }
    });
  } catch (error) {
    next(error);
  }
});

// Get single project
router.get('/:id', protect, async (req, res, next) => {
  try {
    const projects = await database.query(
      `SELECT p.*, 
        u.first_name as owner_first_name,
        u.last_name as owner_last_name
      FROM projects p
      LEFT JOIN users u ON p.owner_id = u.id
      WHERE p.id = ? AND (
        p.owner_id = ? OR 
        EXISTS (SELECT 1 FROM project_members pm WHERE pm.project_id = p.id AND pm.user_id = ?)
      )`,
      [req.params.id, req.user.id, req.user.id]
    );

    if (projects.length === 0) {
      return next(new AppError('Project not found', 404, 'PROJECT_NOT_FOUND'));
    }

    // Get project members
    const members = await database.query(
      `SELECT u.id, u.email, u.first_name, u.last_name, pm.role, pm.joined_at
       FROM project_members pm
       JOIN users u ON pm.user_id = u.id
       WHERE pm.project_id = ?`,
      [req.params.id]
    );

    // Get project instances
    const instances = await database.query(
      `SELECT id, name, status, ipv4, vcpu, memory_gb, disk_gb, os_type, created_at
       FROM instances
       WHERE project_id = ? AND status != 'destroyed'
       ORDER BY created_at DESC`,
      [req.params.id]
    );

    res.status(200).json({
      status: 'success',
      data: {
        project: {
          ...projects[0],
          members,
          instances
        }
      }
    });
  } catch (error) {
    next(error);
  }
});

// Create new project
router.post('/', protect, async (req, res, next) => {
  try {
    // Validate input
    const { error } = createProjectSchema.validate(req.body);
    if (error) {
      return next(new AppError(error.details[0].message, 400, 'VALIDATION_ERROR'));
    }

    const { name, description, color } = req.body;

    const projectId = uuidv4();

    await database.query(
      `INSERT INTO projects (id, name, description, owner_id, color) 
       VALUES (?, ?, ?, ?, ?)`,
      [projectId, name, description || null, req.user.id, color]
    );

    // Add owner as project member
    await database.query(
      `INSERT INTO project_members (project_id, user_id, role) 
       VALUES (?, ?, 'owner')`,
      [projectId, req.user.id]
    );

    await logActivity(req.user.id, 'PROJECT_CREATED', 'project', projectId,
      { name }, req.ip, req.headers['user-agent']);

    logger.info(`Project created: ${projectId}`);

    res.status(201).json({
      status: 'success',
      message: 'Project created successfully',
      data: {
        project: {
          id: projectId,
          name,
          description,
          color,
          ownerId: req.user.id,
          status: 'active',
          createdAt: new Date().toISOString()
        }
      }
    });
  } catch (error) {
    next(error);
  }
});

// Update project
router.patch('/:id', protect, async (req, res, next) => {
  try {
    const { name, description, color } = req.body;

    // Check if user has permission (owner or admin)
    const projects = await database.query(
      `SELECT p.*, pm.role as user_role
       FROM projects p
       LEFT JOIN project_members pm ON p.id = pm.project_id AND pm.user_id = ?
       WHERE p.id = ?`,
      [req.user.id, req.params.id]
    );

    if (projects.length === 0) {
      return next(new AppError('Project not found', 404, 'PROJECT_NOT_FOUND'));
    }

    const project = projects[0];

    // Only owner or admin can update
    if (project.owner_id !== req.user.id && project.user_role !== 'admin') {
      return next(new AppError('Insufficient permissions', 403, 'INSUFFICIENT_PERMISSIONS'));
    }

    await database.query(
      'UPDATE projects SET name = ?, description = ?, color = ? WHERE id = ?',
      [name, description, color, req.params.id]
    );

    await logActivity(req.user.id, 'PROJECT_UPDATED', 'project', req.params.id,
      null, req.ip, req.headers['user-agent']);

    res.status(200).json({
      status: 'success',
      message: 'Project updated successfully'
    });
  } catch (error) {
    next(error);
  }
});

// Delete project
router.delete('/:id', protect, async (req, res, next) => {
  try {
    // Check if user is owner
    const projects = await database.query(
      'SELECT * FROM projects WHERE id = ? AND owner_id = ?',
      [req.params.id, req.user.id]
    );

    if (projects.length === 0) {
      return next(new AppError('Project not found or insufficient permissions', 404, 'PROJECT_NOT_FOUND'));
    }

    // Check if project has instances
    const instances = await database.query(
      'SELECT COUNT(*) as count FROM instances WHERE project_id = ? AND status != "destroyed"',
      [req.params.id]
    );

    if (instances[0].count > 0) {
      return next(new AppError('Cannot delete project with active instances', 400, 'PROJECT_HAS_INSTANCES'));
    }

    // Soft delete - archive the project
    await database.query(
      'UPDATE projects SET status = "archived" WHERE id = ?',
      [req.params.id]
    );

    await logActivity(req.user.id, 'PROJECT_DELETED', 'project', req.params.id,
      null, req.ip, req.headers['user-agent']);

    logger.info(`Project archived: ${req.params.id}`);

    res.status(200).json({
      status: 'success',
      message: 'Project archived successfully'
    });
  } catch (error) {
    next(error);
  }
});

// Add member to project
router.post('/:id/members', protect, async (req, res, next) => {
  try {
    const { error } = addMemberSchema.validate(req.body);
    if (error) {
      return next(new AppError(error.details[0].message, 400, 'VALIDATION_ERROR'));
    }

    const { email, role } = req.body;

    // Check if user has permission
    const projects = await database.query(
      `SELECT p.*, pm.role as user_role
       FROM projects p
       LEFT JOIN project_members pm ON p.id = pm.project_id AND pm.user_id = ?
       WHERE p.id = ?`,
      [req.user.id, req.params.id]
    );

    if (projects.length === 0) {
      return next(new AppError('Project not found', 404, 'PROJECT_NOT_FOUND'));
    }

    const project = projects[0];

    if (project.owner_id !== req.user.id && project.user_role !== 'admin') {
      return next(new AppError('Insufficient permissions', 403, 'INSUFFICIENT_PERMISSIONS'));
    }

    // Find user by email
    const users = await database.query(
      'SELECT id FROM users WHERE email = ? AND status = "active"',
      [email]
    );

    if (users.length === 0) {
      return next(new AppError('User not found', 404, 'USER_NOT_FOUND'));
    }

    const userId = users[0].id;

    // Check if already a member
    const existingMember = await database.query(
      'SELECT 1 FROM project_members WHERE project_id = ? AND user_id = ?',
      [req.params.id, userId]
    );

    if (existingMember.length > 0) {
      return next(new AppError('User is already a member of this project', 409, 'ALREADY_MEMBER'));
    }

    // Add member
    await database.query(
      'INSERT INTO project_members (project_id, user_id, role) VALUES (?, ?, ?)',
      [req.params.id, userId, role]
    );

    await logActivity(req.user.id, 'MEMBER_ADDED', 'project', req.params.id,
      { addedUserId: userId, role }, req.ip, req.headers['user-agent']);

    res.status(201).json({
      status: 'success',
      message: 'Member added successfully'
    });
  } catch (error) {
    next(error);
  }
});

// Remove member from project
router.delete('/:id/members/:userId', protect, async (req, res, next) => {
  try {
    // Check if user has permission
    const projects = await database.query(
      `SELECT p.*, pm.role as user_role
       FROM projects p
       LEFT JOIN project_members pm ON p.id = pm.project_id AND pm.user_id = ?
       WHERE p.id = ?`,
      [req.user.id, req.params.id]
    );

    if (projects.length === 0) {
      return next(new AppError('Project not found', 404, 'PROJECT_NOT_FOUND'));
    }

    const project = projects[0];

    // Can't remove owner
    if (req.params.userId === project.owner_id) {
      return next(new AppError('Cannot remove project owner', 400, 'CANNOT_REMOVE_OWNER'));
    }

    // Can remove self, or owner/admin can remove others
    if (req.params.userId !== req.user.id && 
        project.owner_id !== req.user.id && 
        project.user_role !== 'admin') {
      return next(new AppError('Insufficient permissions', 403, 'INSUFFICIENT_PERMISSIONS'));
    }

    await database.query(
      'DELETE FROM project_members WHERE project_id = ? AND user_id = ?',
      [req.params.id, req.params.userId]
    );

    await logActivity(req.user.id, 'MEMBER_REMOVED', 'project', req.params.id,
      { removedUserId: req.params.userId }, req.ip, req.headers['user-agent']);

    res.status(200).json({
      status: 'success',
      message: 'Member removed successfully'
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
