const express = require('express');
const Otpemail = require('../otpemail');

const otpemail = express.Router();

otpemail.post('/', Otpemail.sendOtp);

module.exports = otpemail;