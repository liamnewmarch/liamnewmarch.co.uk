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

  // Output path to static file
  config.addNunjucksTag('static', () => {
    return {
      tags: ['static'],
      parse(parser, nodes) {
        const token = parser.nextToken();
        const args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(token.value);
        return new nodes.CallExtensionAsync(this, 'run', args);
      },
      run(_, filePath, callback) {
        callback(null, `/static/${filePath}`);
      },
    };
  });

  // Change default dirs
  return {
    dir: {
      data: '../data',
      includes: '../templates',
      input: 'content',
      output: 'build',
    },
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    setTemplateFormats: ['md', 'njk'],
  };
};
