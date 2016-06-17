module.exports = function(gulp) {
  var pug = require('gulp-pug');
  var htmlmin = require('gulp-htmlmin');

  gulp.task('templates', function() {
    return gulp.src([
      '*.pug'
    ], {
      cwd: 'templates'
    }).pipe(pug({
        pretty: true,
      })
    ).pipe(htmlmin({
        collapseWhitespace: true,
      })
    ).pipe(gulp.dest('build/templates'));
  });
}
