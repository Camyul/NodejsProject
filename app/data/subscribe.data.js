const BaseData = require('./base/base.data');
const subscriber = require('../../models/subscribe.model');
const emailMatcher = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g);

class subscribersData extends BaseData {
    constructor(db) {
        super(db, subscriber, subscriber);
    }

    findOrCreateByEmail(email) {
        return this.findOrCreateBy(email);
    }

    _isModelValid(model) {
        if (!(model.date.match(emailMatcher))) {
            return false;
        }
        return true;
    }
}

module.exports = subscribersData;
