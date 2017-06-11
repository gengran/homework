var gulp = require("gulp")
var uglify = require('gulp-uglify');
var concat = require("gulp-concat");
var minifyCss = require("gulp-minify-css")
var htmlmin = require("gulp-htmlmin")
var watch = require("gulp-watch")
gulp.task("js",function(){
	gulp.src("work1/*.js")
	.pipe(uglify())
	.pipe(gulp.dest("copy/"))
})
gulp.task("css",function(){
	gulp.src("work1/*.css")
	.pipe(minifyCss())
	.pipe(gulp.dest("copy/"))
})
gulp.task("html",function(){
	var o = {
		removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true, 
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true 
	}
	gulp.src("work1/*.html")
	.pipe(htmlmin(o))
	.pipe(gulp.dest("copy/"))
})
//实时监听
gulp.task("default",function(){
	gulp.watch("work1/*.css",["css"])
	gulp.watch("work1/*.js",["js"])
	gulp.watch("work1/*.html",["html"])
})
