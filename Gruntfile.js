var path = require('path');
var root = path.resolve(__dirname);

module.exports = function (grunt) {
    'use strict';

    var paths = {
        root: root,
            app: path.resolve(root, 'app'),
            builds: path.resolve(root, 'builds'),
            baseSass: path.resolve(root, 'assets/sass'),
            baseStyles: path.resolve(root, 'assets/css')
    };

    grunt.initConfig({
        concat: {
            dist: {
                src: [path.join(paths.app, '/**/*.js')],
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
                tasks: ['build']
            }
        }
    });

    // These plugins provide necessary tasks
    require('load-grunt-tasks')(grunt);

    // Default task
    grunt.registerTask('default', ['build', 'watch']);
    grunt.registerTask('build', ['concat', 'copy']);
};

