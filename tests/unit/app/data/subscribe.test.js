const { expect } = require('chai');
const sinon = require('sinon');

const SubscribersData = require('../../../../app/data/subscribe.data');
const emailMatcher = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g);

describe('Contacts data tests', () => {
    const db = {
        collection: () => {},
    };
    let items = [];

    const validator = null;
    const dateOne = {
        email: 'simo',
    }

    const dateTwo = {
        email: 'simo@abv.bg',
    }


    describe('Subscribe test', () => {
        describe('isValid test', () => {
            beforeEach(() => {
                items = [1, 2, 3, 4];
                ModelClass = class {};

                // Arrange
                data = new SubscribersData(db, ModelClass, validator);
            });

            it('expect to return false', () => {
                expect(data._isModelValid(dateOne)).to.be.false;
            });
            it('expect to return true', () => {
                expect(data._isModelValid(dateTwo)).to.be.true;
            });
        });
    });
});