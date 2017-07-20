const { Router } = require('express');
const passport = require('passport');

const attach = (app, data) => {
    const router = new Router();
    const controller = require('./controller').init(data);

    router
        .get('/sign-up', (req, res) => {
            return controller.getSignUpForm(req, res);
        })
        .get('/sign-in', (req, res) => {
            return controller.getSignInForm(req, res);
        })
        .get('/sign-out', (req, res) => {
            return controller.signOut(req, res);
        })
        .post('/sign-in', passport.authenticate('local', {
            successRedirect: '/profile',
            failureRedirect: '/auth/sign-in',
            failureFlash: false,
        }))
        .post('/sign-up', (req, res) => {
            return controller.signUp(req, res);
        });
    app.use('/auth', router);
};

module.exports = attach;
