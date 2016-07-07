import { DEBUG } from './environment';


const element = document.querySelector('link[rel="serviceworker"]');
const path = element.getAttribute('href');
const scope = element.getAttribute('scope');

export function registerServiceWorker() {
  if (!DEBUG && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register(path, { scope });
  }
}
