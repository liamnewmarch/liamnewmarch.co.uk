import { Component } from '../utils/component';
import { loadScript } from '../utils/loadScript'


export class GoogleAnalytics extends Component {
  constructor(...args) {
    super(...args);

    const objectName = this.element.dataset.rename || 'ga';
    const trackingId = this.element.dataset.trackingId;

    function ga() {
      ga.q.push(arguments);
      ga.l = 1 * new Date();
    }

    ga.q = [];
    ga('create', trackingId, 'auto');
    ga('send', 'pageview');

    window.GoogleAnalyticsObject = objectName;
    window[objectName] = ga;

    loadScript('https://www.google-analytics.com/analytics.js');
  }
}
