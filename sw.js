
const staticAssests = [
  '/',
  '/ShareX_Logo_1024.png',
  '/style.css',
  '/pwatest.js',
];

self.addEventListener('install', event=>{
  event.waitUntil(
    caches.open("sbc-static").then(cache=>{
      return cache.addAll(staticAssests);
    }).catch(error=>{
      console.log(error);
    }));
});


self.addEventListener('fetch', event=>{
  const req = event.request;
  event.respondWith(cacheFirst(req));
});


async function cacheFirst(req){
  console.dir(req);
  const cacheMatch = await caches.match(req);
  return cacheMatch || fetch(req);
}
