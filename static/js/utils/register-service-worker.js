import { DEV } from './environment.js';


export function registerServiceWorker() {
  if ('serviceWorker' in navigator && !DEV) {
    navigator.serviceWorker.register('/static/js/service-worker.js', {
      scope: '/'
    });
  }
}
