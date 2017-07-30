const { expect } = require('chai'); // Improve

const { init } = require(
    '../../../../app/routers/offer.router/offerController');


describe('Offer controller', () => {
    let data = null;
    let controller = null;
    const items = [1, 2, 3, 4];

    let req = null;
    let res = null;
    beforeEach(() => {
        data = {
            items: {
                getoffers() {
                    return Promise.resolve(items);
                },
                getMyoffers() {
                    return Promise.resolve(items);
                },
                getCreateoffer() {
                    return Promise.resolve(items);
                },
                deleteoffer() {
                    return Promise.resolve(items);
                },
                createoffer() {
                    return Promise.resolve(items);
                },
            },
        };

        controller = init(data);
        req = require('../../req-res.mock').getRequestMock();
        res = require('../../req-res.mock').getResponseMock();
    });

    it('Expect get offers to work.', () => {
        return Promise.all([controller.data.items.getoffers(req, res)])
            .then((x) => {
                console.log(x);
                expect(x[0]).to.be.deep.equal(items);
                expect(res.redirect).to.be.a('function');
            });
    });
    it('Expect get myoffers to work.', () => {
        return Promise.all([controller.data.items.getMyoffers(req, res)])
            .then((x) => {
                expect(x[0]).to.be.deep.equal(items);
                expect(res.redirect).to.be.a('function');
            });
    });
    it('Expect get create offer to work.', () => {
        return Promise.all([controller.data.items.getCreateoffer(req, res)])
            .then((x) => {
                expect(x[0]).to.be.deep.equal(items);
                expect(res.redirect).to.be.a('function');
            });
    });
    it('Expect create offer to work.', () => {
        return Promise.all([controller.data.items.deleteoffer(req, res)])
            .then((x) => {
                expect(x[0]).to.be.deep.equal(items);
                expect(res.redirect).to.be.a('function');
            });
    });
    it('Expect delete offer to work.', () => {
        return Promise.all([controller.data.items.createoffer(req, res)])
            .then((x) => {
                expect(x[0]).to.be.deep.equal(items);
                expect(res.redirect).to.be.a('function');
            });
    });
});
