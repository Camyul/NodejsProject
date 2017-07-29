const OffersData = require('./offers.data');
const UsersData = require('./users.data');
const SubscriberData = require('./subscribe.data');
const ContactData = require('./contacts.data');

const init = (db) => {
    return Promise.resolve({
        offers: new OffersData(db),
        users: new UsersData(db),
        subscribers: new SubscriberData(db),
        contacts: new ContactData(db),
    });
};

module.exports = { init };
