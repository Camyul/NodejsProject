const gulp = require('gulp');

const nodemon = require('gulp-nodemon');

const async = () => {
    return Promise.resolve();
};

const config = require('./config');

gulp.task('server', () => {
    async().then(() => require('./app/db').init(config.connectionString))
        .then((db) => require('./app/data').init(db))
        .then((data) => require('./app').init(data))
        .then((app) => {
            app.listen(config.port,
                () => console.log(`It Works at: ${config.port}`));
        })
        .catch((err) => {
            console.log(err);
        });
});

gulp.task('dev', ['server'], () => {
    return nodemon({
        ext: 'js',
        task: ['server'],
        script: 'server.js',
    });
});
