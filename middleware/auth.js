module.exports = function (req, res, next) {
  if (req.session && req.session.userId && req.session.isAdmin) {
    next();
  } else {
    res.redirect('/login');
  }
};