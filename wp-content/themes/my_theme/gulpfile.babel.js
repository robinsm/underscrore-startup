/*
 * https://css-tricks.com/gulp-for-wordpress-initial-setup/
 */
import { src, dest, watch } from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import imagemin from 'gulp-imagemin';
const PRODUCTION = yargs.argv.prod;

export const styles = () => {
	return src('src/scss/style.scss')
		.pipe(gulpif(!PRODUCTION, sourcemaps.init()))
		.pipe(sass().on('error', sass.logError))
		.pipe(gulpif(PRODUCTION, postcss([autoprefixer])))
		.pipe(gulpif(PRODUCTION, cleanCss({ compatibility: 'ie8' })))
		.pipe(gulpif(!PRODUCTION, sourcemaps.write()))
		.pipe(dest('dist/css'));
};

export const watchForChanges = () => {
	watch('src/scss/**/*.scss', styles);
	watch('src/images/**/*.{jpg,jpeg,png,svg,gif}', images);
};

export const images = () => {
	return src('src/images/**/*.{jpg,jpeg,png,svg,gif}')
		.pipe(gulpif(PRODUCTION, imagemin()))
		.pipe(dest('dist/images'));
};
