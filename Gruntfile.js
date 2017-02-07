module.exports = function(grunt) {
  // grunt.loadNpmTasks('grunt-sass');
  // grunt.loadNpmTasks('grunt-contrib-concat');

  require('load-grunt-tasks')(grunt);

  grunt.initConfig ({
    concat: {
      dist: {
        src: 'src/js/*.js',
        dest: 'js/main.js'
      }
    },

    jshint: {
      all: [
      'Gruntfile.js',
      'src/js/*.js']
    },

    watch: {
      js: {
        files: 'src/js/*.js',
        tasks: ['js']
      }
    }
  });

  grunt.registerTask (
    'default', [
    'jshint',
    'concat',
    'watch'
    ]);
};
