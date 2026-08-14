// Service worker mínimo y seguro: solo existe para que la app se pueda
// "instalar" en escritorio. No guarda nada en caché, así que nunca puede
// quedarse atorado sirviendo una versión vieja o rota de la página.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Siempre va directo a la red, sin interceptar ni guardar nada.
  event.respondWith(fetch(event.request));
});
