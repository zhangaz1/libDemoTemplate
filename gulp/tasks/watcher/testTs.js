'use strict';


gulp.task('watch.testTs', cb => {

	plugins.watch(config.test.srcTs, function() {
    	gulp.src(config.test.srcTs)
			.pipe(plugins.typescript())
			.pipe(gulp.dest(config.dest + '/test'));
	});

	cb();
});
