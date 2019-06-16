import parse from 'front-matter';
import { read } from './files.js';

/**
 * Parse the page at a given path.
 * @param  {...string} path
 * @return {Promise<object>}
 */
export default async function(...path) {
  try {
    const raw = await read(...path);
    const page = parse(raw);
    return { ...page.attributes, body: page.body, type: 'page' };
  } catch (error) {
    throw error;
  }
}
