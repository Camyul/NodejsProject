const { init } = require('../../app/app');
const request = require('supertest');

const { expect } = require('chai');

describe('Testing /myoffers', () => {
    const connectionString = 'mongodb://localhost/sharedTravel';
    let app = null;

    beforeEach(() => {
        return Promise.resolve()
            .then(() => require('../../app/db/db').init(connectionString))
            .then((db) => require('../../app/data/data').init(db))
            .then((data) => require('../../app/app').init(data))
            .then((_app) => {
                app = _app;
            });
    });
    describe('GET /myoffers', () => {
        it('expect to return 401', (done) => {
            request(app)
                .get('/myoffers')
                .expect(401)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    return done();
                });
        });
    });
});
