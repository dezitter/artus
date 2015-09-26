import gulp from 'gulp';

import './tasks/js.gulp';
import './tasks/watch.gulp';

gulp.task('build', ['js']);
gulp.task('watch', ['watch:server', 'watch:js']);
