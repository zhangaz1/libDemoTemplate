'use strict';


gulp.task('watch.src', cb => {

	plugins.watch(config.js.dest, function() {
		gulp.start('change');
	});

	cb();
});
