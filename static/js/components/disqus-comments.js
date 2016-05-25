import { Component } from '../utils/component';
import { loadScript } from '../utils/loadScript';

export class DisqusComments extends Component {
  constructor(...args) {
    super(...args);

    this.element.setAttribute('id', 'disqus_thread');

    const shortname = this.element.dataset.shortname;
    window.disqus_shortname = shortname;
    loadScript(`https://${shortname}.disqus.com/embed.js`);
  }
}
