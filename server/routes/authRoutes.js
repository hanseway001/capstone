const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('../middleware/authMiddleware');
const { generateToken } = require('../config/authConf');
const User = require('../models/userModel');

const router = express.Router();

// User registration
router.post('/register', async (req, res) => {
  try {
    const { userName, email, password, firstName, lastName, phone, address } = req.body;
    // console.log(password)
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword)
    const user = await User.createUser(userName, email, hashedPassword, firstName, lastName, phone, address );
    // console.log('this is the user' + user.username + 'and this is the password' + user.hash)
    // Generate JWT token
    const token = generateToken({ userName: user.username });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// User login
router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  // If the authentication is successful, generate a JWT token
  const token = generateToken({ userName: req.user.userName });
  res.json({ token });
});

module.exports = router;
