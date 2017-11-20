const authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

  const authHandler = passport.authenticate('local', {

      successRedirect: '/dashboard',
      failureRedirect: '/signup'
    }
  );

  app.get('/signup', authController.signup);

  app.get('/signin', authController.signin);

  app.post('/signup', (req, options, next) => {
    console.log('signup pass');
    authHandler(req, options, next);
  });

  // app.post('/signup', function(req, res, next) {
  //   passport.authenticate('local', {session:false}, function(err, user, token_record) {
  //     if (err) { console.log(err); }
  //     console.log(user);
  //   })(req, res, next);
  //
  // });
};