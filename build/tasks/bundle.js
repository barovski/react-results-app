var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var notify = require('gulp-notify');
var gutil = require('gulp-util');
//var livereload = require('gulp-livereload');
var browserSync = require('browser-sync');
var argv = require('yargs').argv;
var development = !(argv.ENV === "production");

var paths = require('../paths');

gulp.task('bundle', function() {
    var appBundler = browserify({
        entries: [paths.main], // The entry file, normally "main.js"
        transform: [reactify], // Convert JSX style
        debug: development, // Sourcemapping
        cache: {},
        packageCache: {},
        fullPaths: true // Requirement of watchify
    });

    var rebundle = function() {
        var start = Date.now();
        console.log('Building APP bundle');
        return appBundler.bundle()
            .on('error', gutil.log)
            .pipe(source('bundle.js'))
            .pipe(gulpif(!development, streamify(uglify())))
            .pipe(gulp.dest(paths.outputJs))
            //.pipe(gulpif(development, livereload())) // It notifies livereload about a change if you use it
            .pipe(gulpif(development, browserSync.reload({stream:true})))
            .pipe(notify(function() {
                console.log('APP bundle built in ' + (Date.now() - start) + 'ms');
        }));
    };

    // And trigger the initial bundling
    rebundle();

    /* When we are developing we want to watch for changes and
        trigger a rebundle */
    if (development) {
        appBundler = watchify(appBundler);
        appBundler.on('update', rebundle);
        //livereload.listen();
    }
});