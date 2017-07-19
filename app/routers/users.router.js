const { Router } = require('express');
const data = require('../db/db');

const attach = (app) => {
    const router = new Router();

    router
        .get('/', (req, res) => {
            return res.status(200).render('home');
        })
        .get('/profile', (req, res) => {
            if (!req.isAuthenticated()) {
                res.status(401).render('./profile/unauthorized');
            } else {
                console.log(req.body.user);
                res.status(200).render('./profile/profile');
            }
        })
        .get('/contact', (req, res) => {
            return res.render('contact');
        });
    app.use('/', router);
};

module.exports = attach;
