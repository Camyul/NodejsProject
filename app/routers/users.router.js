const { Router } = require('express');
// const MongoClient = require('mongodb');


const attach = (app, data) => {
    const router = new Router();
    const controller = require('./profileController').init(data);
    const contactController = require('./contactController').init(data);

    const http = require('http').Server(router);
    const io = require('socket.io')(http);

    router
        .get('/', (req, res) => {
            return res.status(200).render('home');
        })
        .get('/profile', (req, res) => {
            if (!req.isAuthenticated()) {
                res.status(401).render('./profile/unauthorized');
            } else {
                res.status(200).render('./profile/profile', {
                    context: req.user || [],
                });
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
        .post('/account/delete', (req, res) => {
            if (!req.isAuthenticated()) {
                return res.status(401).render('./profile/unauthorized');
            }
            return controller.deleteProfile(req, res);
        })
        .get('/contact', (req, res) => {
            return res.render('contact');
        })
        .get('/memberchat', (req, res) => {
            if (!req.isAuthenticated()) {
                return res.status(401).render('./profile/unauthorized');
            }
            return res.status(200).render('./memberChat');
        })
        .post('/contact', (req, res) => {
            return contactController.submitForm(req, res);
        })
        .post('/contact/subscribe', (req, res) => {
            return contactController.subscribe(req, res);
        });

    io.on('connection', function(socket) {
        console.log('a user connected');
    });
    app.use('/', router);
};

module.exports = attach;
