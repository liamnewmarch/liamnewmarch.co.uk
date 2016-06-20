const element = document.querySelector('link[rel="serviceworker"]');
const path = element.getAttribute('href');
const scope = element.getAttribute('scope');

function register() {
  if ('serviceWorker' in navigator) {
    console.log(path, scope);
    navigator.serviceWorker.register(path, { scope });
  }
}

export const serviceWorker = { register };
