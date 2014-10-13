module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: [
          'src/scss/*.scss',
          'src/scss/**/*.scss'
        ],
        tasks: ['compass']
      },
      js: {
        files: [
          'src/**/*.js',
          'src/*.js',
          '!**/*.min.js'
        ],
        tasks: ['jshint','uglify']
      }
    },
    
    compass: {
      dist: {
        options: {
          sassDir: 'src/scss',
          cssDir:  'dist/css',
          outputStyle: 'compressed'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['src/js/*.js']
    },
    uglify: {
      my_target: {
        files:  [{
          expand: true,
          cwd: 'src/js',
          src: '**/*.js',
          dest: 'dist/js'
        }]
      }
    }
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // Register the default tasks.
  grunt.registerTask('default', ['watch']);
};