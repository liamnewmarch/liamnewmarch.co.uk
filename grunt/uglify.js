module.exports = {
	build: {
		options: {
			wrap: true,
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
