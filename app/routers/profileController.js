class ProfileController {
    constructor(data) {
        this.data = data;
    }

    updateProfile(req, res) {
        console.log('You are in profile controller!');
        console.log(req.user);
        this.data.collection('users', {}, (error, users) => {
            users.findOneAndUpdate({ _id: `ObjectId(${req.user._id})` },
                function(err, result) {
                    if (err) {
                        console.log(err);
                    }
                    result.email = req.body.email;
                    result.name = req.body.name;
                    result.location = req.body.location;
                });
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
