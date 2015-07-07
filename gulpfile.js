var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    concat = require('gulp-concat'),
    bower = require('gulp-bower'),
    server = require('gulp-server-livereload'),
    watch = require('gulp-watch');

gulp.task('default', ['minHtml','scripts','bower','webserver','watch']);

gulp.task('minHtml',function() {
  return gulp.src('public/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
  return gulp.src(['./public/**/*.module.js','./public/**/*.controller.js','./public/**/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('./dist/components/'));
});

gulp.task('webserver', function() {
  gulp.src('app')
      .pipe(server({
        livereload: true,
        directoryListing: true,
        open: true,
        port:3000
      }));
});

gulp.task('watch', function () {
  watch('public/*', function () {
    gulp.start('default');
  });
});