   const passport = require('passport');
   const cookieParser = require('cookie-parser');
   const session = require('express-session');
   const LocalStrategy = require('passport-local').Strategy;
   const FacebookStrategy = require('passport-facebook').Strategy;
   const User = require('../models/user.model');


   const configAuth = (app, { users }) => {
       passport.use(new LocalStrategy(
           (username, password, done) => {
               return users.findByUsername(username)
                   .then((user) => {
                       if (user.password === password) {
                           done(null, user);
                       } else {
                           done(null, false);
                       }
                   })
                   .catch((err) => {
                       return done(err);
                   });
           }
       ));
       passport.use(new FacebookStrategy({
            clientID: 1361749477276570,
            clientSecret: '8cdef8b7c1db62927f19a2ad817423c6',
            callbackURL: '/auth/facebook/callback',
        },
        function(accessToken, refreshToken, profile, cb) {
            User.findOrCreate({ facebookId: profile.id }, function(err, user) {
                return cb(err, user);
            });
        }
        ));

       app.use(cookieParser());
       app.use(session({ secret: 'Purple Unicorn' })); // DO: Remove deprecated
       app.use(passport.initialize());
       app.use(passport.session());

       passport.serializeUser((user, done) => {
           done(null, user.id);
       });

       passport.deserializeUser((id, done) => {
           return users.findById(id)
               .then((user) => {
                   done(null, user);
               })
               .catch(done);
       });

       app.use((req, res, next) => {
           res.locals = res.locals || {};

           res.locals.user = req.user;
           next();
       });
   };

   module.exports = configAuth;
