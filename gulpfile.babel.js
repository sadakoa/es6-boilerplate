'use strict';

// gulp set
import gulp from 'gulp';

// default file system node
import fs from 'fs'

// compile for stylus
import stylus from 'gulp-stylus';

// compile for jade
import jade from 'gulp-jade';

import notify from 'gulp-notify';

// module, and get stream
import browserify from "browserify";
import source from "vinyl-source-stream";

// watche for error
import plumber from "gulp-plumber";

// broserify, plumber don't stop.
import handleErrors from "./handleErrors.js";

// live reload
import browser from "browser-sync";

gulp.task("js", () => {
  browserify({
      entries: ["./app/script/app.es6"]
    })
    .bundle()
    .pipe(source("app.js"))
    .pipe(gulp.dest("./dist/js"));
});

gulp.task('stylus', () => {
  gulp.src('app/stylus/**/*.stylus')
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest('./dist/stylesheet'))
    .pipe(browser.reload({stream:true}));
});

gulp.task('jade', () => {
  gulp.src('app/jade/**/*.jade')
    .pipe(plumber())
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./dist'))
});

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

gulp.task('build', ['js', 'stylus', 'jade'])

// ブラウザリロードが通ってないので修正する

gulp.task('run', ['server'], () => {
  gulp.watch('./app/script/**/*.js', ['js', 'reload']);
  gulp.watch('./app/stylus/**/*.stylus', ['stylus']);
  gulp.watch('./app/jade/**/*.jade', ['jade', 'reload']);
  gulp.watch("./dist/*.html", ['reload']);
});
