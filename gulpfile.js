var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    sourcemaps = require('gulp-sourcemaps'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat');

var jsSources = ['components/scripts/*.js'];
var htmlSources = ['builds/development/*.html'];
var sassSources = ['components/sass/style.scss'];


gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify({
      transform: 'reactify',
      debug: true
    }))
    .on('error', function(err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest('builds/development/js'))
    .pipe(connect.reload())
});

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(sourcemaps.init())
    .pipe(compass({
      sass: 'components/sass',
      image: 'builds/development/images',
      style: 'expanded',
      sourcemap: true
    })
    .on('error', gutil.log))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('builds/development/css'))
    .pipe(connect.reload())
});

gulp.task('html', function() {
  gulp.src(htmlSources)
    .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch(htmlSources, ['html']);
  gulp.watch('components/sass/*.scss', ['compass']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'builds/development/',
    livereload: true
  });
});

gulp.task('default', ['html', 'compass', 'js', 'connect', 'watch']);
