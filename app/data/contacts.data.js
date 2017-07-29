const BaseData = require('./base/base.data');
const contact = require('../../models/contact.model');
const emailMatcher = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g);

class ContactsData extends BaseData {
    constructor(db) {
        super(db, contact, contact);
    }

    _isModelValid(model) {
        if (model.name.length < 3) {
            return false;
        }
        if (!(model.email.match(emailMatcher))) {
            return false;
        }
        if (model.phone.length < 5) {
            return false;
        }
        if (model.message.length < 80) {
            return false;
        }
        return true;
    }
}

module.exports = ContactsData;
