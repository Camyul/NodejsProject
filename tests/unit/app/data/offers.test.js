const { expect } = require('chai');
const sinon = require('sinon');

const OffersData = require('../../../../app/data/offers.data');
const dateMatcher = new RegExp(/[0-9]{4}-[0-9]{2}-[0-9]{2}/g);


describe('Contacts data tests', () => {
    const db = {
        collection: () => {},
    };
    let items = [];

    const validator = null;
    const dateOne = {
        date: 'false',
    }

    const dateTwo = {
        date: '2017-12-12',
    }


    describe('Offers test', () => {
        describe('isModelValid test', () => {
            beforeEach(() => {
                items = [1, 2, 3, 4];
                ModelClass = class {};

                // Arrange
                data = new OffersData(db, ModelClass, validator);
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