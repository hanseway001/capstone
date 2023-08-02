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
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.createUser(userName, email, hashedPassword, firstName, lastName, phone, address );
    // Make JWT token
    const token = generateToken({ userName: user.username });
 
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// User login
router.post('/login', passport.authenticate('local', { session: false, failureRedirect: '/login'}), async (req, res) => {
 
  // If the authentication is successful, mkae a JWT token
  try {
    const user = await User.findUserByUserName(req.user.username)
    // console.log('more data')
    // console.log(user.isadmin + '' + user.user_id)
    const token = generateToken({ user_id: user.user_id, userName: user.username, isAdmin: user.isadmin});
    res.json({ token });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
  // res.send('you logged in')
});

// user logout
router.post('/logout', (req, res) => {
  console.log('called logout')
  // localStorage.clear();
  // localStorage.removeItem(jwtToken)
  res.status(200).json({message: 'logout successful' })
})


module.exports = router;
