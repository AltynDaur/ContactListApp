var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    concat = require('gulp-concat'),
    bower = require('gulp-bower'),
    server = require('gulp-server-livereload'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    batch = require('gulp-batch');

gulp.task('default', ['minHtml','scripts','bower','watch']);

gulp.task('minHtml',function() {
  return gulp.src('public/**/*.html')
      .pipe(plumber())
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
  return gulp.src(['./public/**/*.module.js','./public/**/*.service.js','./public/**/*.controller.js','./public/**/*.js'])
      .pipe(plumber())
      .pipe(concat('all.js'))
      .pipe(gulp.dest('./dist/js/'));
});

gulp.task('bower', function() {
  return bower()
      .pipe(plumber())
      .pipe(gulp.dest('./dist/components/'));
});

gulp.task('webserver', function() {
  gulp.src('app')
      .pipe(plumber())
      .pipe(server({
        livereload: true,
        directoryListing: true,
        open: true,
        port:3000
      }));
});

gulp.task('watch', function () {
    watch(['public/*','public/**'], batch(function (events, done) {
        gulp.start('default', done);
    })).pipe(plumber());
});