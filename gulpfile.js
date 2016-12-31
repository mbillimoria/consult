var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify');

var jsSources = ['components/scripts/*.js'];

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('builds/development/js'))
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
});

gulp.task('default', ['js', 'watch']);
