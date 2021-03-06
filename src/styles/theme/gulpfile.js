const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');

gulp.task('js', function() {
  return gulp
    .src([
      './src/components/**/*.js',
      '!./src/components/**/__test__/*.js',
      '!./src/components/**/*.spec.js',
      '!./src/components/__mocks__/**/*.js',
    ])
    .pipe(babel())
    .pipe(gulp.dest('./lib'));
});

gulp.task('css', function() {
  const plugins = [
    require('postcss-import')({
      root: __dirname,
      path: [path.join(__dirname, './src')],
    }),
    require('postcss-mixins')(),
    require('postcss-each')(),
    require('postcss-apply')(),
    require('postcss-nesting')(),
    require('postcss-reporter')({ clearMessages: true })
  ];

  return gulp
    .src(['./src/components/*.css', './src/components/**/*.css'])
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./lib'));
});

gulp.task('tsd', function () {
  gulp.src('./src/components/**/*.d.ts')
    .pipe(gulp.dest('./lib'));
});

gulp.task('default', ['js', 'css', 'tsd']);
