// import { decode } from 'jwt-decode';
// const decode = require('jwt-decode')
const jwt_decode = require('jwt-decode');
const express = require('express');
const authorizeAdmin = require('../middleware/authorizeAdmin');
const Course = require('../models/courseModel');
const User = require('../models/userModel');

const router = express.Router();

// protected route
router.get('/example', (req, res) => {
  res.json({ message: 'This is a protected route.' });
});



router.get('/getCourseInfo', async (req, res) => {
  console.log("we are in get course info");
  try{
    // const JWT = req.headers.authorization
    // console.log('this is the JWT/ from the header', JWT)
    // const decodeToken = jwt_decode(req.headers.authorization);
    // console.log('this is the decoded JWT', decodeToken)
    const course = await Course.findCourses()
    // console.log('the is the course list', course)
    res.json({ course});

  }  catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/registeredCourses', async (req, res) => {
  console.log("we are in registered courses");
  console.log(req.body)
  try{
        const JWT = req.headers.authorization
    console.log('this is the JWT/ from the header', JWT)
    const decodeToken = jwt_decode(req.headers.authorization);
    console.log('this is the decoded JWT', decodeToken)
    const course = await Course.getRegCourses(decodeToken.user_id)
    res.json({ course});

  }  catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.get('/searchCourseData', async (req, res) => {
  console.log("we are in get course data stuff");
  console.log('data', req.body);
  try{
    const JWT = req.headers.authorization
    console.log('this is the JWT/ from the header', JWT)
    const decodeToken = jwt_decode(req.headers.authorization);
    console.log('this is the decoded JWT', decodeToken)
    const course = await Course.findCourseByCost()
    // console.log('the is the course list', course)
    res.json({ course});

  }  catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});



router.get('/getStudentInfo', async (req, res) => {

  try{
    const JWT = req.headers.authorization
    const decodeToken = jwt_decode(req.headers.authorization);
    const user = await User.findUserByUserName(decodeToken.userName)
    res.json({ user});
  }  catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// protected route with admin priv
router.get('/admin-only', authorizeAdmin, (req, res) => {
  res.json({ message: 'This route is accessible only by admins.' });
});

module.exports = router;
