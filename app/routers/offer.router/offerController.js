class offerController {
    constructor(data) {
        this.data = data;
    }

    getoffers(req, res) {
        return this.data.offers.getAll()
            .then((offers) => {
                return res.render('offers', {
                    context: offers,
                });
            });
    }
    getMyoffers(req, res) {
        if (!req.isAuthenticated()) {
            return res.status(401).render('./profile/unauthorized');
        }
        return res.render('myoffers', {
            context: req.user.offers || [],
        });
    }
    getCreateoffer(req, res) {
        if (!req.isAuthenticated()) {
            res.status(401).render('./profile/unauthorized');
        } else {
            res.status(200).render('createoffer');
        }
    }

    deleteoffer(req, res) {
        const offerId = req.body._id;
        console.log(offerId);

        console.log('Deleting an offer!');

        const MongoClient = require('mongodb');

        MongoClient.connect('mongodb://localhost/sharedTravel', function(error_, db) {
            db.collection('offers', {}, function(error, offers) {
                offers.remove({ _id: ObjectID(offerId) }, function(err, result) { // TO DO: FIX
                    if (err) {
                        console.log(err);
                    }
                    console.log('No errors');
                    db.close();
                    return res.redirect('/myoffers');
                });
            });
        });
    }
    createoffer(req, res) {
        const bodyoffer = req.body;

        // validate item

        const user = req.user;

        bodyoffer.user = {
            id: user._id,
            username: user.username,
        };

        return Promise
            .all([
                this.data.offers.create(bodyoffer),
            ])
            .then(([dboffer]) => {
                user.offers = user.offers || [];
                user.offers.push({
                    _id: dboffer._id,
                    country: dboffer.country,
                    city: dboffer.city,
                    price: dboffer.price,
                    duration: dboffer.duration,
                    date: dboffer.date,
                });

                return Promise.all([
                    this.data.offers.updateById(dboffer),
                    this.data.users.updateById(user),
                ]);
            })
            .then(() => {
                // connect-flash
                return res.redirect('/offers');
            })
            .catch((err) => {
                req.flash('error', err);
                return res.redirect('/createoffer');
            });
    }
}

const init = (data) => {
    return new offerController(data);
};

module.exports = { init };
