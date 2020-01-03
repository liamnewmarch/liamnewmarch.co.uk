const { minify } = require('html-minifier');

module.exports = function(config) {
  // Copy static files
  config.addPassthroughCopy('static');

  // Minify all HTML output
  config.addTransform('htmlmin', (content, path) => {
    if (!path.endsWith('.html')) return content;
    return minify(content, {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      decodeEntities: true,
      keepClosingSlash: false,
      removeComments: true,
      sortAttributes: true,
      sortClassName: true,
    });
  });

  config.addFilter('date', (date, format = 'iso') => {
    switch (format) {
      case 'long':
        return new Intl.DateTimeFormat('en', {
          day: 'numeric',
          month: 'long',
          weekday: 'long',
          year: 'numeric',
        }).format(date);
      case 'iso':
      default:
        return date.toISOString().split('T')[0]
    }
  });

  // Change default dirs
  return {
    dir: {
      includes: '../templates',
      input: 'content',
      output: 'build',
    },
  };
};
