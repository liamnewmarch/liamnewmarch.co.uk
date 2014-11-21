module.exports = {
	build: {
		options: {
			mangle: false,
			sourceMap: true
		},
		files: {
			'assets/js/min.js': [
				'assets/js/modules/*.js',
				'assets/js/services/*.js',
				'assets/js/directives/*.js'
			]
		}
	}
};
