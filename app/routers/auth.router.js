const { Router } = require('express');
const passport = require('passport');
const database = require('../config/database');

const db = database();

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
                failureFlash: false,
            })
        )
        .post('sign-up', (req, res) => {
            // const username = req.body.username;
            // const email = req.body.email;
            // const name = req.body.name;
            // const password = req.body.password;
        })
        .get('/facebook',
            passport.authenticate('facebook'))
        .get('/facebook/callback',
            passport.authenticate('facebook', { failureRedirect: '/login' }),
            function(req, res) {
                // Successful authentication, redirect home.
                res.redirect('/');
        });


    app.use('/auth', router);
};

module.exports = attach;
