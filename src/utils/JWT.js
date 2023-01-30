const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'coelho';

const generateToken = (login) =>
  jwt.sign(login, JWT_SECRET, {
    expiresIn: '15m',
    algorithm: 'HS256',
  });

const authenticate = async (token) => jwt.verify(token, JWT_SECRET);

module.exports = {
  generateToken,
  authenticate,
};
