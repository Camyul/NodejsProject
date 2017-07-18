const express = require('express');
const database = require('./db/db');

const app = express();

const data = require('./data');

require('./config/app.config')(app);
require('./config/auth.config')(app, data);

app.use((req, res, next) => {
    next();
});

require('./routers')(app);

app.get('*', (req, res) => {
    res.status(404)
        // .render('/error-page')
        .send('<h1>Resource not found!</h1>')
        .end();
});

module.exports = app;
