const pool = require('../db/db');

class Blog {
  static async create(blogData) {
    const { title, match_news, date, time, venue, teams, imp_player, captain, fantasy_team, vice_captain, upload_by, tags, metadata, description, images, delete_by, playing_11 } = blogData;
    const query = 'INSERT INTO blogs (title, match_news, date, time, venue, teams, imp_player, captain, fantasy_team, vice_captain, upload_by, tags, metadata, description, images, delete_by, playing_11) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *';
    const values = [title, match_news, date, time, venue, teams, imp_player, captain, fantasy_team, vice_captain, upload_by, tags, metadata, description, images, delete_by, playing_11];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async getAll() {
    const query = 'SELECT * FROM blogs WHERE delete_by = false ORDER BY id DESC';
    const result = await pool.query(query);
    return result.rows;
  }

  static async getById(id) {
    const query = 'SELECT * FROM blogs WHERE id = $1';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async update(id, blogData) {
    const { title, match_news, date, time, venue, teams, imp_player, captain, fantasy_team, vice_captain, upload_by, tags, metadata, description, images, delete_by, playing_11 } = blogData;
    const query = 'UPDATE blogs SET title = $1, match_news = $2, date = $3, time = $4, venue = $5, teams = $6, imp_player = $7, captain = $8, fantasy_team = $9, vice_captain = $10, upload_by = $11, tags = $12, metadata = $13, description = $14, images = $15, delete_by = $16, playing_11 = $17 WHERE id = $18 RETURNING *';
    const values = [title, match_news, date, time, venue, teams, imp_player, captain, fantasy_team, vice_captain, upload_by, tags, metadata, description, images, delete_by, playing_11, id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async delete(id) {
    const query = 'UPDATE blogs SET delete_by = true WHERE id = $1 RETURNING *';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = Blog;
