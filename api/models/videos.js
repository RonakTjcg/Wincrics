// models/Video.js

const pool = require('../db/db');

class Video {
  static async create(videoData) {
    const { title, link } = videoData;
    // Insert new video
    const insertQuery = 'INSERT INTO videos (title, link) VALUES ($1, $2) RETURNING *';
    const insertValues = [title, link];
    const result = await pool.query(insertQuery, insertValues);
    return result.rows[0];
  }

  static async getAll() {
    const query = 'SELECT * FROM videos ORDER BY id DESC '; 
    const result = await pool.query(query);
    return result.rows;
  }
  

  static async getById(id) {
    const query = 'SELECT * FROM videos WHERE id = $1';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async update(id, videoData) {
    const { title, link } = videoData;
    const query = 'UPDATE videos SET title = $1, link = $2 WHERE id = $3 RETURNING *';
    const values = [title, link, id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async delete(id) {
    const query = 'DELETE FROM videos WHERE id = $1 RETURNING *';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = Video;
