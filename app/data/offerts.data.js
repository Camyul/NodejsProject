const BaseData = require('./base/base.data');
const Offert = require('../../models/offer.model');
const supportedCountries = ['bulgaria', 'greece'];
const dateMatcher = new RegExp(/[0-9]{4}-[0-9]{2}-[0-9]{2}/g);

class OffertsData extends BaseData {
    constructor(db) {
        super(db, Offert, Offert);
    }

    _isModelValid(model) {
        if (!(supportedCountries.includes(model.country.toLowerCase()))) {
            console.log('failed at country validation');
            return false;
        }
        if (model.city.length < 3) {
            console.log('failed at city validation');

            return false;
        }
        if (isNaN(model.price)) {
            console.log(model.price);
            return false;
        }
        if (isNaN(model.duration) || model.duration < 1) {
            console.log('failed at duration validation');

            return false;
        }
        if (!(model.date.match(dateMatcher))) {
            console.log('failed at date validation');
            console.log(model.date);
            return false;
        }
        return true;
    }
}

module.exports = OffertsData;
