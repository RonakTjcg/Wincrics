const express = require('express');
const { adminLogin } = require('../controller/AdminLogin');

const adminLog = express.Router();

adminLog.post('/', adminLogin);

module.exports = adminLog;