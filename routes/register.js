const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', async (req, res) => {
  const { username, password, isAdmin } = req.body;

  if (!password) {
    return res.status(400).send('Password is required');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    password: hashedPassword,
    isAdmin: isAdmin === 'true'
  });

  try {
    const savedUser = await user.save();
    res.redirect('/login');
    //res.send(savedUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;