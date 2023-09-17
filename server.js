const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Serve static files
app.use(express.static('public'));

// Set up routes
const authRoutes = require('./routes/authRoutes');
const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/auth', authRoutes);
app.use('/home', homeRoutes);
app.use('/user', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});