var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var ngTplCache = require('gulp-angular-templatecache');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');

var paths = {
  sass: ['./src/**/*.scss'],
  tpls: ['./src/**/*.tpl.html'],
  js: ['./src/**/*.js']
};

gulp.task('default', ['build']);

gulp.task('build', function(done) {
  runSequence(['build/sass',
              'build/js/eslint',
              'build/tpls'],
              'build/package',
    done);
});

gulp.task('build/sass', function(done) {
  gulp.src(paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(concat('style.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('build/tpls', function() {
  return gulp.src(paths.tpls)
    .pipe(ngTplCache({
      filename: 'app.tpls.min.js',
      standalone: true
    }))
    .on('error', handleError)
    .pipe(uglify())
    .on('error', handleError)
    .pipe(gulp.dest('./www/js/'))
});

gulp.task('build/js/eslint', function () {
  return gulp.src(paths.js)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('build/package', function() {
  return gulp.src(paths.js, { base: 'src' })
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .on('error', handleError)
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./www/js/'))
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['build/sass']);
  gulp.watch(paths.tpls, ['build/tpls']);
  gulp.watch(paths.js, ['build/package']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

var breakOnError = true;
function handleError(ex) {
  var message = [
    gutil.colors.red("[" + ex.plugin + "] errored"),
    "\n\n",
    ex.message,
    "\n"
  ];
  if(ex.stack) {
    message = message.concat(["\n", ex.stack, "\n"]);
  }
  gutil.log.apply(gutil.log, message);

  if (breakOnError) {
    return process.exit(1);
  } else {
    gutil.beep();
    this.emit('end');
  }
}
