import date from './filters/date.js';
import keysort from './filters/keysort.js';
import markdown from './filters/markdown.js';
import minifier from '@liamnewmarch/static-plugin-html-minifier';
import nunjucks from '@liamnewmarch/static-plugin-nunjucks';

export default {
  dirs: {
    copy: 'public',
    input: 'content',
    output: 'build',
  },
  options: {
    extensions: ['html', 'md', 'yaml'],
    port: 4000,
  },
  plugins: [
    nunjucks({
      filters: {
        date,
        keysort,
        markdown,
      },
    }),
    minifier({
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      decodeEntities: true,
      keepClosingSlash: false,
      removeComments: true,
      sortAttributes: true,
      sortClassName: true,
    }),
  ],
};
