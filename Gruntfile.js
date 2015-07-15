module.exports = function(grunt) {
	var paths = {
		public: 'dist/',
		private: 'src/assets/',
		modules: 'node_modules/',
		temp: 'temp/'
	};
	var files = {
		js: [
			'<%= paths.private %>scripts/*.js',
			'<%= paths.private %>scripts/*/*.js',
			'<%= paths.temp %>js/templates.js'
		],
		css: [
			'<%= paths.private %>css/*.css'
		],

		img: [
			'<%= paths.private %>img/**/*'
		],
		dependencies : {
			js: [
				'<%= paths.modules %>angular/angular.min.js',
				'<%= paths.modules %>angular-bootstrap/dist/ui-bootstrap-tpls.js',
				'<%= paths.modules %>angular-messages/angular-messages.js',
				'<%= paths.modules %>angular-resource/angular-resource.js',
				'<%= paths.modules %>angular-ui-router/release/angular-ui-router.js',
				'<%= paths.modules %>angular-mocks/angular-mocks.js'
			]

		}
	};
	grunt.initConfig({
		paths: paths,
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			start: ['<%= paths.public %>', '<%= paths.temp %>'],
			end: ['<%= paths.temp %>']
		},
		ngtemplates: {
			main:{
				options: {
					bootstrap: function(module, script) {
						return 'app.run([\'$templateCache\', function($templateCache) {\n' + script + '}]);\n';
					}
				},
				files: [
					{
						cwd: '<%=paths.private %>',
						src: 'partials/**/*.html',
			dest:'<%= paths.temp %>js/templates.js'
					}
				]
			}
		},
		copy: {
			main: {
				files: [
 {
						expand: true,
						flatten: true,
						src: files.img,
						dest: '<%= paths.public %>img',
					},
					{
						expand: true,
						flatten: true,
						src: 'src/assets/css/*.css',
						dest: '<%= paths.public %>css'
					},


					{
						expand: true,
						flatten: true,
						src: 'src/index.html',
						dest: '<%= paths.public %>'
					}
				]
			}
		},
		concat: {
			main: {
				files: [
					{
						src: files.dependencies.js.concat(files.js),
						dest: '<%= paths.public %>js/abe.js'
					}
				]
			}
		},
		connect : {
			server: {
				options: {
					port: 8080,
					base: paths.public
				}
			}
		},
		watch: {
			js: {
				files: files.js,
				tasks: ['concat']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-angular-templates')
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['clean:start', 'ngtemplates', 'concat', 'clean:end', 'copy', 'connect', 'watch']);
};
