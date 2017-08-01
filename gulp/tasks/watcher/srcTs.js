'use strict';


gulp.task('watch.srcTs', cb => {

    gulp.watch(config.js.srcTs, function(){
        gulp.src(config.js.srcTs)
            .pipe(plugins.typescript())
            .pipe(gulp.dest(config.dest + '/src'));
    });

    cb();
});
