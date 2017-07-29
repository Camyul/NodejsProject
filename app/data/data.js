const OffersData = require('./offers.data');
const UsersData = require('./users.data');
const SubscriberData = require('./subscribe.data');

const init = (db) => {
    return Promise.resolve({
        offers: new OffersData(db),
        users: new UsersData(db),
        subscribers: new SubscriberData(db),
    });
};

module.exports = { init };
