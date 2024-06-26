const pool = require('../db/db'); // Update the path as needed
const moment = require('moment-timezone');
async function logAnalytics(req, res, next) {
  const now = moment().tz('Asia/Kolkata'); // Set the timezone here
  const analyticsData = {
    url: req.originalUrl,
    method: req.method,
    headers: req.headers,
    query: req.query,
    params: req.params,
    ip: req.ip,
    protocol: req.protocol,
    path: req.path,
    time: now.format('hh:mm:ss A'), // Get current time
    date: now.format('MM/DD/YYYY'), // Get current date
  };

  try {
    // Insert analytics data into PostgreSQL database
    const query = 'INSERT INTO analytics (url, method, headers, query, params, ip, protocol, path, time, date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
    const values = [analyticsData.url, analyticsData.method, analyticsData.headers, analyticsData.query, analyticsData.params, analyticsData.ip, analyticsData.protocol, analyticsData.path, analyticsData.time, analyticsData.date];
    await pool.query(query, values);
  } catch (err) {
    console.error('Error saving analytics data:', err);
  }

  next();
}

module.exports = { logAnalytics };
