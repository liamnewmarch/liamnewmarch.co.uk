import { loadScript } from '../utils/loadScript';


export class DisqusComments {
  static get selector() {
    return '.disqus-comments';
  }

  constructor(element) {
    element.setAttribute('id', 'disqus_thread');

    const shortname = element.getAttribute('data-shortname');
    window.disqus_shortname = shortname;
    loadScript(`https://${shortname}.disqus.com/embed.js`);
  }
}
