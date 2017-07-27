'use strict';


let sequence = require('gulp-sequence');

gulp.task('watch.src', function(){
    return plugins.watch(config.js.src, function(){
        gulp.start('change');
    });
});
