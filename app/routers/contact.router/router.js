const { Router } = require('express');

const attach = (app, data) => {
    const router = new Router();
    const contactController = require('./contactController').init(data);

    router
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
    app.use('/', router);
};

module.exports = attach;
