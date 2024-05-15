const jwt = require('jsonwebtoken');
const pool = require('../db/db');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

async function adminLogin(req, res) {
  const { emailOrMobile, password } = req.body;

  try {
    const client = await pool.connect();

    // Query the admin table to find the user by email or mobile
    const query = `
      SELECT * FROM admin WHERE email = $1 OR mobile = $1
    `;
    const result = await client.query(query, [emailOrMobile]);
    const admin = result.rows[0];

    client.release(); // Release the client back to the pool

    if (!admin) {
      return res.status(401).json({ message: 'Invalid email/mobile or password' });
    }

    // Note: Avoid using plaintext passwords in production code!
    // Compare the password (plaintext version for demonstration purposes only)
    if (password !== admin.password) {
      return res.status(401).json({ message: 'Invalid email/mobile or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: admin.id, role: admin.role }, process.env.JWT, {
      expiresIn: '24h' // Token expires in 24 hours
    });

    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { adminLogin };
