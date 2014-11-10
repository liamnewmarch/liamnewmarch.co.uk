module.exports = {
	build: {
		options: {
			mangle: false,
			sourceMap: true
		},
		files: {
			'assets/js/min.js': [
				'assets/js/main.js'
			]
		}
	}
};
