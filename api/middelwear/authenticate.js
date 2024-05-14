const jwt = require('jsonwebtoken');
require('dotenv').config();
// console.log(process.env.JWT);
function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Authorization header is missing' });
  }

  jwt.verify(token, 'hiiiiamjethalal', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = user;
    next();
  });
}

module.exports = { authenticateToken };
