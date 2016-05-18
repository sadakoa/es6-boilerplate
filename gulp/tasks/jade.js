import gulp from 'gulp';
import plumber from "gulp-plumber";
import jade from 'gulp-jade';
import browser from "browser-sync";
let conf = require('../config.js');

gulp.task('jade', () => {
gulp.src('app/jade/**/*.jade')
.pipe(plumber())
.pipe(jade({pretty: true}))
.pipe(gulp.dest('./dist'));
});
