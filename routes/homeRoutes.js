const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.send('This is the home page');
});

// Login page route
router.get('/login', (req, res) => {
  res.send('This is the login page');
});

// Other routes for your application
// ...

module.exports = router;
