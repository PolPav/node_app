const authController = require('../controllers/AuthController.js');

module.exports = function(app, passport) {

  const authHandler = passport.authenticate('local', {

      successRedirect: '/dashboard',
      failureRedirect: '/signin'
    }
  );

  app.get('/signup', authController.signup);

  app.get('/signin', authController.signin);

  app.get('/dashboard', authController.dashboard);

  app.post('/signin', (req, options, next) => {

   return authHandler(req, options, next);
  });
};
