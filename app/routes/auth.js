const authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

  app.get('/signup', authController.signup);

  app.get('/signin', authController.signin);

  app.post('/signup', function(){console.log('initial post');passport.authenticate('local', {

      successRedirect: '/dashboard',
      failureRedirect: '/signup'
    }
  )});
};