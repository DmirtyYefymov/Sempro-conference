const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

// Компіляція SCSS в CSS, зжаття та перейменування файлу
gulp.task('styles', function () {
  return gulp
    .src('src/scss/main.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
});

// Зжаття та перейменування JavaScript файлу
gulp.task('scripts', function () {
  return gulp
    .src('src/js/main.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'));
});


// Слідкування за змінами в файлах
gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.series('styles'));
  gulp.watch('src/js/main.js', gulp.series('scripts'));
});

// Запуск завдань за замовчуванням
gulp.task('default', gulp.parallel('styles', 'scripts', 'watch'));
