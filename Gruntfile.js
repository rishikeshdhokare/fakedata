module.exports = grunt => {
  grunt.initConfig({
    paths: {
      test: 'test',
      coverage: '<%= paths.test %>/coverage'
    },
    clean: {
      coverage: ['<%= paths.coverage %>']
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          quiet: false,
          clearRequireCache: true
        },
        src: ['<%= paths.test %>']
      }
    },
    mocha_istanbul: {
      coverage: {
        src: '<%= paths.test %>',
        options: {
          mask: 'index.js',
          root: './src',
          check: {
            statements: 90,
            branches: 90,
            functions: 90,
            lines: 90
          },
          mochaOptions: ['--reporter spec', '--check-leaks'],
          reportFormats: ['lcov'],
          coverageFolder: '<%= paths.coverage %>'
        }
      }
    },
    istanbul_check_coverage: {
      check: {
        options: {
          coverageFolder: '<%= paths.coverage %>',
          check: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100
          }
        }
      }
    }
  });

  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-mocha-istanbul');

  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('testWithCoverage', ['clean:coverage', 'mocha_istanbul:coverage']);
  grunt.registerTask('default', ['test']);
};