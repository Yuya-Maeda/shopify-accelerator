const gulp = require("gulp");
// const themekit = require("@shopify/themekit");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");

function buildStyles() {
	return gulp
		.src("styles/my-theme.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer({ cascade: false }))
		.pipe(gulp.dest("assets/"));
}

exports.buildStyles = buildStyles;

exports.watch = function () {
	gulp.watch("styles/**/*.scss", buildStyles);
	// themekit.command('watch', {
	// env:'development'
	// })
};
