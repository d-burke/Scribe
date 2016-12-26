module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      target: [] // TODO: file names to be added
    },
    tslint: {
      files: {
        src: [] // TODO: file names to be added
      }
    },
    ts: {
      default: {
        src: []
        // out: , TODO: file to output compiled code to
        // watch: TODO: files/directory to watch for changes
      }
    }
  });

  // loading modules
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-tslint');
  grunt.loadNpmTasks('grunt-ts');
  // additional tasks
  grunt.registerTask('build', ['ts']); // TODO:
  grunt.registerTask('default', ['eslint', 'tslint']); // TODO:
};
