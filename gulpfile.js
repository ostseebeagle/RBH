// gulp.js einbauen
var gulp = require('gulp');

// plugins einbauen
var autoprefixer =require('gulp-autoprefixer'),
    changed = require('gulp-changed'),
    cleancss = require('gulp-clean-css'), //modernere Version von minify-css
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    minifycss = require('gulp-minify-css'),
    minifyhtml = require('gulp-minify-html'),
    uglify = require('gulp-uglify');

// Bilder im Ordner grafiken minimieren und in den Ordner grafiken_min abspeichern
gulp.task('grafiken', function () {
    // place code for your default task here
    var imgSrc ='./public_html/grafiken_orig/**/*',
        imgDst ='./public_html/grafiken';
        
    gulp.src(imgSrc)
        .pipe(changed(imgSrc))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});

// Bilder im Ordner images minimieren und in den Ordner images_min abspeichern
gulp.task('images', function () {
    var imgSrc ='./public_html/images_orig/*',
        imgDst ='./public_html/images';
        
    gulp.src(imgSrc)
        .pipe(changed(imgSrc))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});

//Aufgaben wiederholen wenn sich ein File verändert
gulp.task('watch', function () {
    gulp.watch('./public_html/grafiken/**/*', ['grafiken']);
    gulp.watch('./public_html/images/*', ['images']);
});

