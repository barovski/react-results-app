var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var notify = require('gulp-notify');
var gutil = require('gulp-util');
var argv = require('yargs').argv;
var development = !(argv.ENV === "production");

var paths = require('../paths');

gulp.task('vendor', function() {
    /* And now we have to create our third bundle, which are our external dependencies,
      or vendors. This is React JS, underscore, jQuery etc. We only do this when developing
      as our deployed code will be one file with all application files and vendors */
    var vendorsBundler = browserify({
        debug: development,
        require: ['react', 'react-router']
    });

    /* We only run the vendor bundler once, as we do not care about changes here,
      as there are none */
    var start = new Date();
    console.log('Building VENDORS bundle');
    return vendorsBundler.bundle()
        .on('error', gutil.log)
        .pipe(source('vendors.js'))
        .pipe(gulpif(!development, streamify(uglify())))
        .pipe(gulp.dest(paths.outputJs))
        .pipe(notify(function() {
            console.log('VENDORS bundle built in ' + (Date.now() - start) + 'ms');
    }));
});

gulp.task('libs', function(){
    return gulp.src(paths.libs)
        .pipe(gulp.dest(paths.outputLibs));
});

gulp.task('libraries', ['vendor','libs'], function(){
    
});