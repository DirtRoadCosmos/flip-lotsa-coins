const staticCoinFlip = "coin-flip-app-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/quarter-back-vt.png",
  "/images/quarter-front.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCoinFlip).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
})