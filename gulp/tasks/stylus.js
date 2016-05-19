import gulp from 'gulp';
import plumber from "gulp-plumber";
import stylus from 'gulp-stylus';
import notify from 'gulp-notify';
import raname from 'gulp-rename';
import browser from "browser-sync";
let conf = require('../config.js');

gulp.task('stylus', () => {
 return gulp.src('app/stylus/app.styl')
.pipe(plumber())
.pipe(stylus())
.pipe(raname('app.css'))
.pipe(gulp.dest(conf.stylus.dest))
.pipe(browser.reload({stream:true}));
});
