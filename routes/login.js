const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    const { username, password } = req.body;
  
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send('User not found');
  
    console.log('Password entered by user:', password);
    console.log('Password stored in database:', user.password);
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid password');
  
    req.session.userId = user._id;
  
    if (user.isAdmin) {
      res.redirect('/dashboard');
  } else {
      res.redirect('/public');
  }
});

module.exports = router;