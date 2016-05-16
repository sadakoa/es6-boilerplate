'use strict'

import gulp from 'gulp'; // gulp set
import fs from 'fs' // default file system node
import stylus from 'gulp-stylus'; // compile for stylus
import jade from 'gulp-jade'; // compile for jade
import notify from 'gulp-notify';
import browserify from "browserify"; // module, and get stream
import babelify from "babelify"; // babel for browserify
import source from "vinyl-source-stream";
import plumber from "gulp-plumber"; // watche for error
import handleErrors from "./handleErrors.js"; // broserify, plumber don't stop.
import browser from "browser-sync"; // live reload
import requireDir from 'require-dir'
// requireDir('./gulp/tasks', { recurse: true });

// =============================================

gulp.task("js", () => {
  browserify({
      entries: ["./app/script/app.es6"]
    })
    .transform(babelify)
    .bundle()
    .pipe(source("app.js"))
    .pipe(gulp.dest("./dist/js"))
    .pipe(browser.reload({stream:true}));
});

// =============================================

gulp.task('stylus', () => {
  gulp.src('app/stylus/**/*.stylus')
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest('./dist/stylesheet'))
    .pipe(browser.reload({stream:true}));
});

// =============================================

gulp.task('jade', () => {
  gulp.src('app/jade/**/*.jade')
    .pipe(plumber())
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./dist'));
});

// =============================================

gulp.task('reload', () => {
  browser.reload();
});

// =============================================

gulp.task('server', () => {
  browser({
    server: {
      baseDir: './dist',
      index: 'index.html'
    }
  });
});

// =============================================

gulp.task('build', ['js', 'stylus', 'jade'])

// =============================================

gulp.task('watch', ['server'], () => {
  gulp.watch('./app/script/**/*.js', ['js']);
  gulp.watch('./app/stylus/**/*.stylus', ['stylus']);
  gulp.watch('./app/jade/**/*.jade', ['jade']);
  gulp.watch('./dist/*.html', ['reload']);
});

// =============================================

gulp.task('default', ['server', 'jade', 'stylus', 'js', 'watch'])
