module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		autoprefixer: {
			build: {
				src: 'assets/css/min.css',
				dest: 'assets/css/min.css'
			}
		},

		jekyll: {
			build: {
				src : '<%= app %>'
			}
		},

		sass: {
			build: {
				options: {
					style: 'compressed'
				},
				src: 'assets/css/main.scss',
				dest: 'assets/css/min.css'
			}
		},

		uglify: {
			build: {
				options: {
					mangle: false
				},
				files: {
					'assets/js/min.js': [
						'bower_components/jquery/dist/jquery.min.js',
						'assets/js/main.js'
					]
				}
			}
		},

		watch: {
			build: {
				files: [
					// Assets
					'assets/css/*.scss',
					'assets/js/*.js',
					// Jekyll pages
					'**/*.md',
					'**/*.html',
					// Not compiled JS
					'!assets/js/min.js',
					// Not compiled pages
					'!_site/**'
				],
				tasks: [ 'default' ]
			}
		}
	});

	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
		'sass', 'uglify', 'autoprefixer', 'jekyll'
	]);
};
