const version = '1.0.0';

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => {
    const oldKeys = keys.filter(key => key.includes(version));
    return oldKeys.map(key => caches.delete(key));
  }));
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.protocol === 'data:') {
    return fetch(event.request);
  }
  event.respondWith(caches.match(event.request).then(response => {
    return response || fetch(event.request).then(response => {
      const clone = response.clone();
      caches.open(version).then(cache => {
        cache.put(event.request, clone);
      });
      return response;
    });
  }));
});
