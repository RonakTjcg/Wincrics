const express = require('express');
const AdminController = require('../controller/AdminController');

const adminRoute = express.Router();

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
