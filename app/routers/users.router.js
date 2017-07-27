const { Router } = require('express');
const MongoClient = require('mongodb');


const attach = (app, data) => {
    const router = new Router();
    const controller = require('./profileController').init(data);


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
        .post('/account/profile', (req, res) => {
            if (!req.isAuthenticated()) {
                return res.status(401).render('./profile/unauthorized');
            }
            console.log('Loading proifle!');
            console.log(req.body);
            return controller.updateProfile(req, res);
        })
        .get('/contact', (req, res) => {
            return res.render('contact');
        });
    app.use('/', router);
};

module.exports = attach;
