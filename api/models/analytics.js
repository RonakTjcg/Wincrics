const pool = require('../db/db');

class Analytics {
  static async getAll(page = 1, limit = 1000, filters = {}) {
    const offset = (page - 1) * limit;
    let query = 'SELECT * FROM analytics WHERE 1 = 1';
    const values = [];
    
    // Apply filters
    if (filters.date) {
      query += ' AND date = $1';
      values.push(filters.date);
    }
    if (filters.url) {
      query += ' AND url = $1';
      values.push(filters.url);
    }

    // Add pagination
    query += ` ORDER BY id LIMIT $${values.length + 1} OFFSET $${values.length + 2}`;
    values.push(limit, offset);

    const result = await pool.query(query, values);
    return result.rows;
  }
}

module.exports = Analytics;
