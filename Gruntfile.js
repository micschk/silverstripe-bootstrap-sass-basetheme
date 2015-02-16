module.exports = function(grunt) {
	// show elapsed time at the end
	require('time-grunt')(grunt);

	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	// Configurable variables
	var config = {
		// Change this to be the name of your theme:
		themeName: 'bootstrap-base',
		faviconBackgroundColor: '#ffffff',
		responsiveImageQuality: 70,
	};

	grunt.initConfig({
		// Clean up generated files
		// ------------------------------------------------
		clean: {
			main: [
				'.sass-cache',
				'.tmp',
				'dist/icons',
				'dist/css',
				'dist/fonts',
				'dist/images',
				'dist/javascript'
			]
		},
		// Build tasks which can be run concurrently
		// ------------------------------------------------
		concurrent: {
			serve: [
				'compass:serve',
				'copy:serve',
				'favicons',
				'responsive_images'
			],
			dist: [
				'compass:dist',
				//'copy:dist',
				'favicons',
				'imagemin:dist',
				'responsive_images',
				'svgmin:dist'
			]
		},
		// Responsive Images
		// ------------------------------------------------
		responsive_images: {
			options: {
				engine: 'im', // use imagemagick
				sizes: [{
						name: 'xs',
						width: 768,
						quality: config.responsiveImageQuality
					}, {
						name: 'xs',
						width: 768 * 2,
						suffix: '@2x',
						quality: config.responsiveImageQuality
					}, {
						name: 'sm',
						width: 992,
						quality: config.responsiveImageQuality
					}, {
						name: 'sm',
						width: 992 * 2,
						suffix: '@2x',
						quality: config.responsiveImageQuality
					}, {
						name: 'md',
						width: 1200,
						quality: config.responsiveImageQuality
					}, {
						name: 'md',
						width: 1200 * 2,
						suffix: '@2x',
						quality: config.responsiveImageQuality
					}, {
						name: 'lg',
						width: 2048,
						quality: config.responsiveImageQuality
					}, {
						name: 'lg',
						width: 2048 * 2,
						suffix: '@2x',
						quality: config.responsiveImageQuality
					}]
			},
			carousel: {
				files: [{
						expand: true,
						src: ['*.{jpg,gif,png}'],
						cwd: 'src/images/backgrounds/',
						dest: 'dist/images/backgrounds/'
					}]
			}
		},
		// Compass
		// ------------------------------------------------
		compass: {
			options: {
				sassDir: 'src/sass',
				importPath: 'bower_components'
			},
			serve: {
				options: {
					cssDir: 'dist/css'
				}
			},
			dist: {
				options: {
					cssDir: '.tmp/css'
				}
			}
		},
		// Copy files
		// ------------------------------------------------
		copy: {
//			templates: {
//				files: [
//					{
//						expand: true,
//						cwd: 'src/templates/',
//						src: ['**'],
//						dest: 'templates'
//					}
//				]
//			},
			serve: {
				files: [
					{
						expand: true,
						cwd: 'src/images/',
						src: ['**'],
						dest: 'dist/images'
					},
					{
						expand: true,
						cwd: 'src/javascript/',
						src: ['**'],
						dest: 'dist/javascript'
					},
					{
						expand: true,
						dot: true,
						cwd: 'src',
						dest: 'build',
						src: ['*.{txt}']
					}
				]
			}
//			dist: {
//				files: [
//					{
//						expand: true,
//						cwd: 'src/templates/',
//						src: ['**'],
//						dest: 'templates'
//					},
//					{
//						expand: true,
//						dot: true,
//						cwd: 'src',
//						dest: 'build',
//						src: ['*.{txt}']
//					},
//					{
//						expand: true,
//						cwd: 'bower_components/font-awesome/fonts',
//						src: '*.*',
//						dest: 'dist/fonts'
//					}
//				]
//			}
		},
		// Favicons
		// ------------------------------------------------
		favicons: {
			options: {
				appleTouchBackgroundColor: config.faviconBackgroundColor,
				tileColor: config.faviconBackgroundColor,
				trueColor: true
			},
			icons: {
				src: 'src/favicon.png',
				dest: 'dist/icons/'
			}
		},
		// Optimise images
		// ------------------------------------------------
		imagemin: {
			dist: {
				options: {
					cache: false
				},
				files: [
					{
						expand: true,
						cwd: 'src/images',
						src: '**/*.{gif,jpeg,jpg,png}',
						dest: 'dist/images'
					}
				]
			}
		},
		svgmin: {
			dist: {
				files: [
					{
						expand: true,
						cwd: 'src/images',
						src: '**/*.svg',
						dest: 'dist/images'
					}
				]
			}
		},
		// Convert any base urls to use the theme dir
		// ------------------------------------------------
//		replace: {
//			serve: {
//				options: {
//					patterns: [
//						{
//							match: '/{themedir}/g',
//							replacement: '$ThemeDir/',
//							expression: true
//						}
//					]
//				},
//				files: [
//					{
//						expand: true,
//						src: ['templates/**/*.ss'],
//						dest: ''
//					}
//				]
//			},
//			dist: {
//				options: {
//					patterns: [
//						{
//							match: '/{themedir}/g',
//							replacement: '',
//							expression: true
//						}
//					]
//				},
//				files: [
//					{
//						expand: true,
//						src: ['templates/**/*.ss'],
//						dest: ''
//					}
//				]
//			},
//			preMin: {
//				options: {
//					patterns: [
//						{
//							match: '/href="css//g',
//							replacement: 'href="../css/',
//							expression: true
//						},
//						{
//							match: '/src="images//g',
//							replacement: 'src="../images/',
//							expression: true
//						},
//						{
//							match: '/src="javascript//g',
//							replacement: 'src="../javascript/',
//							expression: true
//						}
//					]
//				},
//				files: [
//					{
//						expand: true,
//						src: ['templates/**/*.ss'],
//						dest: ''
//					}
//				]
//			},
//			postMin: {
//				options: {
//					patterns: [
//						{
//							match: '/href="../css//g',
//							replacement: 'href="$ThemeDir/css/',
//							expression: true
//						},
//						{
//							match: '/src="../images//g',
//							replacement: 'src="$ThemeDir/images/',
//							expression: true
//						},
//						{
//							match: '/src="../javascript//g',
//							replacement: 'src="$ThemeDir/javascript/',
//							expression: true
//						}
//					]
//				},
//				files: [
//					{
//						expand: true,
//						src: ['templates/**/*.ss'],
//						dest: ''
//					}
//				]
//			}
//		},
		// Parse the templates for usemin tasks
		// ------------------------------------------------
//		useminPrepare: {
//			options: {
//				dest: './'
//			},
//			html: 'templates/**/*.ss'
//		},
		// Apply vendor prefixes to css
		// NOTE bootstrap-sass/assets/stylesheets/bootstrap/mixins/_vendor-prefixes.scss:
		// // All vendor mixins are deprecated as of v3.2.0 due to the introduction of
		// // Autoprefixer in our Gruntfile. They will be removed in v4.
		// ------------------------------------------------
		autoprefixer: {
			options: {
				browsers: ['last 4 version', 'ie 8']
			},
			dist: {
				files: [{
						expand: true,
						cwd: '.tmp/css',
						src: '**/*.css',
						dest: '.tmp/css'
					}]
			}
		},
		// Minify the editor css
		cssmin: {
			dist: {
				expand: true,
				cwd: '.tmp/css',
				//src: ['editor.css'],
				src: '**/*.css',
				dest: 'dist/css'
			}
		},
		// Renames files for browser caching purposes
		// ------------------------------------------------
//		rev: {
//			dist: {
//				files: {
//					src: [
//						'dist/css/**/*.css',
//						'dist/images/**/*.{gif,jpeg,jpg,png,svg}',
//						'dist/javascript/**/*.js',
//						'!dist/css/editor.css'
//					]
//				}
//			}
//		},
		// Update references to minified files
		// ------------------------------------------------
//		usemin: {
//			html: ['templates/**/*.ss'],
//			css: ['css/**/*.css'],
//			options: {
//				assetsDirs: [
//					'css',
//					'fonts',
//					'images',
//					'javascript'
//				]
//			}
//		},
		// Complete the minification of the templates
		// ------------------------------------------------
//		htmlmin: {
//			dist: {
//				options: {
//					removeComments: true,
//					removeCommentsFromCDATA: true,
//					collapseWhitespace: true,
//					collapseBooleanAttributes: true,
//					removeAttributeQuotes: true,
//					removeRedundantAttributes: true,
//					useShortDoctype: true,
//					removeEmptyAttributes: true
//				},
//				files: [
//					{
//						expand: true,
//						cwd: 'templates/',
//						src: '**/*.ss',
//						dest: 'templates/'
//					}
//				]
//			}
//		},
		uglify: {
			dist: {
				options: {
					sourceMap: true,
					sourceMapName: 'dist/javascript/script.map',
					drop_console: true
				},
				files: {
					'dist/javascript/script.min.js': [
						'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
						'src/javascript/plugins.js', 
						'src/javascript/main.js'
					]
				}
			}
		},
		// Watch for changes
		// ------------------------------------------------
		watch: {
			compass: {
				files: ['src/sass/{,*}/*.{scss,sass}'],
				tasks: ['compass:serve'],
				options: {
					livereload: true
				}
			},
			serve: {
				files: ['src/images/**', 'src/javascript/**'],
				tasks: ['newer:copy:serve']
			},
//			templates: {
//				files: ['src/templates/**'],
//				tasks: ['newer:copy:templates', 'newer:replace:serve'],
//				options: {
//					livereload: true
//				}
//			},
			livereload: {
				files: ['src/images/**'],
				tasks: [],
				options: {
					livereload: true
				}
			}
		}
	});

	// Watch Task
	// ------------------------------------------------------------------------
	grunt.registerTask('serve', [
		'clean',
		'concurrent:serve',
		//'replace:serve',
		'watch'
	]);

	// Build Task
	//
	// We have to run usemin twice as the paths to the revisioned css and js
	// are in the wrong place.
	// The first time concatenates any files, the second replaces with the rev.
	// ------------------------------------------------------------------------
	grunt.registerTask('build', [
		'clean',
		'concurrent:dist',
//		'replace:dist',
//		'useminPrepare',
		'autoprefixer',
		//'concat',
		'cssmin',
		'uglify',
//		'rev',
//		'usemin',
//		'replace:preMin',
//		'usemin',
//		'replace:postMin',
//		'htmlmin'
	]);

	// Default Task
	// ------------------------------------------------------------------------
	grunt.registerTask('default', [
		'serve'
	]);
};
