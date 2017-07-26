const { Router } = require('express');

const attach = (app, data) => {
    const router = new Router();
    const controller = require('./offerController').init(data);

    router
        .get('/offers', (req, res) => {
            // auth
            return controller.getoffers(req, res);
        })
        .get('/myoffers', (req, res) => {
            return controller.getMyoffers(req, res);
        })
        .get('/createoffer', (req, res) => {
            return controller.getCreateoffer(req, res);
        })
        .post('/createoffer', (req, res) => {
            return controller.createoffer(req, res);
        })
        .post('/myoffers', (req, res) => {
            console.log('Deleting...');
            return controller.deleteoffer(req, res);
        });
    app.use('/', router);
};

module.exports = attach;