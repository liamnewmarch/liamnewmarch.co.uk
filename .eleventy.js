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

  // Change default dirs
  return {
    dir: {
      includes: '../templates',
      input: 'content',
      output: 'build',
    },
  };
};
