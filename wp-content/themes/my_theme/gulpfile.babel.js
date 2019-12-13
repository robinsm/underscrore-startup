/*
 * https://css-tricks.com/gulp-for-wordpress-initial-setup/
 * https://css-tricks.com/gulp-for-wordpress-creating-the-tasks/
 */
import { src, dest, watch, series, parallel } from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import imagemin from 'gulp-imagemin';
import webpack from 'webpack-stream';
import del from 'del';

const PRODUCTION = yargs.argv.prod;

export const styles = () => {
	return src('src/scss/style.scss')
		.pipe(gulpif(!PRODUCTION, sourcemaps.init()))
		.pipe(sass().on('error', sass.logError))
		.pipe(gulpif(PRODUCTION, postcss([autoprefixer])))
		.pipe(
			gulpif(
				PRODUCTION,
				cleanCss({ compatibility: 'ie8', debug: true }, details => {
					console.log(`${details.name}: ${details.stats.originalSize}`);
					console.log(`${details.name}: ${details.stats.minifiedSize}`);
				})
			)
		)
		.pipe(gulpif(!PRODUCTION, sourcemaps.write()))
		.pipe(dest('dist/css'));
};

export const images = () => {
	return src('src/images/**/*.{jpg,jpeg,png,svg,gif}')
		.pipe(gulpif(PRODUCTION, imagemin()))
		.pipe(dest('dist/images'));
};

export const copy = () => {
	return src(['src/**/*', '!src/{images,js,scss}', '!src/{images,js,scss}/**/*']).pipe(dest('dist'));
};

export const scripts = () => {
	return src('src/js/bundle.js')
		.pipe(
			webpack({
				module: {
					rules: [
						{
							test: /\.js$/,
							use: {
								loader: 'babel-loader',
								options: {
									presets: [],
								},
							},
						},
					],
				},
				mode: PRODUCTION ? 'production' : 'development',
				devtool: !PRODUCTION ? 'inline-source-map' : false,
				output: {
					filename: 'bundle.js',
					path: __dirname,
					library: 'm56Library',
				},
			})
		)
		.pipe(dest('dist/js'));
};

export const clean = () => del(['dist']);

export const watchForChanges = () => {
	watch('src/scss/**/*.scss', styles);
	watch('src/images/**/*.{jpg,jpeg,png,svg,gif}', images);
	watch(['src/**/*', '!src/{images,js,scss}', '!src/{images,js,scss}/**/*'], copy);
	watch('src/js/**/*.js', scripts);
};

export const dev = series(clean, parallel(styles, images, copy, scripts), watchForChanges);
export const build = series(clean, parallel(styles, images, copy, scripts));
export default dev;
