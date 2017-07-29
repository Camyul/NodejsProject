const { Router } = require('express');

const attach = (app, data) => {
    const router = new Router();
    const controller = require('./profileController').init(data);

    router
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
        });
    app.use('/', router);
};

module.exports = attach;
