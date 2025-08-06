const { src, dest, watch, series, parallel } = require('gulp');
const pug = require('gulp-pug');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();

function compilePug() {
  return src('src/pug/*.pug')
    .pipe(pug())
    .pipe(dest('dist'))
    .pipe(browserSync.stream());
}

function compileImg() {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images'));
}

function compileCSS() {
  return src('src/styles/main.css')
    .pipe(postcss([tailwindcss(), autoprefixer()]))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());
}

function serve() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
  watch('src/pug/**/*.pug', compilePug);
  watch('src/styles/**/*.css', compileCSS);
}

exports.default = series(parallel(compilePug, compileCSS), serve);
