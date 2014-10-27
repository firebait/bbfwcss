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

        cssmin: {
            minify: {
                files: {
                    '<%= suit.dist %>/suit-styleguide.min.css': '<%= suit.dist %>/suit-styleguide.css'
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
                },{
                    expand: true,
                    dot: true,
                    cwd: '<%= suit.src %>/conv_fonts',
                    dest: '<%= suit.dist %>/conv_fonts',
                    src: [
                        '*.{eot,svg,ttf,woff,otf}'
                    ]
                }]
            },
            images: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= suit.src %>/images',
                    dest: '<%= suit.dist %>/images',
                    src: [
                        '**/*.*'
                    ]
                }]
            }
        }

    });


    grunt.registerTask('default', [
        'copy:suit_fonts',
        'copy:images',
        'sass',
        'cssmin'
    ]);
};
