/* eslint-disable new-cap */

const init = (data) => {
    const express = require('express');
    const app = express();
    const server = require('http').Server(app);
    const io = require('socket.io')(server);

    require('./config/app.config').applyTo(app);
    require('./config/auth.config').applyTo(app, data);
    require('./config/chat.config').applyTo(io);

    app.use(require('connect-flash')());

    app.use((req, res, next) => {
        next();
    });

    require('./routers')(app, data);

    app.get('*', (req, res) => {
        res.status(404)
            .render('error-page');
    });
    return Promise.resolve(server);
};

module.exports = {
    init,
};
