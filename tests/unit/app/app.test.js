const { expect } = require('chai');

const { init } = require('../../../app/app');


describe('Auth controller', () => {
    let data = null;
    let controller = null;
    const items = [1, 2, 3, 4];

    let req = null;
    let res = null;

    const connectionString = 'mongodb://localhost/sharedTravel';
    let app = null;
    beforeEach(() => {
        data = {
            items: {
                getSignUpForm() {
                    return Promise.resolve(items);
                },
                getSignInForm() {
                    return Promise.resolve(items);
                },
            },
        };

        return Promise.resolve()
            .then(() => require('../../../app/db/db').init(connectionString))
            .then((db) => require('../../../app/data/data').init(db))
            .then((data) => require('../../../app/app').init(data))
            .then((_app) => {
                app = _app;
            });
    });

    it('Expect to create app', () => {
        return Promise.all([app]) // Returns undefined?
            .then((x) => {
                expect(x).to.exist;
            });
    });
});