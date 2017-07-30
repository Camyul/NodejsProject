const { expect } = require('chai'); // Improve

const { init } = require(
    '../../../../app/routers/contact.router/contactController');


describe('Contact controller', () => {
    let data = null;
    let controller = null;
    const items = [1, 2, 3, 4];

    let req = null;
    let res = null;
    beforeEach(() => {
        data = {
            items: {
                subscribe() {
                    return Promise.resolve(items);
                },
                submitForm() {
                    return Promise.resolve(items);
                },
            },
        };

        controller = init(data);
        req = require('../../req-res.mock').getRequestMock();
        res = require('../../req-res.mock').getResponseMock();
    });

    it('Expect subscribe form to work.', () => {
        return Promise.all([controller.data.items.subscribe(req, res)])
            .then((x) => {
                expect(x[0]).to.be.deep.equal(items);
                expect(res.redirect).to.be.a('function');
            });
    });
    it('Expect contact form to work.', () => {
        return Promise.all([controller.data.items.submitForm(req, res)])
            .then((x) => {
                expect(x[0]).to.be.deep.equal(items);
                expect(res.redirect).to.be.a('function');
            });
    });
});
