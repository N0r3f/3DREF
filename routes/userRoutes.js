const express = require('express');
const router = express.Router();
const { authenticate } = require('./authMiddleware');

// Import the User model
const User = require('../models/userModel');

// Protected route that requires authentication
router.get('/protected', authenticate, (req, res) => {
    res.json({ message: 'You are authenticated!' });
  });

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to create a new user
router.post('/users', async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    // Add any other fields you need for the user
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to get a specific user by ID
router.get('/users/:id', getUser, (req, res) => {
  res.json(res.user);
});

// Route to update a specific user by ID
router.patch('/users/:id', getUser, async (req, res) => {
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.password != null) {
    res.user.password = req.body.password;
  }

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to delete a specific user by ID
router.delete('/users/:id', getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware function to get a specific user by ID
async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.user = user;
  next();
}

module.exports = router;
