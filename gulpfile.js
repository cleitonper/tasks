var gulp = require('gulp');
/* --------------------------------*/
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssMin = require('gulp-clean-css');
/* --------------------------------*/
var gutil = require('gulp-util');
var ftp = require('vinyl-ftp');
/* --------------------------------*/


gulp.task('css', function(){
    gulp.src([
        './path/to/your/file.css',
        './path/to/your/another-file.css'
    ])
        .pipe(concat('app.min.css'))
        .pipe(cssMin())
        .pipe(gulp.dest('./path/to/minified'));
});

/* ---------------------------------------------*/

gulp.task('js', function(){
    gulp.src([
        './path/to/your/file.js',
        './path/to/your/another-file.js'
    ])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./path/to/minified'));
});

/* ---------------------------------------------*/

gulp.task('watch', function(){
    gulp.watch('./path/to/your/cssfiles/*.css', ['css']);
    gulp.watch('./path/to/your/jsfiles/*.js', ['js']);
});

/* ---------------------------------------------*/

gulp.task('deploy', function () {

    var conn = ftp.create({
        host:     '',
        user:     '',
        password: '',
        parallel: 10,
        log: gutil.log
    });

    var globs = [
        '**/*',
        '!gulpfile.js',
        '!vendor{,/**}',
        '!node_modules{,/**}'
    ];


    return gulp.src(globs, {base: '.', buffer: false})
        .pipe(conn.newer(''))
        .pipe(conn.dest(''));
});