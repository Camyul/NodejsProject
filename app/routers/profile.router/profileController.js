class ProfileController {
    constructor(data) {
        this.data = data;
    }

    updateProfile(req, res) {
        const userToUpdate = req.user;
        const newData = req.body;
        newData._id = userToUpdate._id;
        newData.name = req.body.name || userToUpdate.name;
        newData.email = req.body.email || userToUpdate.email;
        newData.username = req.body.username || userToUpdate.username;
        newData.password = userToUpdate.password;
        newData.confirm = userToUpdate.confirm;

        return Promise.all([
            this.data.users.updateById(newData),
        ]).then(() => {
            return res.redirect('/profile');
        });
    }

    deleteProfile(req, res) {
        return Promise.all([
                this.data.users.deleteById(req.user._id),
            ])
            .then(() => {
                return res.redirect('/');
            });
    }
}

const init = (data) => {
    return new ProfileController(data);
};

module.exports = { init };
