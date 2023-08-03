const express = require('express');
const authorizeAdmin = require('../middleware/authorizeAdmin');

const router = express.Router();

// protected route
router.get('/example', (req, res) => {
  res.json({ message: 'This is a protected route.' });
});

// protected route with admin priv
router.get('/admin-only', authorizeAdmin, (req, res) => {
  res.json({ message: 'This route is accessible only by admins.' });
});

module.exports = router;
