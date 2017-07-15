const { Router } = require('express');
const passport = require('passport');

const attach = (app) => {
    const router = new Router();

    router
        .get('/sign-up', (req, res) => {
            return res.render('./auth/sign-up');
        })
        .get('/sign-in', (req, res) => {
            return res.render('./auth/sign-in');
        })
        .post('/sign-in', (req, res) => {
            passport.authenticate('local', {
                successRedirect: '/',
                failureRedirect: '/auth/sign-in',
                failureFlash: true,
            });
        });
    app.use('/auth', router);
};

module.exports = attach;
