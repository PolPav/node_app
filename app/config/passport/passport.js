
const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport, Auth) => {

  passport.use('local', new LocalStrategy(

    {
      usernameField: 'login',
      passwordField: 'password',
      passReqToCallback: true
    },

    function(req, login, password, done) {

      Auth.findOne({
        where: {
          login: login,
          password: password
        }
      }).then(auth => {

        if(auth){

          return done(null, auth, {
            auth: true
          });
        } else {

         return done(null, false, {
           auth: false,
           message: "Incorrect login or password"
         });
        }

      }).catch(err => console.log('db error'));
    }
  ));

  passport.serializeUser(function(auth, done) {

    done(null, auth.id);

  });

  passport.deserializeUser(function(id, done) {

    Auth.findById(id).then(function(auth) {

      if (auth) {
        done(null, auth.get());

      } else {
        done(auth.error, null);
      }
    });
  });
};
