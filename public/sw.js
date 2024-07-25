self.addEventListener("install", (ev) => {
    console.log("[Service Worker]: Installing service worker ...", ev);
});
self.addEventListener("activate", (ev) => {
    console.log("[Service Worker]: Activating service worker ...", ev);
    return self.clients.claim();
});
