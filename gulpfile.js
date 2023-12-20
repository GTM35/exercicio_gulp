const gulp = require("gulp");
const imageMin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass")(require("sass"));
const sourceMaps = require("gulp-sourcemaps");

comprimeImages = () => {
  return gulp
    .src("source/images/*")
    .pipe(imageMin())
    .pipe(gulp.dest("./build/images"));
};

comprimeJS = () => {
  return gulp
    .src("./source/aritmetica/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/scripts"));
};

compilaSASS = () => {
  return gulp
    .src("./source/style/main.scss")
    .pipe(sourceMaps.init())
    .pipe(sass())
    .pipe(sourceMaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"));
};

exports.default = () => {
  gulp.watch(
    "../source/images/*",
    { ignoreInitial: false },
    gulp.series(comprimeImages)
  );

  gulp.watch(
    "./source/aritmetica/*.js",
    { ignoreInitial: false },
    gulp.series(comprimeJS)
  );

  gulp.watch(
    "./source/style/main.scss",
    { ignoreInitial: false },
    gulp.series(compilaSASS)
  );
};
