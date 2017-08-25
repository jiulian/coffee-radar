"use strict";

const gulp = require("gulp"),
    babel = require("babelify"),
    runSequence = require("run-sequence"),
    sass = require("gulp-sass"),
    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer"),
    uglify = require("gulp-uglify"),
    autoprefixer = require("gulp-autoprefixer");

// Paths

var scssPath = "./src/styles/scss/",
    destinationPath = "./src/styles/"

// Compile sass into CSS and auto-inject into browsers
gulp.task("build:sass", () => {
    return gulp.src(scssPath + "main.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: [
                "Chrome >= 35",
                "Safari >= 7",
                "Firefox >= 29",
                "ie > 9"
            ],
            cascade: false
        }))
        .pipe(gulp.dest(destinationPath));
});

// Compile all assets
gulp.task("build", () => {
    runSequence(
        "build:sass"
    );
});

gulp.task('watch', function() {
    gulp.watch('./src/styles/scss/**/*.scss', ['build:sass']);
});

// Default task is build
gulp.task("default", ["build"]);
