require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const { logger, validator } = require('./middleware');

const loginRoutes = require('./routes/login');
const dashboardRoutes = require('./routes/dashboard');
const auth = require('./middleware/auth');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    });

const app = express();
const PORT = process.env.PORT;
const registerRoutes = require('./routes/register');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/register', registerRoutes);
app.use('/login', loginRoutes);
app.use('/dashboard', auth, dashboardRoutes);

app.use(bodyParser.json());
app.use(logger);
app.use(validator);
app.use('/', routes);

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = { app, server };