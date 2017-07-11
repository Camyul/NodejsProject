const { Router } = require('express');

const attach = (app) => {
    const router = new Router();

    router
        .get('/', (req, res) => {
            return res.render('home');
            // .send('---Root---');
        })
        .get('/profile', (req, res) => {
            return res.send('---Profile---');
        })
        .get('/auth/sign-up', (req, res) => {
            return res.render('sign-up');
        });
        // .post("/register", );

        // .get("/login", );
        // .post("/login", );

        // .get("/logout", );
    

    app.use('/', router);
};

module.exports = attach;
