var gulp = require('gulp');
var paths = require('../paths');

gulp.task('json', function(){
    return gulp.src(['./premierLeagueFixtures.json', './leagueTable.json'])
        .pipe(gulp.dest(paths.output));
});