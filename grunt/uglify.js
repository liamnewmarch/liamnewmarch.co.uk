module.exports = {
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
};
