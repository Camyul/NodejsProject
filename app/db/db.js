/* eslint-disable no-console */

const { MongoClient } = require('mongodb');

const init = (connectionString) => {
    return MongoClient.connect(connectionString)
        .then((db) => {
            console.log('Databases connected');
            return db;
        })
        .catch((err) => console.log(err));
};

module.exports = { init };
