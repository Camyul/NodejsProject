const BaseData = require('./base/base.data');
const Offert = require('../models/offert.model');

class OffertsData extends BaseData {
    constructor(db) {
        super(db, Offert, Offert);
    }

    _isModelValid(model) {
        // custom validation 
        return super._isModelValid(model);
    }
}

module.exports = OffertsData;
