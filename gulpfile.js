var gulp = require('gulp'),
  jade = require('gulp-jade'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber');

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'jade'], function() {
    browserSync.init({
        server: 'app'
    });
    gulp.watch(['app/sass/**/*.scss'], ['sass']);
    gulp.watch(['app/jade/**/*.jade'], ['jade']);
    gulp.watch(['app/index.html']).on('change', browserSync.reload);
});

// Jade
gulp.task('jade', function(){
    gulp.src('app/jade/index.jade')
    .pipe(plumber())
    .pipe(jade({
            pretty: true
        }))
    .pipe(gulp.dest('app/'));   
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
        gulp.src('app/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError)) 
        .pipe(sass({ includePaths : ['app/sass/'] }))
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);