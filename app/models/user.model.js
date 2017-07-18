const db = require('../config/database');
const UserData = require('../data/users.data');

class User extends UserData {
    static isValid(model) {
        return true;
    }

    get id() {
        return this._id;
    }

    static toViewModel(model) {
        const viewModel = new User();

        Object.keys(model)
            .forEach((prop) => {
                viewModel[prop] = model[prop];
            });

        return viewModel;
    }

    static findOrCreate(profile, cb) {
        const userObj = new this();
        this
            .findById({ id: profile.id }, function(err, result) {
            if (!result) {
                userObj.username = profile.displayName;
                userObj.save(cb);
            } else {
                cb(err, result);
            }
        });
    }
}

module.exports = User;
