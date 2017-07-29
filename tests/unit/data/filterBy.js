const { expect } = require('chai');
const sinon = require('sinon');

const BaseData = require('../../../app/data/base/base.data');

describe('Testing data.filterBy()', () => {
    const db = {
        collection: () => {},
    };
    const items = [];

    const ModelClass = null;
    const validator = null;
    const data = null;

    const toArray = () => {
        return Promise.resolve(items);
    };

    const find = () => {
        return {
            toArray,
        };
    };
    describe('Expecting it to return an array', () => {

    });
});
