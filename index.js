require('dotenv').config();

const app = require('./app');
const errorHandler = require('./error');

const PORT = process.env.PORT;

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));