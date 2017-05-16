var css = [
 './css-source/style.scss'
];

var templates = [
  './js-source/templates/home.html',
  './js-source/templates/profile.html'
]

var index = [
  './index.html'
]

var js  = [
    './js-source/vendor/angular/angular.min.js',
    './js-source/vendor/angular/angular-ui-router.min.js',
    './js-source/main.js',
    './js-source/controller/*.js'
];

var gulp = require('gulp');

var uglify = require("gulp-uglify");

var concat = require("gulp-concat");

var watch = require('gulp-watch');

var sass = require('gulp-sass');

var browserSync = require('browser-sync');
var reload      = browserSync.reload;

var notify = require('gulp-notify');

gulp.task('minify-css', function(){
    gulp.src(css)
    .pipe(concat('style.min.css'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(notify({message: "App Started"}));
});

gulp.task('minify-js', function () {
    gulp.src(js)
    .pipe(concat('script.min.js'))
    // .pipe(uglify({mangle: false})) Mantenho esta linha comentada enquanto estou em desenvolvimento
    .pipe(gulp.dest('./dist/js/'))
});

gulp.task('movetemplates', function () {
    gulp.src(templates)
    .pipe(gulp.dest('./dist/js/templates/'))
});

gulp.task('index', function () {
    gulp.src(index)
    .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function() {
    gulp.watch(js, ['minify-js']);
    gulp.watch(css, ['minify-css']);
    gulp.watch(index, ['index']);
    gulp.watch(templates, ['movetemplates']);
});

gulp.task('browser-sync', function() {
    browserSync.init(['./dist/css/*', './dist/js/*', './dist/js/templates/*','./dist/index.html'], {
        server: {
            baseDir: "./dist/"
        }
    });
});

gulp.task('default',['minify-js','minify-css','movetemplates','index','watch','browser-sync']);
