
const { src, dest, series } = require('gulp');
var clean   = require('gulp-clean');
var gzip     = require('gulp-zip');
var merge   = require('merge-stream');

function build(){
  var entry = src('src/entryPoint.jsp')
  .pipe(dest('build'));
  var index = src('src/index.html')
  .pipe(dest('build/src'));
  var lib = src('src/libs/**')
  .pipe(dest('build/src/lib'));
  var js = src('src/js/**')
  .pipe(dest('build/src/js'));
  var node = src('src/node_modules/**')
  .pipe(dest('build/src/node_modules'));

  return merge(entry, index, lib, js, node);
};

function zip() {
  return src('build/**')
      .pipe( gzip('archive.zip'))
      .pipe(dest('dist'));
};

function clear() {
  var build = src('build', {read: false , allowEmpty:true})
      .pipe(clean());
  var dist = src('dist', {read: false, allowEmpty:true})
      .pipe(clean());

  return merge(build, dist);
};


exports.clear = clear;
exports.build = series(clear, build);
exports.zip = series( build , zip);
exports.default = series( build , zip);


