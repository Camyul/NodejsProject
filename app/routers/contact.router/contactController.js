class ContactController {
    constructor(data) {
        this.data = data;
    }

    submitForm(req, res) {
        const contactBody = req.body;

        return Promise
            .all([
                this.data.contacts
                .create(contactBody),
            ]).then(() => {
                return res.redirect('/contact');
            });
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
