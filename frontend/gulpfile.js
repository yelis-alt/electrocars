const {src, dest, watch, parallel, series} = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');

function styles() {
    return src(['app/css/reset.scss',
		        'app/css/style.scss'])
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
        overrideBrowserlist: ['last 10 versions'],
        grid: true
    }))
    .pipe(dest('app/css'))
}

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'app/js/dates.js',
        'app/js/map.js',
        'app/js/ranger.js',
        'app/js/tabs.js',
        'app/js/tethers.js',
        'app/js/weather.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
}

function images() {
    return src('app/images/**/*.*')
    .pipe(imagemin([imagemin.gifsicle({interlaced: true}),
	imagemin.mozjpeg({quality: 75, progressive: true}),
	imagemin.optipng({optimizationLevel: 5}),
	imagemin.svgo({
		plugins: [
			{removeViewBox: true},
			{cleanupIDs: false}
		]
	})]))
    .pipe(dest('dist/images'))
}

function build() {
   return src(['app/**/*.html',
           'app/css/style.min.css',
           'app/js/main.min.js'], {base:'app'})
    .pipe(dest('dist'))
}

function watching() {
    watch(['app/css/**/*.scss'], styles);
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
}

function cleanDist(){
    return del('dist')
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.images = images;
exports.build = build;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build);

exports.watch = parallel(styles, scripts, watching);