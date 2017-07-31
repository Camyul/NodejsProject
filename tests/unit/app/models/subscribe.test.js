const { expect } = require('chai');
const sinon = require('sinon');

const Subscribe = require('../../../../models/subscribe.model');
const emailMatcher = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g);

describe('Subscribe model tests', () => {
    const model = new Subscribe();
    it('Expect model to be valid.', () => {
        expect(Subscribe.isValid({
            text: "haha"
        })).to.be.true;
    });
    it('Expect offer toViewModel to return a model', () => {
        expect(Subscribe.toViewModel('model')).to.be.an('object');
    });
})