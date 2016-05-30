module.exports = {
  options: {
    browserifyOptions: {
      debug: true,
      extensions: ['.js']
    },
    transform: [['babelify', {
      presets: 'es2015'
    }]]
  },
  app: {
    files: {
      'static/js/min.js': 'static/js/app.js'
    }
  }
};
