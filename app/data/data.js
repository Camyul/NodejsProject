const OffertsData = require('./offerts.data');
const UsersData = require('./users.data');

const init = (db) => {
    return Promise.resolve({
        offerts: new OffertsData(db),
        users: new UsersData(db),
    });
};

module.exports = { init };
