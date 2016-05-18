import gulp from 'gulp';
var conf = require('../config.js');

gulp.task('build', ['js', 'stylus', 'jade'])
