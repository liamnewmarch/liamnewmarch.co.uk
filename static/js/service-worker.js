const version = '8.0.0';

const files = [
  '/',
  '/static/css/main.css',
  '/static/js/app.js',
];

class OfflineStrategy {
  static async activate() {
    const keys = await caches.keys();
    const oldKeys = keys.filter(key => key.includes(version));
    return oldKeys.map(key => caches.delete(key));
  }

  static async fetch(event) {
    const cached = await caches.match(event.request);
    const network = await fetch(event.request);
    const clone = network.clone();
    const cache = await caches.open(version);
    cache.put(event.request, clone);
    return cached || network;
  }

  static async install() {
    const cache = await caches.open(version);
    cache.addAll(files);
  }
}

self.addEventListener('activate', (event) => {
  event.waitUntil(OfflineStrategy.activate(event));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(OfflineStrategy.fetch(event));
});

self.addEventListener('install', (event) => {
  event.waitUntil(OfflineStrategy.install(event));
});
