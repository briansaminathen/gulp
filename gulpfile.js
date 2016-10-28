var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');

//File path
var DIST_PATH = 'public/dist';
var SCRIPTS_PATH = 'public/scripts/**/*.js';
var CSS_PATH = 'public/css/**/*.css';

// styles
gulp.task('styles', function () {
    console.log('STARTING style task');
    return gulp.src(['public/css/reset.css', CSS_PATH])
        .pipe(concat('styles.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload());
});

// scripts
gulp.task('scripts', function () {
    console.log('STARTING scripts task');

    return gulp.src(SCRIPTS_PATH)
        .pipe(uglify())
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload());
});

// images
gulp.task('images', function () {
    console.log('STARTING images task');
});

// default
gulp.task('default', function () {
    console.log('STARTING default task');
});

// watch
gulp.task('watch', function () {
    console.log('STARTING watch task');
    require("./server.js");
    livereload.listen();
    gulp.watch(SCRIPTS_PATH, ['scripts']);
    gulp.watch(CSS_PATH, ['styles']);

});

