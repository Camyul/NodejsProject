const { Router } = require('express');
const MongoClient = require('mongodb');


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
        .post('/account/profile', (req, res) => {
            if (!req.isAuthenticated()) {
                res.status(401).render('./profile/unauthorized');
            } else {
                console.log('Loading proifle!');
                console.log(req.body);
                MongoClient.connect('mongodb://localhost/sharedTravel', function(error, db) {
                    db.collection('users', {}, function(errr, users) {
                        users.findOne({ email: req.body.email }, // TO DO: FIX
                            function(err, result) {
                                if (err) {
                                    console.log(err);
                                }
                                result.email = req.body.email;
                                result.name = req.body.name;
                                result.location = req.body.location;
                                db.close();
                            });
                    });
                });
            }
        })
        .get('/contact', (req, res) => {
            return res.render('contact');
        });
    app.use('/', router);
};

module.exports = attach;
