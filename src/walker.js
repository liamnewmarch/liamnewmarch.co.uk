import { directory, list } from './files.js';

/**
 * Recursively walk a given path and execute callback over files, aggregating
 * the returned metadata.
 * @param {function} callback
 * @param  {...string} path
 * @return {Promise<object>}
 */
export async function walker(callback, ...path) {
  try {
    const pages = {};
    for (const item of await list(...path)) {
      if (await directory(...path, item)) {
        pages[item] = await walker(callback, ...path, item);
      } else {
        const name = item.split('.').slice(0, -1);
        pages[name] = await callback(...path, item);
      }
    }
    return pages;
  } catch (error) {
    throw error;
  }
}

export default walker;
