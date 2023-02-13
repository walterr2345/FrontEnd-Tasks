let gulp = require('gulp');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let sass = require('gulp-sass')(require('sass'));
let browserSync = require('browser-sync').create();
let imagemin = require('gulp-imagemin');
let autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
let server = require('gulp-webserver');
var inject = require('gulp-inject');

gulp.task('server', function () {
	gulp.src('./')
		.pipe(server({
			livereload: true,
			open: true,
			port: 4000
		}));
});

gulp.task('build', function (cb) {

	gulp.src('index.html')
		.pipe(concat('index.html'))
		.pipe(gulp.dest('dist'))


	gulp.src('js/*.js')
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));

	gulp.src('css/*.scss')
		.pipe(sass())
		.pipe(concat('styles.css'))
		.pipe(autoprefixer({
			cascade: true
		}))
		.pipe(cleanCSS({ compatibility: '*' }))
		.pipe(gulp.dest('dist'));

	//vi. Minify all the images and move into dist folder
	() => {
		gulp.src('img/*')
			.pipe(imagemin())
			.pipe(gulp.dest('dist'));
	}
	// gulp.src('index.html')
	// 	.pipe(inject(gulp.src(['./dist/*.js', './dist/*.css'], {read: false})))
	// 	.pipe(gulp.dest('dist'))
	cb()
})


function browserSyncReload(cb) {
	browserSync.reload();
	cb();
}

gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: './'
		},
		port: 4000
	})
});

gulp.task('watch', function (done) {
	gulp.watch("index.html", gulp.series('build', browserSyncReload));
	gulp.watch('js/*.js', gulp.series('build', browserSyncReload));
	gulp.watch('css/*.css', gulp.series('build', browserSyncReload));
	done();
});

gulp.task("start", gulp.series("watch", "browserSync"));


//e. Create a serve task that will build, watch and start the server
gulp.task('onlyBuildWatch', function (done) {
	gulp.watch("index.html", gulp.series('build'));
	gulp.watch('js/*.js', gulp.series('build'));
	gulp.watch('css/*.css', gulp.series('build'));
	done();
});

gulp.task("serverTask", gulp.series("onlyBuildWatch", "server"));
