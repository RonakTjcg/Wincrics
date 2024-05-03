const express = require('express');
const AnalyticsController = require('../controller/analytics');
const { logAnalytics } = require('../middelwear/analytics')

const analyticsRoute = express.Router();
analyticsRoute.use(logAnalytics);

// Get all analytics data
analyticsRoute.get('/', AnalyticsController.getAll);

module.exports = analyticsRoute;
