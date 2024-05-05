const express = require('express');
const PaymentController = require('../controller/PaymentController');

const paymentRoute = express.Router();

// Create a new payment
paymentRoute.post('/', PaymentController.create);

// Get all payments
paymentRoute.get('/', PaymentController.getAll);

// Get a payment by ID
paymentRoute.get('/:id', PaymentController.getById);

// Update a payment by ID
paymentRoute.put('/:id', PaymentController.update);

// Delete a payment by ID
paymentRoute.delete('/:id', PaymentController.delete);

module.exports = paymentRoute;
