const { Router } = require('express');
const data = require('../db/db');

const offers = [{
    destination: {
        country: 'Greece',
        city: 'Rhodes',
    },
    price: '1250.00EUR',
    duration: '7 days',
    startDate: new Date(),
}, {
    destination: {
        country: 'Greece',
        city: 'Athens',
    },
    price: '2000.00EUR',
    duration: '5 days',
    startDate: new Date(),
}, {
    destination: {
        country: 'Bulgaria',
        city: 'Slunchaka',
    },
    price: '300.00EUR',
    duration: '10 days',
    startDate: new Date(),
}];

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
        })
        .get('/offers', (req, res) => {
            return res.render('offers', { offers });
        })
        .get('/destinations', (req, res) => {
            return res.render('destinations');
        });
    app.use('/', router);
};

module.exports = attach;
