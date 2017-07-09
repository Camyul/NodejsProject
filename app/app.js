const express = require('express');

const app = express();

require('./config/app.config')(app);

require('./routers')(app);

app.get('*', (req, res) => {
    res.status(404)
        // .render('/error-page')
        .send('<h1>Resource not found!</h1>')
        .end();
});

module.exports = app;
