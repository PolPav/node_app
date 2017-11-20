const bCrypt = require('bcrypt-nodejs');
const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport, Auth) => {
  console.log('passport');

  passport.use('local', new LocalStrategy(

    {
      loginField: 'login',
      passwordField: 'password',
      passReqToCallback: true
    },

    function(req, login, password, done) {

         console.log('initial passport callback');

        const generateHash = password => {

        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

      };

      Auth.findOne({
        where: {
          login: login
        }
      }).then(auth => {
        console.log(auth);

        if (auth)

        {
          return done(null, false, {
            message: 'That login is already taken'
          });

        } else {

          const userPassword = generateHash(password);

          const data =

            {
              login: login,
              password: userPassword,
            };

          Auth.create(data).then(newUser => {

            if (!newUser) {

              return done(null, false);
            }

            if (newUser) {

              return done(null, newUser);

            }
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
