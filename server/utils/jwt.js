const jwt = require('jsonwebtoken');

const secretKey = 'imSoHappy'; // Replace this with your own secret key

const generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

module.exports = {
  generateToken,
};
