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


gulp.task('js', async function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify({
      transform: 'reactify',
      debug: true
    }))
    .on('error', async function(err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest('builds/development/js'))
    .pipe(connect.reload())
});

gulp.task('compass', async function() {
  gulp.src(sassSources)
    .pipe(sourcemaps.init())
    .pipe(compass({
      sass: 'components/sass',
      css: 'builds/development/css',
      image: 'builds/development/images',
      style: 'expanded',
      sourcemap: true
    })
    .on('error', gutil.log))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('builds/development/css'))
    .pipe(connect.reload())
});

gulp.task('html', async function() {
  gulp.src(htmlSources)
    .pipe(connect.reload())
});

gulp.task('watch', async function() {
  gulp.watch(jsSources, gulp.series('js'));
  gulp.watch(htmlSources, gulp.series('html'));
  gulp.watch('components/sass/*.scss', gulp.series('compass'));
});

gulp.task('connect', async function() {
  connect.server({
    root: 'builds/development/',
    livereload: true
  });
});

gulp.task('default', gulp.series('html', 'compass', 'js', 'connect', 'watch'));
