const { Router } = require('express');

const attach = (app, data) => {
    const apiRouter = new Router();

    apiRouter
        .get('/country', (req, res) => {
            return data.offers.getAll()
                .then((offer) => {
                    return res.send(offer);
                });
        })
        .get('/city', (req, res) => {
            return data.offers.getAll()
                .then((offer) => {
                    return res.send(offer);
                });
        });

    app.use('/api/offers', apiRouter);
};

module.exports = attach;
