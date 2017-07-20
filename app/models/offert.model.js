const BaseData = require('../data/base/base.data');

class Offert extends BaseData {
    static isValid(model) {
        return true;
    }

    get id() {
        return this._id;
    }

    static toViewModel(model) {
        const viewModel = new Offert();

        Object.keys(model)
            .forEach((prop) => {
                viewModel[prop] = model[prop];
            });

        return viewModel;
    }
}

module.exports = Offert;
