import gulp from 'gulp';
let conf = require('../config.js');

gulp.task('build', ['js', 'stylus', 'jade'])
