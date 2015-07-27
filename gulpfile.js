/**
 * To clean use: `gulp clean`
 * To build use: `gulp build` , or just `ionic serve` and wait
 */

//dependencies
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var htmlmin = require('gulp-htmlmin');
var ngAnnotate = require('gulp-ng-annotate');
var replace = require('gulp-replace');
var del = require('del');

/** params **/
var PUBLIC_PATH = './www';
var ASSETS_DIR = 'assets';
var ASSETS_PATH = PUBLIC_PATH+'/'+ASSETS_DIR;
var isDevelopment = true;
var isProduction = !isDevelopment;
var paths = {
  js: ['./src/js/**/*.js'],
  sass: ['./src/scss/**/*.scss'],
  tpl: ['./src/**/*.html'],
  idx: ['./src/index.html']
};


/** Tasks **/
gulp.task('default', []);

//Build
var buildTasks = ['browserify','sass','htmlify'];
if(isDevelopment){
  //Add watch in development
  buildTasks.push('watch');
}
gulp.task('build', buildTasks);

//Watch
gulp.task('watch', function() {
  gulp.watch(paths.idx, ['htmlify-idx']);
  gulp.watch(paths.tpl, ['htmlify-tpl']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['browserify']);
});

//Browserify
gulp.task('browserify',function(){
  return browserify({
    entries:'./src/js/app.js',
    debug: (isDevelopment?true:false),
    transform: ['babelify']
  })
  .bundle()
  .pipe(source('./bundle.js'))
  .pipe(buffer())
  .pipe(ngAnnotate())
  .pipe(gulp.dest(ASSETS_PATH));
});

//Sass
gulp.task('sass', function(done) {
  gulp.src('./src/scss/app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest(ASSETS_PATH))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(ASSETS_PATH))
    .on('end', done);
});

//html
gulp.task('htmlify', ['htmlify-idx','htmlify-tpl']);
gulp.task('htmlify-idx', function() {
  return gulp.src('./src/index.html')
    .pipe(replace('${ASSETS}', ASSETS_DIR))
    .pipe(htmlmin({
      collapseWhitespace:true,
      removeComments:true
    }))
    .pipe(gulp.dest(PUBLIC_PATH));
});
gulp.task('htmlify-tpl', function() {
  return gulp.src('./src/templates/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace:true,
      removeComments:true
    }))
    .pipe(gulp.dest(ASSETS_PATH));
});


//Clean
gulp.task('clean', function(){
  del([
    PUBLIC_PATH+'/index.html', //the old index.html
    ASSETS_PATH+'/**/*', //all in assets folder
    //'!dist/mobile/deploy.json' negate pattern for not delete
  ]);
});
