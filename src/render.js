import minifier from 'html-minifier';
import marked from 'marked';
import nunjucks from 'nunjucks';

/** @type {minifier.Options} */
const minifierOptions = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  decodeEntities: true,
  keepClosingSlash: false,
  minifyJS: true,
  removeComments: true,
  sortAttributes: true,
  sortClassName: true,
};

/** @type {nunjucks.Loader} */
const templates = new nunjucks.FileSystemLoader('templates');

/** @type {nunjucks.Environment} */
const environment = new nunjucks.Environment(templates);

environment.addFilter('markdown', marked);

/**
 * Render function
 * @param {string} name
 * @param {?object} context
 * @return {string}
 */
export default function(name, context) {
  return minifier.minify(environment.render(name, context), minifierOptions);
}
