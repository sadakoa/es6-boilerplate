import gulp from 'gulp';
import browser from "browser-sync";
var conf = require('../config.js');

gulp.task('reload', () => {
  browser.reload();
});

gulp.task('server', () => {
  browser({
    server: {
      baseDir: './dist',
      index: 'index.html'
      }
  });
});

gulp.task('watch', ['server'], () => {
  gulp.watch(conf.stylus.src, ['stylus']);
  gulp.watch(conf.js.src, ['js']);
  gulp.watch('./app/jade/**/*.jade', ['jade']);
  gulp.watch('./dist/*.html', ['reload']);
});
