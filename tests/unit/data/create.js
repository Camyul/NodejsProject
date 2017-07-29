const { expect } = require('chai');
const sinon = require('sinon');

const BaseData = require('../../../app/data/base/base.data');

describe('Testing data.create()', () => {
    const db = {
        collection: () => {},
    };
    let items = [];

    let ModelClass = null;
    const validator = null;
    let data = null;

    const toArray = () => {
        return Promise.resolve(items);
    };

    const find = () => {
        return {
            toArray,
        };
    };
    describe('Expecting it to return an array', () => {
        beforeEach(() => {
            items = [1, 2, 3, 4];
            sinon.stub(db, 'collection')
                .callsFake(() => {
                    return { find };
                });
            ModelClass = class {};

            // Arrange
            data = new BaseData(db, ModelClass, validator);
        });

        afterEach(() => {
            db.collection.restore();
        });

        it('expect to return an array', () => {
            return data.filterBy()
                .then((models) => {
                    expect(models).to.be.an('array');
                });
        });
    });
});
