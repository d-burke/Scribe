module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      options: {
        configFile: '.eslintrc'
      },
      target: ['*.js', 'src/**/*.js', '!Gruntfile.js', '!index.android.js', '!index.ios.js']
    },
    tslint: {
      files: {
        src: ['src/**/*.ts', 'src/**/*.tsx', '!src/index.android.tsx']
      }
    },
    exec: {
      scribe: {
        cmd: 'tsc'
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.ts', 'src/**/*.tsx'],
        tasks: ['tslint', 'exec']
      }
    }
  });

  // loading modules
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-tslint');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // additional tasks
  grunt.registerTask('default', ['eslint', 'tslint', 'exec', 'watch']);
  grunt.registerTask('test', ['eslint', 'tslint']);
  grunt.registerTask('build', ['tslint', 'exec']);
};
