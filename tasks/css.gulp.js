import gulp from 'gulp';
import sass from 'gulp-sass';

import paths from './paths';

gulp.task('css', () => {
    let sass_glob = paths.sass_src_dir + '/**/*.scss';
    return gulp.src(sass_glob)
        .pipe(sass().on('error', sass.logError))
        .pipe( gulp.dest(paths.css_dest_dir) );
});
