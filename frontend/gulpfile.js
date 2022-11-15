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
    .pipe(browserSync.stream())
}

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'app/js/dates.js',
        'app/js/map.js',
        'app/js/ranger.js',
        'app/js/tabs.js',
        'app/js/tethers.js',
        'app/js/spending.js',
        'app/js/weather.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
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
           'app/js/main.min.js',
           'app/fonts/*.ttf',
           'app/php/weather.php'], {base:'app'})
    .pipe(dest('dist'))
}

function cleanDist(){
    return del('dist')
}

exports.styles = styles;
exports.scripts = scripts;
exports.build = build;

exports.build = series(cleanDist, images, build);

exports.all = parallel(styles, scripts);