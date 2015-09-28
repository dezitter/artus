import gulp from 'gulp';
import livereload from 'gulp-livereload';
import sass from 'gulp-sass';

import paths from './paths';

const sass_glob = paths.sass_src_dir + '/**/*.scss';

gulp.task('css', () => {
    return gulp.src(sass_glob)
        .pipe(sass().on('error', sass.logError))
        .pipe( gulp.dest(paths.css_dest_dir) );
});

gulp.task('watch:css', () => {
    livereload.listen();

    gulp.watch(sass_glob, ['css'])
        .on('change', event => livereload.reload(event.path));
});
