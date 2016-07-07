import { DEBUG } from './environment';


export function canonicalRedirect() {
  const canonical = document.querySelector('link[rel="canonical"]');
  if (!DEBUG && canonical.href.indexOf(window.location.origin) < 0) {
    window.location = canonical.href;
  }
}
