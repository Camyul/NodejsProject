const { Router } = require('express');

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
                res.status(200).render('./profile/profile');
            }
        })
        .get('/contact', (req, res) => {
            return res.render('contact');
        })
        .get('/offers', (req, res) => {
            return res.render('offers');
        })
        .get('/destinations', (req, res) => {
            return res.render('destinations');
        });
    app.use('/', router);
};

module.exports = attach;
