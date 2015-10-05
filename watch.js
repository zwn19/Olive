var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    console.log('browserify');
    return browserify('app.js')
        .bundle()
        .pipe(source('olive.js')) // gives streaming vinyl file object
        .pipe(gulp.dest('./dist'));
});


gulp.watch('**/*.js'['browserify']);