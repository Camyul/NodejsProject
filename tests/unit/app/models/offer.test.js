const { expect } = require('chai');
const sinon = require('sinon');

const Offer = require('../../../../models/offer.model');
const emailMatcher = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g);

describe('Offer model tests', () => {
    const model = new Offer();
    it('Expect model to be valid.', () => {
        expect(Offer.isValid('yes')).to.be.false;
    });
})