class ContactController {
    constructor(data) {
        this.data = data;
    }

    submitForm(req, res) {
        console.log('Submitting contact entry!');
        const contactBody = req.body;
        console.log(contactBody);
        /* this.data.contactEntries
            .insertOne({
                    'name': req.body.name,
                    'email': req.body.email,
                    'number': req.body.number,
                    'message': req.body.message,
                },
                function(err, result) { // TO DO
                    if (err) {
                        console.log(err);
                    }
                    console.log(result);
                }); */
    }

    subscribe(req, res) {
        const subscribeBody = req.body;

        return Promise
            .all([
                this.data.subscribers
                .findOrCreateByEmail(subscribeBody),
            ]).then(() => {
                return res.redirect('/contact');
            });
    }
}

const init = (data) => {
    return new ContactController(data);
};

module.exports = { init };
