module.exports = function(grunt) {
  'use strict';

  var config = require('./grunt')(grunt);

  config.pkg = grunt.file.readJSON('./package.json');
  config.paths = { root: __dirname };

  grunt.initConfig(config);

  Object.keys(config.pkg.devDependencies).forEach(function(item) {
    if (item.lastIndexOf('grunt-', 0) === 0) {
      grunt.loadNpmTasks(item);
    }
  });

  grunt.registerTask('default', [ 'availabletasks' ]);

  grunt.registerTask('run-tests', [ 'protractor:run' ]);
  grunt.registerTask('run-tests-debug', [ 'protractor:debug' ]);
  grunt.registerTask('run-webdriver', [ 'shell:webdriver' ]);
  grunt.registerTask('run-server', [ 'nodemon' ]);

  grunt.registerTask('compile', [
    'clean',
    'copy',
    'concat:js',
    'concat:css',
    'browserify:client',
    'less:client'
  ]);

  grunt.registerTask('build', [
    'clean',
    'copy',
    'concat:js',
    'concat:css',
    'browserify:client',
    'less:client',
    'uglify:public',
    'cssmin:public'
  ]);
};
