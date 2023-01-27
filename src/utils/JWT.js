const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.TOKEN_SECRET || 'coelho';

const generateToken = (login) =>
  jwt.sign(login, TOKEN_SECRET, {
    expiresIn: '15m',
    algorithm: 'HS256',
  });

module.exports = {
  generateToken,
};
