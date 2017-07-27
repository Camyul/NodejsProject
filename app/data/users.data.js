const BaseData = require('./base/base.data');
const User = require('../../models/user.model');
const toastr = require('toastr');

class UsersData extends BaseData {
    constructor(db) {
        super(db, User, User);
    }

    findByUsername(username) {
        return this
            .filterBy({ username: new RegExp(username, 'i') })
            .then(([user]) => user);
    }

    checkPassword(username, password) {
        return this.findByUsername(username)
            .then((user) => {
                if (!user) {
                    throw new Error('Invalid Username or password!');
                }

                if (user.password !== password) {
                    throw new Error('Invalid Username or password!');
                }

                return true;
            });
    }
}

module.exports = UsersData;
