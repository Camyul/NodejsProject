const { expect } = require('chai');

const { init } = require(
    '../../../../app/routers/auth.router/userController');


describe('Auth controller', () => {
    let data = null;
    let controller = null;
    const items = [1, 2, 3, 4];

    let req = null;
    let res = null;
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

        controller = init(data);
        req = require('../../req-res.mock').getRequestMock();
        res = require('../../req-res.mock').getResponseMock();
    });

    it('Expect get sign up form to work.', () => {
        return Promise.all([controller.data.items.getSignUpForm(req, res)]) // Returns undefined?
            .then((getItems) => {
                expect(getItems[0]).to.be.deep.equal(items);
                expect(res.redirect).to.be.a('function');
            });
    });
    it('Expect get sign in form to work.', () => {
        return Promise.all([controller.data.items.getSignInForm(req, res)])
            .then((getItems) => {
                expect(getItems[0]).to.be.deep.equal(items);
                expect(res.redirect).to.be.a('function');
            });
    });
});