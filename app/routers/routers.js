/* globals __dirname */

const path = require('path');
const fs = require('fs');
const attachRoutes = (app, data) => {
    require('./users.router')(app, data);
    require('./auth.router/router')(app, data);
    require('./travel.router/router')(app, data);
};

module.exports = attachRoutes;