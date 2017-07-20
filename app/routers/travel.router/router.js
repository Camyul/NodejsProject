const { Router } = require('express');
const data = require('../../db/db');

const offers = [{
    destination: {
        country: 'Greece',
        city: 'Rhodes',
    },
    price: '1250.00EUR',
    duration: '7 days',
    startDate: new Date(),
}, {
    destination: {
        country: 'Greece',
        city: 'Athens',
    },
    price: '2000.00EUR',
    duration: '5 days',
    startDate: new Date(),
}, {
    destination: {
        country: 'Bulgaria',
        city: 'Slunchaka',
    },
    price: '300.00EUR',
    duration: '10 days',
    startDate: new Date(),
}];

const countries = ['Greece', 'Bulgaria'];
const citiesGreece = [{
    country: 'Greece',
    name: 'Rhodes',
    imagePath: '../../static/assets/images/rhodes/',
    toDos: [
        'Visit the medieval city',
        'Visit village of Lindos',
        'See the acropolis',
        'Relax on the beaches',
    ],
}, {
    country: 'Greece',
    name: 'Athens',
    imagePath: '../../static/assets/images/athens/',
    toDos: [
        'See the Acropolis',
        'See the Parthenon',
        'See the Temple of Hephaestus',
    ],
}, {
    country: 'Greece',
    name: 'Crete',
    imagePath: '../../static/assets/images/crete/',
    toDos: [
        'Visit Chanya Town',
        'See the Rethymnon',
        'See the Herakion',
        'Relax on the beaches',
    ],
}, {
    country: 'Greece',
    name: 'Santorini',
    imagePath: '../../static/assets/images/santorini/',
    toDos: [
        'Hike on the Fira - Oia trail',
        'See the sunset from Oia',
        'Visit the beach of Amoudi Bay',
        'Relax on the other beaches',
    ],
}];

const citiesBulgaria = [{
    country: 'Bulgaria',
    name: 'Slunchaka',
    imagePath: '../../static/assets/images/slunchaka/',
    toDos: [
        'Party all night',
        'Party all day',
        'See Azis live',
        'That\'s it basically',
    ],
}, {
    country: 'Bulgaria',
    name: 'Sozopol',
    imagePath: '../../static/assets/images/sozopol/',
    toDos: [
        'Visit the historical old town.',
        'Eat food from the best fishing restaurants.',
        'See the ancient castle.',
        'Relax on the calm beaches.',
    ],
}];

const attach = (app) => {
    const router = new Router();

    router
        .get('/offers', (req, res) => {
            return res.render('offers', { offers });
        })
        .get('/destinations', (req, res) => {
            return res.render('destinations');
        }).get('/destinations/bulgaria', (req, res) => {
            return res.render(
                'destinationViews\\bulgaria', { citiesBulgaria });
        }).get('/destinations/greece', (req, res) => {
            return res.render(
                'destinationViews\\greece', { citiesGreece });
        });
    app.use('/', router);
};

module.exports = attach;
