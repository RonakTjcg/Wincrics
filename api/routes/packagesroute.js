const express = require('express');
const PackageController = require('../controller/packagescontroller');
const { logAnalytics } = require('../middelwear/analytics')
const { authenticateToken } = require('../middelwear/authenticate');
const packagesRoute = express.Router();
// Middleware to log analytics data for all routes
packagesRoute.use(logAnalytics);

// Create a new package
packagesRoute.post('/', authenticateToken,PackageController.create);

// Get all packages
packagesRoute.get('/', authenticateToken,PackageController.getAll);

// Get a package by ID
packagesRoute.get('/:id', authenticateToken,PackageController.getById);

// Update a package by ID
packagesRoute.put('/:id', authenticateToken,PackageController.update);

// Delete a package by ID
packagesRoute.delete('/:id', authenticateToken,PackageController.delete);

module.exports = packagesRoute;
