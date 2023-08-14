const jwt_decode = require('jwt-decode');
const express = require('express');
const authorizeAdmin = require('../middleware/authorizeAdmin');
const User = require('../models/userModel');
const authRoutes = require('./authRoutes')
const passport = require('../middleware/authMiddleware');
const router = express.Router();

// Edit User
router.post('/editUserInfo', async (req, res) => {

    try {
        const user = await User.updateUserByID(req.body.serverData)
        res.send()
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
    
  });

  module.exports = router;