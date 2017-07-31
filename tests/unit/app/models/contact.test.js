const { expect } = require('chai');
const sinon = require('sinon');

const Contact = require('../../../../models/contact.model');
const emailMatcher = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g);

describe('Contacts model tests', () => {
    const model = new Contact();

    it('Expect model to be valid.', () => {
        expect(Contact.isValid({
            text: "haha"
        })).to.be.true;
    });
    it('Expect contact toViewModel to return a model', () => {
        expect(Contact.toViewModel('model')).to.be.an('object');
    });
})