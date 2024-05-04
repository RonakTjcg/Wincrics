// routes/otproute.js

const express = require('express');
const OtpController = require('../controller/otpcontroller');
const { logAnalytics } = require('../middelwear/analytics');

const otpRoute = express.Router();
otpRoute.use(logAnalytics);

// Create a new OTP
otpRoute.post('/', OtpController.create);

// Get all OTPs
otpRoute.get('/', OtpController.getAll);

//post by id otp
otpRoute.post('/:id', OtpController.postById);

// Get an OTP by ID
otpRoute.get('/:id', OtpController.getById);

// Update an OTP by ID
otpRoute.put('/:id', OtpController.update);

// Delete an OTP by ID
otpRoute.delete('/:id', OtpController.delete);

module.exports = otpRoute;
