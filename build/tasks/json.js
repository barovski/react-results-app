var gulp = require('gulp');
var paths = require('../paths');

gulp.task('json', function(){
    return gulp.src(['./data/*.json'])
        .pipe(gulp.dest(paths.output));
});