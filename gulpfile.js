var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    concat = require('gulp-concat'),
    bower = require('gulp-bower')
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    batch = require('gulp-batch'),
    server     = require( 'gulp-express' );




gulp.task('default', ['watch','server']);

gulp.task('updateFront',['minHtml','scripts','bower','watch']);

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

gulp.task('server', function () {
    // Start the server at the beginning of the task
    server.run(['server.js']);

    // Restart the server when file changes
    gulp.watch(['/dist/*','/dist/**'], server.notify);

    gulp.watch(['dao/*','models/*','routes/*'], server.notify);
    gulp.watch(['server.js'], [server.run]);
});

gulp.task('watch', function () {
    watch(['public/*','public/**/*'], batch(function (events, done) {
        gulp.start('updateFront', done);
    })).pipe(plumber());
});