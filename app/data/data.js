const offersData = require('./offers.data');
const UsersData = require('./users.data');

const init = (db) => {
    return Promise.resolve({
        offers: new offersData(db),
        users: new UsersData(db),
    });
};

module.exports = { init };
