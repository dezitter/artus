import gulp from 'gulp';

import './tasks/css.gulp';
import './tasks/js.gulp';
import './tasks/watch.gulp';

gulp.task('build', ['js', 'css']);
gulp.task('watch', ['watch:server', 'watch:js']);
