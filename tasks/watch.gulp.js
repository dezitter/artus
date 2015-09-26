import gulp from 'gulp';
import nodemon from 'gulp-nodemon';

import nodemonOptions from '../nodemon.json';

gulp.task('watch:server', () => {
    nodemon(nodemonOptions);
});
