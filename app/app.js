const express = require('express');
const database = require('./config/database');

const app = express();

require('./config/app.config')(app);

require('./routers')(app);
database();

app.get('*', (req, res) => {
    res.status(404)
        // .render('/error-page')
        .send('<h1>Resource not found!</h1>')
        .end();
});

module.exports = app;
