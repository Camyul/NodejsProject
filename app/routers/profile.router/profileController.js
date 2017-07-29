class ProfileController {
    constructor(data) {
        this.data = data;
    }

    updateProfile(req, res) {
        console.log('You are in profile controller!');
        const userToUpdate = req.user;
        const newData = req.body;
        newData._id = userToUpdate._id;
        newData.name = req.body.name || userToUpdate.name;
        newData.email = req.body.email || userToUpdate.email;
        newData.username = req.body.username || userToUpdate.username;
        newData.password = userToUpdate.password;
        newData.confirm = userToUpdate.confirm;
        console.log(userToUpdate);
        console.log(newData);

        return Promise.all([
            this.data.users.updateById(newData),
        ]).then(() => {
            return res.redirect('/profile');
        });
    }

    deleteProfile(req, res) {
        console.log('You are in profile delete!');
        console.log(req.user);
        this.data.collection('users', {}, (error, users) => {
            users.findOneAndDelete({ _id: `ObjectId(${req.user._id})` },
                (err, result) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log(result);
                });
        });
    }
}

const init = (data) => {
    return new ProfileController(data);
};

module.exports = { init };
