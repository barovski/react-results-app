var gulp = require('gulp');
var paths = require('../paths');

gulp.task('libraries', function(){
    return gulp.src(paths.libs)
        .pipe(gulp.dest(paths.outputLibs));
});