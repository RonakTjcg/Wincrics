// models/Otp.js

const pool = require('../db/db');

class Otp {
  static async create(otpData) {
    const { user_id, otp_number, email, phone_number } = otpData;
    const query = 'INSERT INTO otp (user_id, otp_number, email, phone_number) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [user_id, otp_number, email, phone_number];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async getAll() {
    const query = 'SELECT * FROM otp ORDER BY id DESC';
    const result = await pool.query(query);
    return result.rows;
  }

  static async getById(id) {
    const query = 'SELECT * FROM otp WHERE otp_number = $1';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
  static async postBYId(id) {
    const query = 'UPDATE otp SET otp_number = $1 WHERE otp_number = $2';
    const values = ["verify",id];

    const result = await pool.query(query, values);
    console.log(result)
    return result.rows[0];
  }

  static async update(id, otpData) {
    const { user_id, otp_number, email, phone_number } = otpData;
    const query = 'UPDATE otp SET user_id = $1, otp_number = $2, email = $3, phone_number = $4 WHERE id = $5 RETURNING *';
    const values = [user_id, otp_number, email, phone_number, id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async delete(id) {
    const query = 'DELETE FROM otp WHERE id = $1 RETURNING *';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = Otp;
