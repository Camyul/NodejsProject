const { expect } = require('chai');
const sinon = require('sinon');

const ContactsData = require('../../../../app/data/contacts.data');
const emailMatcher = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g);

describe('Contacts data tests', () => {
    const db = {
        collection: () => {},
    };
    let items = [];

    const _isModelValid = (model) => {
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
    const validator = null;
    const modelOne = {
        name: 'Si',
    }

    const modelTwo = {
        name: 'Simo',
        email: 'notamail',
    }

    const modelThree = {
        name: 'Simo',
        email: 'simo@abv.bg',
        phone: '123',
    }

    const modelFour = {
        name: 'Simo',
        email: 'simo@abv.bg',
        phone: '123456',
        message: '12345678',
    }

    const modelFive = {
        name: 'Simo',
        email: 'simo@abv.bg',
        phone: '123456',
        message: '12345678123456781234567812345678123456781234567812345678123456781234567812345678',
    }

    describe('when there are items in db', () => {
        describe('with default toViewModel', () => {
            beforeEach(() => {
                items = [1, 2, 3, 4];
                ModelClass = class {};

                // Arrange
                data = new ContactsData(db, ModelClass, validator);
            });

            it('expect to return false', () => {
                expect(data._isModelValid(modelOne)).to.be.false;
            });
            it('expect to return false', () => {
                expect(data._isModelValid(modelTwo)).to.be.false;
            });
            it('expect to return false', () => {
                expect(data._isModelValid(modelThree)).to.be.false;
            });
            it('expect to return false', () => {
                expect(data._isModelValid(modelFour)).to.be.false;
            });
            it('expect to return true', () => {
                expect(data._isModelValid(modelFive)).to.be.true;
            });
        });
    });
});