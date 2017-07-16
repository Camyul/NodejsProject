const express = require('express');
const database = require('./config/database');

const app = express();

const data = require('./data');

require('./config/app.config')(app);
require('./config/auth.config')(app, data);

app.use((req, res, next) => {
    console.log('---- Current user ----');
    console.log(req.user);
    next();
});

require('./routers')(app);
database();

app.get('*', (req, res) => {
    res.status(404)
        // .render('/error-page')
        .send('<h1>Resource not found!</h1>')
        .end();
});

module.exports = app;
