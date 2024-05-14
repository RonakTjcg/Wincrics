const express = require('express');
const PaymentController = require('../controller/PaymentController');
const { logAnalytics } = require('../middelwear/analytics')
const { authenticateToken } = require('../middelwear/authenticate');
const paymentRoute = express.Router();


paymentRoute.use(logAnalytics);

// Create a new payment
paymentRoute.post('/', authenticateToken,PaymentController.create);

// Get all payments
paymentRoute.get('/', authenticateToken,PaymentController.getAll);

// Get a payment by ID
paymentRoute.get('/:id', authenticateToken,PaymentController.getById);

// Update a payment by ID
paymentRoute.put('/:id', authenticateToken,PaymentController.update);

// Delete a payment by ID
paymentRoute.delete('/:id', authenticateToken,PaymentController.delete);

module.exports = paymentRoute;
