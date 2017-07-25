class OffertController {
    constructor(data) {
        this.data = data;
    }

    getOfferts(req, res) {
        return this.data.offerts.getAll()
            .then((offers) => {
                return res.render('offers', {
                    context: offers,
                });
            });
    }
    getMyOfferts(req, res) {
        if (!req.isAuthenticated()) {
            return res.status(401).render('./profile/unauthorized');
        }
        return res.render('myoffers', {
            context: req.user.offers || [],
        });
    }
    getCreateOffert(req, res) {
        if (!req.isAuthenticated()) {
            res.status(401).render('./profile/unauthorized');
        } else {
            res.status(200).render('createoffert');
        }
    }

    deleteOffert(req, res) {
        const offerId = req.body._id;
        console.log(offerId);

        console.log('Deleting an offer!');

        const MongoClient = require('mongodb');

        MongoClient.connect('mongodb://localhost:27017/sharedTravel', function(error_, db) {
            db.collection('offerts', {}, function(error, offerts) {
                offerts.remove({ _id: ObjectID(offerId)}, function(err, result) {
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
    createOffert(req, res) {
        const bodyOffert = req.body;

        // validate item

        const user = req.user;

        bodyOffert.user = {
            id: user._id,
            username: user.username,
        };

        return Promise
            .all([
                this.data.offerts.create(bodyOffert),
            ])
            .then(([dbOffert]) => {
                user.offers = user.offers || [];
                user.offers.push({
                    _id: dbOffert._id,
                    country: dbOffert.country,
                    city: dbOffert.city,
                    price: dbOffert.price,
                    duration: dbOffert.duration,
                    date: dbOffert.date,
                });

                return Promise.all([
                    this.data.offerts.updateById(dbOffert),
                    this.data.users.updateById(user),
                ]);
            })
            .then(() => {
                // connect-flash
                return res.redirect('/offers');
            })
            .catch((err) => {
                req.flash('error', err);
                return res.redirect('/createoffert');
            });
    }
}

const init = (data) => {
    return new OffertController(data);
};

module.exports = { init };
