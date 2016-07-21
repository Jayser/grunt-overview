module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' +
            ' Licensed <%= pkg.license %> */\n',
        // Task configuration
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['app/**/*.js'],
                dest: 'builds/js/main.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'builds/js/main.min.js'
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['app/index.html'], dest: 'builds/', filter: 'isFile'}
                ]
            }
        },
        watch: {
            gruntfile: {
                files: 'app/**/*.js',
                tasks: ['build']
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task
    grunt.registerTask('default', ['build', 'watch']);
    grunt.registerTask('build', ['concat', 'uglify', 'copy']);
};

