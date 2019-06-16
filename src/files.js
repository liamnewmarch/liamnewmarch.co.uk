import fs from 'fs-extra';
import { resolve } from 'path';

/**
 * Copy files recursively.
 * @param {string} src
 * @param {string} dest
 * @return {Promise}
 */
export function copy(src, dest) {
  return fs.copy(resolve(src), resolve(dest));
}

/**
 * Whether there is a directory at the given path.
 * @param  {...string} path
 * @return {Promise<boolean>}
 */
export async function directory(...path) {
  try {
    const stat = await fs.stat(resolve(...path));
    return stat.isDirectory();
  } catch (error) {
    throw error;
  }
}

/**
 * List files in a directory.
 * @param  {...string} path
 * @return {Promise<string[]>}
 */
export function list(...path) {
  return fs.readdir(resolve(...path));
}

/**
 * Read a text file.
 * @param  {...string} path
 * @return {Promise<string>}
 */
export function read(...path) {
  return fs.readFile(resolve(...path), 'utf8');
}

/**
 * Recursively remove a file or directory.
 * @param  {...string} path
 * @return {Promise}
 */
export function remove(...path) {
  return fs.remove(resolve(...path));
}

/**
 * Write a file to the given path.
 * @param {string|number|Buffer} data
 * @param  {...string} path
 * @return {Promise}
 */
export async function write(data, ...path) {
  try {
    const filename = path.pop();
    await fs.mkdirp(resolve(...path));
    await fs.writeFile(resolve(...path, filename), data);
  } catch (error) {
    throw error;
  }
}
