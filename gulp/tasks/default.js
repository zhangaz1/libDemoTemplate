'use strict';


gulp.task('default', plugins.sequence('allTest', 'watch.src'));
