const { Router } = require('express');
const passport = require('passport');

const attach = (app) => {
    const router = new Router();
    router
        .get('/sign-up', (req, res) => {
            return res.status(200).render('./auth/sign-up');
        })
        .get('/sign-in', (req, res) => {
            return res.status(200).render('./auth/sign-in');
        })
        .get('/sign-out', (req, res) => {
            req.logout();
            res.redirect('/');
        })
        .post('/sign-in',
            passport.authenticate('local', {
                successRedirect: '/profile',
                failureRedirect: '/auth/sign-in',
                failureFlash: true,
            })
        );
    app.use('/auth', router);
};

module.exports = attach;
