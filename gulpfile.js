var gulp = require('gulp');
var less = require('gulp-less');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var clean = require('gulp-clean');

var paths = {
  out_dir: "dist",
  html: {
    src: 'src/html/**/*.html',
    dest: 'dist/html/'
  },
  styles: {
    src: 'src/styles/**/*.less',
    dest: 'dist/styles/'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js/'
  }
};

function do_clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return gulp.src(paths.out_dir, {read: false})
    .pipe(clean());
}

function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}


exports.default = scripts
exports.clean = do_clean
