var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    console.log('browserify');
    return browserify('./src/app.js')
        .bundle()
        .pipe(source('olive.js')) // gives streaming vinyl file object
        .pipe(gulp.dest('./dist'));
});

//TODO watch crash when browserify fail: uncaught exception
gulp.task('default', function() {
    console.log('default');
    gulp.watch('./src/**/*.js', ['browserify']);
});