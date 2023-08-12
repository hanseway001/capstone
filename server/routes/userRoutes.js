const jwt_decode = require('jwt-decode');
const express = require('express');
const authorizeAdmin = require('../middleware/authorizeAdmin');
const User = require('../models/userModel');

// Edit User
router.post('/editUserInfo', passport.authenticate('local', { session: false, failureRedirect: '/login'}), async (req, res) => {
    console.log('userID is: ', req.head.serverData.username)
    // If the authentication is successful, mkae a JWT token
    try {
      const user = await User.updateUserByID(req.userID)
      // console.log('more data')
      // console.log(user.isadmin + '' + user.user_id)
  //get password from the database
      // if user exits compare passwords with provided password
    //   const token = generateToken({ user_id: user.user_id, userName: user.username, isAdmin: user.isadmin});
      res.json({ token });
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
    // res.send('you logged in')
  });

  module.exports = router;