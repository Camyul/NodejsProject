class OfferController {
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

    searchOffers(req, res) {
        const searchedOffers = req.body;
        const filter = {
            $and: [{
                country: { '$regex': `.*${searchedOffers.country}.*`, '$options': 'i' },
            }, {
                city: { '$regex': `.*${searchedOffers.city}.*`, '$options': 'i' },
            }, {
                date: { $regex: `.*${searchedOffers.date}.*` },
            }],
        };

        return Promise.all([
                this.data.offers.filterOffers(filter),
            ])
            .then((offers) => {
                return res.render('offers', {
                    context: offers[0],
                });
            });
    }

    deleteoffer(req, res) {
        const offerId = req.body._id;
        const user = req.user;

        const filtered = [];

        for (let i = 0; i < user.offers.length; i++) {
            if (user.offers[i]._id.toString() !== offerId.toString()) {
                filtered.push(user.offers[i]);
            }
        }
        user.offers = filtered;

        return Promise.all(
            [this.data.offers.deleteById(offerId),
                this.data.users.updateById(user),
            ]
        ).then(() => {
            return res.redirect('/myoffers');
        });
    }

    createoffer(req, res) {
        const bodyoffer = req.body;

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
                return res.redirect('/offers');
            })
            .catch((err) => {
                req.flash('error', err);
                return res.redirect('/createoffer');
            });
    }
}

const init = (data) => {
    return new OfferController(data);
};

module.exports = { init };
