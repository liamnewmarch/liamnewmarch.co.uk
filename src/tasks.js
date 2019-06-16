import { copy, remove } from './files.js';
import parser from './parser.js';
import walker from './walker.js';
import writer from './writer.js';

/**
 * Recursively remove the build folder.
 * @return {Promise}
 */
export function cleanBuild() {
  return remove('build');
}

/**
 * Copy static files to the build folder.
 * @return {Promise}
 */
export function copyStatic() {
  return copy('static', 'build');
}

/**
 * Gets page metadata.
 *  @return {Promise<object>}
 */
export function getPages() {
  return walker(parser, 'pages');
}

/**
 * Gets
 * @param {object} pages
 * @return {Promise}
 */
export function writePages(pages) {
  return writer('build', pages);
}
