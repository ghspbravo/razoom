const gulp = require('gulp'),
	less = require('gulp-less'),
	minifyCSS = require('gulp-csso'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require("gulp-rename"),
	minifyJS = require('gulp-minify'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat');

gulp.task('connect', function() {
	connect.server({
		root: './',
		livereload: true
	});
});

gulp.task('html', function () {
	gulp.src(['./*/*.htm'])
		// .pipe(gulp.dest('./'))
		.pipe(connect.reload());
});

gulp.task('css', function () {
	gulp.src(['./assets/less/import.less'])
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(minifyCSS())
		.pipe(rename('styles.min.css'))
		.pipe(gulp.dest('./assets/'))
		.pipe(connect.reload());
});

gulp.task('js', function () {
	gulp.src(['./assets/vendor/*.js', './assets/js/*.js'])
		.pipe(concat('scripts.min.js', {
			newLine: ';\n\r'
		}))
		// .pipe(minifyJS())
		// .pipe(rename('scripts.min.js'))
		.pipe(gulp.dest('./assets/'))
		.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch(['./*/*.htm'], ['html']);
	gulp.watch(['./assets/less/*.less', './assets/less/*/*.less'], ['css']);
	gulp.watch(['./assets/js/*.js'], ['js']);
});

gulp.task('default', ['connect', 'watch']);