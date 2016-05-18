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

gulp.task('run', ['server', 'jade', 'stylus', 'js', 'watch'])
