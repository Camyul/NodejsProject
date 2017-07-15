const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const express = require('express');

const url = 'mongodb://localhost:27017/sampleDB';

function database() {
    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.log('Unable to connect to server', err);
        } else {
            console.log('Successful connection to database.');
            const collection = db.collection('users');

            const sample = {
                'name': 'test-destination',
            };

            // collection.insert(sample);

            collection.find().toArray(function(error, result) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(result);
                    console.log(collection.collectionName);
                }
                // Close connection
                db.close();
            });
        }
    });
}

module.exports = database;
