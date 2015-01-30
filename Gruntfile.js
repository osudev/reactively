module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-livescript');

  grunt.initConfig({
    livescript: {
      compile: {
        options: {
          header: false
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.ls'],
          dest: 'lib',
          ext: '.js'
        }]
      }
    }
  });

  grunt.registerTask('default', ['livescript']);
}