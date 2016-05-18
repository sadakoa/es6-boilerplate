import gulp from 'gulp';
import plumber from "gulp-plumber";
import stylus from 'gulp-stylus';
import browser from "browser-sync";
var conf = require('../config.js');

gulp.task('stylus', () => {
gulp.src(conf.stylus.src)
.pipe(plumber())
.pipe(stylus())
.pipe(gulp.dest(conf.stylus.dest))
.pipe(browser.reload({stream:true}));
});
