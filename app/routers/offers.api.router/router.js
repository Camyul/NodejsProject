const { Router } = require('express');

const attach = (app, data) => {
    const apiRouter = new Router();

    apiRouter
        .get('/country', (req, res) => {
            return data.offerts.getAll()
                .then((offert) => {
                    return res.send(offert);
                });
        })
        .get('/city', (req, res) => {
            return data.offerts.getAll()
                .then((offert) => {
                    return res.send(offert);
                });
        });

    app.use('/api/offers', apiRouter);
};

module.exports = attach;
