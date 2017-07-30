const { expect } = require('chai'); // Improve

const { init } = require(
    '../../../../app/routers/profile.router/profileController');


describe('Profile controller', () => {
    let data = null;
    let controller = null;
    const items = [1, 2, 3, 4];

    let req = null;
    let res = null;
    beforeEach(() => {
        data = {
            items: {
                updateProfile() {
                    return Promise.resolve(items);
                },
                deleteProfile() {
                    return Promise.resolve(items);
                },
            },
        };

        controller = init(data);
        req = require('../../req-res.mock').getRequestMock();
        res = require('../../req-res.mock').getResponseMock();
    });

    it('Expect update  profile form to work.', () => {
        return Promise.all([controller.data.items.updateProfile(req, res)])
            .then((x) => {
                expect(x[0]).to.be.deep.equal(items);
                expect(res.redirect).to.be.a('function');
            });
    });
    it('Expect delete profile form to work.', () => {
        return Promise.all([controller.data.items.deleteProfile(req, res)])
            .then((x) => {
                expect(x[0]).to.be.deep.equal(items);
                expect(res.redirect).to.be.a('function');
            });
    });
});
