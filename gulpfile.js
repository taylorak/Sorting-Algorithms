const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const babel = require('gulp-babel');

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'babel'], function() {

  browserSync.init({
      server: "./public"
  });

  gulp.watch("scss/**/*.scss", ['sass']);
  gulp.watch('src/**/*.js', ['babel']);
  gulp.watch("public/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("scss/styles.scss")
    .pipe(sass())
    .pipe(gulp.dest("public/css"))
    .pipe(browserSync.stream());
});

gulp.task('babel', function() {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('public/js'));
});

gulp.task('default', ['serve']);