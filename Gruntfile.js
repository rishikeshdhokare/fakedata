module.exports =  grunt => {
  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          quiet: false,
          clearRequireCache: true
        },
        src: ['test']
      }
    }
  });

  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['test']);
};
