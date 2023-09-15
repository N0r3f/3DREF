// server.js
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const helmet = require('helmet');

dotenv.config();

const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Chargement des routes et des contrôleurs
// ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});