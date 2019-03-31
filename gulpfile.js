const { series } = require('gulp');
var nodemon = require('nodemon');


// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  console.log('Gulp clean script.');
  nodemon({
      script: 'app.js',
      ext: 'js',
      ignore: ['dist/']
  })
  .on('restart', function() {
      console.log('>> node restart');
  });
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  console.log('Gulp build script.')
  cb();
}

exports.build = build;
exports.default = series(clean, build);