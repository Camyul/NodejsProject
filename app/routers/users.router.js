const { Router } = require('express');

const attach = (app) => {
    const router = new Router();

    router
        .get('/', (req, res) => {
            return res.status(200).render('home');
            // .send('---Root---');
        })
        .get('/profile', (req, res) => {
            return res.status(200).render('./profile/profile');
        })
        .get('/contact', (req, res) => {
            return res.render('contact');
        });
    app.use('/', router);
};

module.exports = attach;
