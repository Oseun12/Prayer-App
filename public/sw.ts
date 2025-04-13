// const CACHE_NAME = 'prayer-app-v1';
// const urlsToCache = [
//   '/',
//   '/index.html',
//   '/styles.css',
//   '/main.js',
//   '/audio/background-music.mp3',
//   '/images/icon-192x192.png',
//   '/images/icon-512x512.png'
// ];

// self.addEventListener('install', (event: ExtendableEvent) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then((cache) => cache.addAll(urlsToCache))
//   );
// });

// self.addEventListener('fetch', (event: FetchEvent) => {
//   event.respondWith(
//     caches.match(event.request)
//       .then((response) => response || fetch(event.request))
//   );
// });
