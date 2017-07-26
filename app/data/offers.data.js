const BaseData = require('./base/base.data');
const offer = require('../../models/offer.model');
const dateMatcher = new RegExp(/[0-9]{4}-[0-9]{2}-[0-9]{2}/g);

class offersData extends BaseData {
    constructor(db) {
        super(db, offer, offer);
    }

    _isModelValid(model) {
        if (!(model.date.match(dateMatcher))) {
            return false;
        }
        return true;
    }
}

module.exports = offersData;