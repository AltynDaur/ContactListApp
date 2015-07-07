var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');
var bower = require('gulp-bower');

gulp.task('default', ['minHtml','scripts','bower']);

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