// English Loop local app shell. TED content is never downloaded or cached.
const VERSION='english-loop-ted-v2';
const SHELL=['./','./index.html','./ted.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>e.waitUntil(
  caches.open(VERSION).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting())
));
self.addEventListener('activate',e=>e.waitUntil(
  caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('english-loop-')&&k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim())
));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  if(url.origin!==self.location.origin)return;
  if(e.request.mode==='navigate'){
    const offlinePage=url.pathname.endsWith('/ted.html')?'./ted.html':'./index.html';
    e.respondWith(fetch(e.request).catch(()=>caches.match(offlinePage)));
    return;
  }
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request)));
});
