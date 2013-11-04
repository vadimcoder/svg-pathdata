module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-parallel');
    
    grunt.initConfig({
        clean: ['dist'],
        
        browserify: {
            lib: {
                src: 'src/SVGPathData.js',
                dest: 'dist/SVGPathData.js',
                options: {
                    standalone: 'SVGPathData'
                }
            }
        },

        karma: {
            local: {
                configFile: 'karma.conf.js'
            },
            travis: {
                configFile: 'karma.conf.js',
                singleRun: true,
                browsers: ['Firefox', 'PhantomJS']
            }
        },

        watch: {
            code: {
                files: ['src/*.js'],
                tasks: ['dist']
            }
        },

        parallel: {
            testing: {
                options: {
                  stream: true
                },
                tasks: [{
                  grunt: true,
                  args: ['karma:local']
                },{
                  grunt: true,
                  args: ['watch']
                }]
            }
        }
    });

    grunt.registerTask('dist', [
        'clean',
        'browserify'
    ]);

    grunt.registerTask('test', [
        'dist',
        'parallel:testing'
    ]);

    grunt.registerTask('default', [
        'test'
    ]);

    grunt.registerTask('travis', [
        'dist',
        'karma:travis'
    ]);
};
