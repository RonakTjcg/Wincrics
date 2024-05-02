// models/Admin.js

const pool = require('../db/db');

class Admin {
  static async create(adminData) {
    const { email, mobile, password, role } = adminData;
    // Check if email or mobile already exists
    const checkQuery = 'SELECT id FROM admin WHERE email = $1 OR mobile = $2';
    const checkValues = [email, mobile];
    const checkResult = await pool.query(checkQuery, checkValues);

    if (checkResult.rows.length > 0) {
        // Email or mobile already exists
        throw new Error('Email or mobile already exists');
    }

    // Insert new admin
    const insertQuery = 'INSERT INTO admin (email, mobile, password, role) VALUES ($1, $2, $3, $4) RETURNING *';
    const insertValues = [email, mobile, password, role];
    const result = await pool.query(insertQuery, insertValues);
    return result.rows[0];
  }

  static async getAll() {
    const query = 'SELECT * FROM admin';
    const result = await pool.query(query);
    return result.rows;
  }

  static async getById(id) {
    const query = 'SELECT * FROM admin WHERE id = $1';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async update(id, adminData) {
    const { email, mobile, password, role } = adminData;
    const query = 'UPDATE admin SET email = $1, mobile = $2, password = $3, role = $4 WHERE id = $5 RETURNING *';
    const values = [email, mobile, password, role, id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async delete(id) {
    const query = 'DELETE FROM admin WHERE id = $1 RETURNING *';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = Admin;
