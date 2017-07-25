const { Router } = require('express');

const attach = (app, data) => {
    const router = new Router();
    const controller = require('./offertController').init(data);

    router
        .get('/offers', (req, res) => {
            // auth
            return controller.getOfferts(req, res);
        })
        .get('/myoffers', (req, res) => {
            return controller.getMyOfferts(req, res);
        })
        .get('/createoffert', (req, res) => {
            return controller.getCreateOffert(req, res);
        })
        .post('/createoffert', (req, res) => {
            return controller.createOffert(req, res);
        })
        .post('/myoffers', (req, res) => {
            console.log('Deleting...');
            return controller.deleteOffert(req, res);
        });
    app.use('/', router);
};

module.exports = attach;
