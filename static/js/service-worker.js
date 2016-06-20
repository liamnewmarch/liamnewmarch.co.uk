const cacheVersion = '1.0.0';

self.addEventListener('install', event => {
  console.log('install!');
  event.waitUntil(caches.open(cacheVersion).then(cache => {
    return cache.addAll([
      '/static/css/min.css',
      '/static/js/min.js',
      '/static/img/avatar.jpg',
      '/',
    ]);
  }));
});

self.addEventListener('fetch', event => {
  console.log('fetch!');
  event.respondWith(caches.match(event.request).then(response => {
    return response || fetch(event.request);
  }));
});
