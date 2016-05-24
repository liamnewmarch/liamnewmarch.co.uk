module.exports = {
  options: {
    browserifyOptions: {
      debug: true,
      extensions: ['.js']
    },
    transform: ['babelify']
  },
  app: {
    files: {
      'static/js/min.js': 'static/js/app.js'
    }
  }
};
