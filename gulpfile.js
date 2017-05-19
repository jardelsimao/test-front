var css = [
 './src/css-source/*.scss',
];

var js  = [
    './src/js-source/app.js',
    './src/js-source/controllers/*.js',
    './src/js-source/services/*.js'
];

var views = [
    './src/js-source/views/*.html'
]

var index = [
    './src/index.html'
]

var gulp = require('gulp');

var Server = require('karma').Server;

var addsrc = require('gulp-add-src');

var uglify = require("gulp-uglify");

var concat = require("gulp-concat");

var watch = require('gulp-watch');

var sass = require('gulp-sass');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('mkdir_views', function(){
    gulp.src('src/js-source/views')
    .pipe(addsrc('views/**', { base: './'}))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('move_html', function () {
    gulp.src(views)
    .pipe(gulp.dest('./dist/js/views/'));
});

gulp.task('move_index', function () {
    gulp.src(index)
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function(){
    gulp.src(css)
    .pipe(concat('style.min.css'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('minify-js', function () {
    gulp.src(js)
    .pipe(concat('script.min.js'))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('watch', function() {
    gulp.watch(js, ['minify-js']);
    gulp.watch(css, ['sass']);
    gulp.watch(index, ['move_index']);
    gulp.watch(views, ['move_html']);
});

gulp.task('browser-sync', function() {
    browserSync.init(['./dist/css/*', './dist/js/*','./dist/index.html', './dist/js/views/*'], {
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('default',['mkdir_views','move_html','move_index','minify-js','sass','watch','browser-sync']);
