function logAnalytics(req, res, next) {
  const now = new Date();
  const analyticsData = {
    body: req.body,
    url: req.originalUrl,
    method: req.method,
    headers: req.headers,
    query: req.query,
    params: req.params,
    ip: req.ip,
    protocol: req.protocol,
    path: req.path,
    time: now.toLocaleTimeString(), // Get current time
    date: now.toLocaleDateString(), // Get current date
  };

  // Print analytics data to console
  console.log('Analytics Data:', analyticsData);

  next();
}

module.exports = { logAnalytics };
