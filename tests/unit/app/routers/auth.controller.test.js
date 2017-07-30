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

    it('Expect sign up form to work.', () => {
        controller.data.items.getSignUpForm(req, res)
            .then(() => {
                expect(res.context).to.be.deep.equal({ context: items });
                expect(res.viewName).to.be.equal('items/all');
            });
    });
    it('Expect sign in form to work.', () => {
        controller.data.items.getSignInForm(req, res)
            .then(() => {
                expect(res.context).to.be.deep.equal(items);
                expect(res.viewName).to.be.equal('items/all');
            });
    });
});
