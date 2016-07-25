var path = require('path');

module.exports = function (grunt) {
    'use strict';
    var variables = require('./config/variables');
    var paths = variables.paths;

    // Project configuration
    grunt.initConfig({

        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        banner: variables.banner,

        // Task configuration
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: [path.join(paths.app, '/**/*.js')],
                dest: path.join(paths.builds, '/js/main.js')
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: path.join(paths.builds, '/js/main.js')
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [path.join(paths.app, '/index.html')],
                        dest: paths.builds,
                        filter: 'isFile'
                    }
                ]
            }
        },
        watch: {
            gruntfile: {
                files: path.join(paths.app, '/**'),
                tasks: [paths.builds]
            }
        }
    });

    // These plugins provide necessary tasks
    require('load-grunt-tasks')(grunt);

    // Default task
    grunt.registerTask('default', ['build', 'watch']);
    grunt.registerTask('build', ['concat', 'copy']);
    grunt.registerTask('prod', ['concat', 'uglify','copy']);
};

