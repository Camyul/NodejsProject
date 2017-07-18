const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/sampleDB';

const database = () => {
    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.log('Unable to connect to server', err);
        } else {
            const collection = db.collection('users');
            if (collection) {
                console.log('Collection found!');
            }
            const sample = {
                'name': 'test-destination',
            };

            // collection.insert(sample);

            collection.find().toArray(function(error, result) {
                if (error) {
                    console.log(error);
                }
                // Close connection
                db.close();
            });
        }
    });
};

module.exports = database;
