var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (cb) {
return runSequence('clean',['bundle', 'libraries', 'sass', 'images', 'html', 'json'],cb);
});