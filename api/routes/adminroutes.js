const express = require('express');
const { logAnalytics } = require('../middelwear/analytics')
const AdminController = require('../controller/AdminController');

const adminRoute = express.Router();
// Middleware to log analytics data for all routes
adminRoute.use(logAnalytics);

// Create a new admin
adminRoute.post('/', AdminController.create);

// Get all admins
adminRoute.get('/', AdminController.getAll);

// Get an admin by ID
adminRoute.get('/:id', AdminController.getById);

// Update an admin by ID
adminRoute.put('/:id', AdminController.update);

// Delete an admin by ID
adminRoute.delete('/:id', AdminController.delete);

module.exports = adminRoute;
