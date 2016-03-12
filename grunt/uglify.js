module.exports = {
  build: {
    options: {
      wrap: true,
      sourceMap: true
    },
    files: {
      'static/js/min.js': [
        'static/js/modules/*.js',
        'static/js/services/*.js',
        'static/js/directives/*.js'
      ]
    }
  }
};
