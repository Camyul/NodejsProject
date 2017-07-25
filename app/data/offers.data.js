const BaseData = require('./base/base.data');
const offer = require('../../models/offer.model');
const supportedCountries = ['bulgaria', 'greece'];
const dateMatcher = new RegExp(/[0-9]{4}-[0-9]{2}-[0-9]{2}/g);

class offersData extends BaseData {
    constructor(db) {
        super(db, offer, offer);
    }

    _isModelValid(model) {
        if (!(supportedCountries.includes(model.country.toLowerCase()))) {
            return false;
        }
        if (model.city.trim().length < 3) {
            return false;
        }
        if (isNaN(model.price)) {
            return false;
        }
        if (isNaN(model.duration) || model.duration < 1) {
            return false;
        }
        if (!(model.date.match(dateMatcher))) {
            return false;
        }
        return true;
    }
}

module.exports = offersData;
