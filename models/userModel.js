const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // Add any other fields you need for your application
});

const User = mongoose.model('User', userSchema);

module.exports = User;
