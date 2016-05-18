import gulp from 'gulp';
import browser from "browser-sync";
import plumber from "gulp-plumber";
import imagemin from 'gulp-imagemin'
import pngquant from 'imagemin-pngquant'
import changed from 'gulp-changed'
var conf = require('../config.js');

gulp.task('image', () => {
  return gulp.src(conf.image.src)
  .pipe(plumber())
  .pipe(changed(conf.image.dest))
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest(conf.image.dest));
});
