const { Router } = require('express');
const passport = require('passport');
const database = require('../db/db');

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
        .post('/sign-up', (req, res) => {
            database.init('mongodb://localhost:27017/sampleDB')
                .then((db) => {
                    console.log('POST request connected');
                    console.log(db.collection('users'));
                });
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
