const pool = require('../db/db');

class Packages {
  static async create(packageData) {
    const { title, price, benefit, time } = packageData;
    const insertQuery = 'INSERT INTO packages (title, price, benefit, time) VALUES ($1, $2, $3, $4) RETURNING *';
    const insertValues = [title, price, benefit, time];
    const result = await pool.query(insertQuery, insertValues);
    return result.rows[0];
  }

  static async getAll() {
    const query = 'SELECT * FROM packages';
    const result = await pool.query(query);
    return result.rows;
  }

  static async getById(id) {
    const query = 'SELECT * FROM packages WHERE id = $1';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async update(id, packageData) {
    const { title, price, benefit, time } = packageData;
    const query = 'UPDATE packages SET title = $1, price = $2, benefit = $3, time = $4 WHERE id = $5 RETURNING *';
    const values = [title, price, benefit, time, id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async delete(id) {
    const query = 'DELETE FROM packages WHERE id = $1 RETURNING *';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = Packages;
