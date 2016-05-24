module.exports = {
  options: {
    livereload: true
  },
  grunt: {
    files: ['Gruntfile.js', 'grunt/*.js'],
    tasks: ['build'],
    reload: true
  },
  js: {
    files: ['static/js/**/*.js', '!static/js/min.js'],
    tasks: ['build-js']
  },
  css: {
    files: ['static/css/**/*.scss'],
    tasks: ['build-css']
  }
};
