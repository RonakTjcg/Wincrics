const express = require('express');
const UserController = require('../controller/userscontroller');
const { logAnalytics } = require('../middelwear/analytics')
const { authenticateToken } = require('../middelwear/authenticate');
const usersroute = express.Router();
usersroute.use(logAnalytics);
// Create a new user
usersroute.post('/', authenticateToken,UserController.create);

// Get all users
usersroute.get('/', authenticateToken,UserController.getAll);

// Get a user by ID
usersroute.get('/:id', authenticateToken,UserController.getById);

// Update a user by ID
usersroute.put('/:id', authenticateToken,UserController.update);

// Delete a user by ID
usersroute.delete('/:id', authenticateToken,UserController.delete);

module.exports = usersroute;
