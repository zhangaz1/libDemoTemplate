'use strict';


gulp.task('watch.test', cb => {

	plugins.watch(config.test.dest, function() {
		gulp.start('change');
	});

	cb();
});
