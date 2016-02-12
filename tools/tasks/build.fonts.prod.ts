//import {join} from 'path';
//import {APP_SRC, APP_DEST} from '../config';

export = function buildFontsProd(gulp, plugins) {
  return function () {
    return gulp.src([
        'node_modules/ng2-material/dist/MaterialIcons-Regular.woff',
        'node_modules/ng2-material/dist/MaterialIcons-Regular.woff2',
        'node_modules/ng2-material/dist/MaterialIcons-Regular.ttf'
      ])
      .pipe(gulp.dest('dist/prod/css'));
  };
}
