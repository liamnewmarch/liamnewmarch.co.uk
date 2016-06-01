import { loadScript } from '../utils/loadScript'


export class GoogleAnalytics {
  static get selector() {
    return '.js-google-analytics';
  }

  constructor(element) {
    const objectName = 'ga';
    const trackingId = element.getAttribute('data-tracking-id');

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
