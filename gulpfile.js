var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();

gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        server: {
            baseDir: './public'
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
	    .pipe(sass())
	    .pipe(gulp.dest('public/css'))
	    .pipe(bs.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('scss/*.scss', ['sass']).on('change',bs.reload);
    gulp.watch('*.html').on('change', bs.reload);
});