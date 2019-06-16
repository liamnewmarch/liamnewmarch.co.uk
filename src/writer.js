import { write } from './files.js';
import render from './render.js';

/**
 * Recursively render and write pages to disk.
 * @param {object} pages
 * @param {object} subpages
 * @param  {...string} path
 */
export default async function writer(pages, subpages = pages, ...path) {
  try {
    for (const [slug, item] of Object.entries(subpages)) {
      if (item.type === 'page') {
        const html = render(item.template, { page: item, pages });
        await write(html, 'build', ...path, `${slug}.html`);
      } else {
        await writer(pages, item, ...path, slug);
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
