const jwtAuthz = require('express-oauth2-jwt-bearer');

// Middleware function for authentication
const authenticate = jwtAuthz({
  issuer: 'https://YOUR_AUTH0_DOMAIN/',
  audience: 'YOUR_AUTH0_AUDIENCE',
});

module.exports = {
  authenticate,
};