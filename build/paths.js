var path = require('path');

var appRoot = './app/';
var vendors = './libs/';
var output = './dist/';

module.exports = {
  appRoot: appRoot,
  vendors: vendors,
  output: output,
  main: appRoot + 'js/main.js',
  js: appRoot + 'js/**/*.js',
  sassMain: appRoot + 'css/style.scss',
  sass: appRoot + 'css/**/*.scss',
  img: appRoot + 'img/**',
  html: appRoot + 'index.html',
  libs: vendors + '**/*',
  outputCss: output + 'css/',
  outputJs: output + 'js/',
  outputImg: output + 'img/',
  outputLibs: output + 'libs/'
};
