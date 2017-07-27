class ContactController {
    constructor(data) {
        this.data = data;
    }

    submitForm(req, res) {
        console.log('Submitting contact entry!');
        console.log(req.body);
        this.data.contactEntries
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
                });
    }

    subscribe(req, res) {
        console.log('Subscribing');
        console.log(req.body.email);
        this.data.subscribers.insertOne({ 'email': req.body.email },
            function(err, result) { // TO DO
                if (err) {
                    console.log(err);
                }
                console.log(result);
            });
    }
}

const init = (data) => {
    return new ContactController(data);
};

module.exports = { init };
