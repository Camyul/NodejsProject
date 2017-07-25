const express = require('express');


const init = (data) => {
    const app = express();

    require('./config/app.config').applyTo(app);
    require('./config/auth.config').applyTo(app, data);

    app.use(require('connect-flash')());

    app.use((req, res, next) => {
        next();
    });

    require('./routers')(app, data);

    app.get('*', (req, res) => {
        res.status(404)
            .render('error-page');
    });
    return Promise.resolve(app);
};

module.exports = {
    init,
};
