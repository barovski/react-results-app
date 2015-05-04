var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var gulpif = require('gulp-if');
//var livereload = require('gulp-livereload');
var browserSync = require('browser-sync');
var paths = require('../paths');

var argv = require('yargs').argv;
var development = !(argv.ENV === "production");

gulp.task('sass',function(){
	if (development) {
		gulp.watch(paths.sass, ['sass', browserSync.reload]);
	}

    return sass(paths.sassMain, { sourcemap: true })
	    .pipe(autoprefixer('last 2 version', 'ie 8', 'ie 9', 'ios 6', 'android 4'))
	    .on('error', function (err) {
	      	console.error('Error', err.message);
	    })
	    .pipe(sourcemaps.write())
	    .pipe(gulp.dest(paths.outputCss))
	    //.pipe(gulpif(development, livereload()));
});