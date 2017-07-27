class ProfileController {
    constructor(data) {
        this.data = data;
    }

    updateProfile(req, res) {
        console.log('You are in profile controller!');
        console.log(this.data);
        this.data.collection('users', {}, function(errr, users) {
            users.findOne({ email: req.body.email }, // TO DO: FIX
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
}

const init = (data) => {
    return new ProfileController(data);
};

module.exports = { init };
