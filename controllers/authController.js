const User = require('../models/userModel');
   const bcrypt = require('bcryptjs');
   const jwt = require('jsonwebtoken');
   require('dotenv').config();

   exports.signup = async (req, res) => {
     try {
       // Your existing code
     } catch (error) {
       console.error(error);
       res.status(500).json({ error: 'Server error' });
     }
   };

   exports.login = async (req, res) => {
     try {
       // Your existing code
       res.status(200).json({ token });
     } catch (error) {
       console.error(error);
       res.status(500).json({ error: 'Server error' });
     }
   };