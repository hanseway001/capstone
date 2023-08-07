const express = require('express');
// const bcrypt = require('bcrypt');
const passport = require('../middleware/authMiddleware');
// const { generateToken } = require('../config/authConf');
// const User = require('../models/userModel');

const proRouter = express.Router();

router.get('/Courses', passport.authenticate('local', { session: false }), (req, res) => {
    console.log('successfully linked into protected routes');
    // If the authentication is successful, generate a JWT token
    // const token = generateToken({ userName: req.user.userName });
    // res.send('you logged in')
    // res.json({ token });
    res.json('you made it')
});


// class Course {

// static async findCourses(userName) {
//     console.log(Course)
//     const query = {
//     //   text: 'SELECT * FROM user WHERE username = $1',
//     //   values: [userName],
//       text: 'SELECT * FROM course',
//     }
//     try {
//       const { content } = await pool.query(query)
//       console.log(content[0])
//       return content[0]
//     } catch (err) {
//       throw err
//     }
//   }
// }

module.exports = proRouter