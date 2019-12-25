
self.addEventListener('install', function(event) {
    console.log('[Server Worker] Installing Service Worker ...', event);
})

self.addEventListener('activate', function(event) {
    console.log('[Server Worker] Activating Service Worker ...', event);
    return self.clients.claim();
})

self.addEventListener('fetch', function(event) {
    console.log('[Server Worker] Fetching something ...', event);
    event.respondWith(fetch(event.request));
})