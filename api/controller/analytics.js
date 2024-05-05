const Analytics = require('../models/analytics');

class AnalyticsController {
  static async getAll(req, res) {
    try {
      const page = req.query.page ? parseInt(req.query.page) : 1;
      const limit = 1000; // Change as needed
      const filters = req.query.filters || {};

      const analytics = await Analytics.getAll(page, limit, filters);
      res.status(200).json(analytics);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AnalyticsController;
