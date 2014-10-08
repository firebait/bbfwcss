'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    var fs = require('fs');

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        suit: {
            // Configurable paths
            src: 'src',
            dist: 'dist'
        },

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                files: {
                    'dist/suit-styleguide.css' : 'src/suit.scss'
                }
            }
        },

        copy: {
            suit_fonts: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= suit.src %>/fonts',
                    dest: '<%= suit.dist %>/fonts',
                    src: [
                        '*.{eot,svg,ttf,woff,otf}'
                    ]
                }]
            },
            awesome_fonts: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'node_modules/font-awesome/fonts',
                    dest: '<%= suit.dist %>/fonts',
                    src: [
                        '*.{eot,svg,ttf,woff,otf}'
                    ]
                }]
            }
        }

    });

    grunt.registerTask('build', function (target) {

    });

    grunt.registerTask('default', [
        'copy:suit_fonts',
        'copy:awesome_fonts',
        'sass',
        'build'
    ]);
};
