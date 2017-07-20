const { Router } = require('express');

const attach = (app, data) => {
    const router = new Router();
    const controller = require('./offertController').init(data);

    router
        .get('/offers', (req, res) => {
            return controller.getOfferts(req, res);
        })
        .get('/destinations', (req, res) => {
            return controller.getDestinations(req, res);
        })
        .get('/createoffert', (req, res) => {
            return controller.getCreateOffert(req, res);
        })
        .post('/createoffert', (req, res) => {
            return controller.createOffert(req, res);
        });
    app.use('/', router);
};

module.exports = attach;
