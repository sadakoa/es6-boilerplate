'use strict';

import gulp from 'gulp';
import browserify from "browserify";
import source from "vinyl-source-stream";

gulp.task("default", () => {
  browserify({
      entries: ["./src/app.es6"]
    })
    .bundle()
    .pipe(source("app.js"))
    .pipe(gulp.dest("./build"));
});
