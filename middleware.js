// Middleware pour logger les requêtes entrantes
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

// Middleware pour valider les données de la requête
function validator(req, res, next) {
  if (!req.body.title || !req.body.description) {
    return res.status(400).send('Title and description are required');
  }
  next();
}

module.exports = { logger, validator };