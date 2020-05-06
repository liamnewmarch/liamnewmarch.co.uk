import date from './filters/date.js';
import keysort from './filters/keysort.js';
import markdown from './filters/markdown.js';
import minifier from '@liamnewmarch/static-plugin-html-minifier';
import nunjucks from '@liamnewmarch/static-plugin-nunjucks';
import { env } from 'process';

export default {
  dirs: {
    copy: 'public',
    input: 'content',
    output: 'build',
  },
  options: {
    host: '0.0.0.0',
    port: env.PORT || 4000,
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
