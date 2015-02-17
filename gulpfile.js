var gulp = require("gulp");
var sequence = require("run-sequence");
var stylish = require("jshint-stylish");
var uglify = require("gulp-uglify");
var jshint = require("gulp-jshint");
var to5 = require("gulp-6to5");

gulp.task("es6to5", function() {
    return gulp.src([ "./lib/*.js" ])
        .pipe(to5())
        .pipe(gulp.dest(path.join(releaseLocationServer)));
});

gulp.task("uglify", function() {
   gulp.src([ "./release/*.js") ])
       .pipe(uglify())
       .pipe(gulp.dest( "./release.min.js" ));
});

gulp.task("jslint", function() {
    return gulp.src([ "test/**/*.js", "lib/**/*.js" ])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter("fail"));
});

gulp.task("default", function() {
    sequence(
        [ "jsling", "es6to5" ],
        "uglify"
    );
});
