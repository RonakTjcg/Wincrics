const express = require('express');
const BlogsController = require('../controller/blogscontroller');
const { logAnalytics } = require('../middelwear/analytics')
const { authenticateToken } = require('../middelwear/authenticate');
const blogsRoute = express.Router();
// Middleware to log analytics data for all routes
blogsRoute.use(logAnalytics);

// Create a new blog
blogsRoute.post('/', authenticateToken,BlogsController.create);

// Get all blogs
blogsRoute.get('/', authenticateToken,BlogsController.getAll);

// Get a blog by ID
blogsRoute.get('/:id', authenticateToken,BlogsController.getById);

// Update a blog by ID
blogsRoute.put('/:id', authenticateToken,BlogsController.update);

// Delete a blog by ID
blogsRoute.delete('/:id',authenticateToken, BlogsController.delete);

module.exports = blogsRoute;
