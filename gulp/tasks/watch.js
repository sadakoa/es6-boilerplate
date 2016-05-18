import gulp from 'gulp';
import browser from "browser-sync";
import watch from 'gulp-watch';
let conf = require('../config.js');

gulp.task('watch', ['server'], () => {
  watch(conf.stylus.src, () => {
    gulp.start(['stylus']);
  });
  watch(conf.js.src, () => {
    gulp.start(['js']);
  });
  watch('./app/jade/**/*.jade', () => {
    gulp.start(['jade']);
  });
  watch('./dist/*.html', () => {
    gulp.start(['reload']);
  });
  watch(conf.image.src, () => {
    gulp.start(['image']);
  });
});
