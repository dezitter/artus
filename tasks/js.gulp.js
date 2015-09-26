import browserify from 'browserify';
import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import source from 'vinyl-source-stream';

import paths from './paths';

function bundle() {
    let js_dest_dir = path.dirname(paths.js_dest_file);
    let js_dest_filename = path.basename(paths.js_dest_file);

    let b = browserify(paths.js_src_file);

    return b.bundle()
        .on('error', onBundleError)
        .pipe( source(js_dest_filename) )
        .pipe( gulp.dest(js_dest_dir) );
}

function onBundleError(error) {
    gutil.log(
        gutil.colors.red.bold('Bundle error'),
        gutil.colors.red(error.message)
    );
    gutil.log(error.stack);
}

gulp.task('js', () => {
    return bundle();
});
