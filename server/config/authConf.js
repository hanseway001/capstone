const jwt = require('jsonwebtoken');

//const secretKey = 'imSoHappy'; // Replace this with your own secret key
const secretKey = process.env.JWT_SECRET

const generateToken = payload => {
  return jwt.sign(payload, secretKey);
};

module.exports = {
  generateToken,
};
