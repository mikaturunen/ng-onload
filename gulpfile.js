var gulp = require("gulp");
var sequence = require("run-sequence");
var stylish = require("jshint-stylish");
var uglify = require("gulp-uglify");
var jshint = require("gulp-jshint");
var to5 = require("gulp-6to5");
var rename = require("gulp-rename");

gulp.task("es6to5", function() {
    return gulp.src([ "./lib/*.js" ])
        .pipe(to5())
        .pipe(rename("ng-onload.min.js"))
        .pipe(gulp.dest( "./release" ));
});

gulp.task("release", ['es6to5'], function() {
    return gulp.src([ "./release/*.js" ])
        .pipe(uglify())
        .pipe(rename("ng-onload.min.js"))
        .pipe(gulp.dest( "./release" ));
});

gulp.task("jslint", function() {
    return gulp.src([ "test/**/*.js", "lib/**/*.js" ])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter("fail"));
});

gulp.task("default", function() {
    sequence(
        [ "jslint", "release" ]
    );
});
