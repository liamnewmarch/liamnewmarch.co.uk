import chalk from 'chalk';
import hljs from 'highlight.js';
import marked from 'marked';

const warning = (...args) => console.warn(chalk.yellow('hljs'), ...args);

// Add syntax highlighting to marked
marked.setOptions({
  highlight(code, lang) {
    if (lang) {
      return hljs.highlight(lang, code).value;
    }
    // Language missing, use best guess
    const { language, value } = hljs.highlightAuto(code);
    warning(`missing language for code block, guessing ${language}?`);
    return value;
  },
});

export default function(...args) {
  return marked(...args);
}
