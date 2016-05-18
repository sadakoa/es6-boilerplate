import gulp from 'gulp';
import browser from "browser-sync";
import watch from 'gulp-watch';
var conf = require('../config.js');

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
  // gulp.watch(conf.stylus.src, ['stylus']);
  // gulp.watch(conf.js.src, ['js']);
  // gulp.watch('./app/jade/**/*.jade', ['jade']);
  // gulp.watch('./dist/*.html', ['reload']);
});
