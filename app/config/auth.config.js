   const passport = require('passport');
   const cookieParser = require('cookie-parser');
   const session = require('express-session');
   const LocalStrategy = require('passport-local').Strategy;

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

       app.use(cookieParser());
       app.use(session({ secret: 'Purple Unicorn' }));
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
