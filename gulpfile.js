const gulp = require('gulp');

const nodemon = require('gulp-nodemon');

const PORT = 3001;

gulp.task('server', () => {
    const app = require('./app');
    app.listen(PORT, () => console.log(`It works at: ${PORT}`));
});

gulp.task('dev', ['server'], () => {
    return nodemon({
        ext: 'js',
        task: ['server'],
        script: 'server.js',
    });
});
