importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/51b0d0c5f458126a92f7.js",
    "revision": "1976b8c5986f975abb0ed71c4673d5cf"
  },
  {
    "url": "/_nuxt/56cfc03e8dd2aa50e1d6.js",
    "revision": "1f5214b03b5868d7d9da50e15977ef83"
  },
  {
    "url": "/_nuxt/6c8fce8e96ee665b5141.js",
    "revision": "84d5062eeda638c0399ca90da18c2687"
  },
  {
    "url": "/_nuxt/b03f3d144a24fdc8b9e0.js",
    "revision": "d7a8e4724a7edcae2d17e444bbcc2b0f"
  },
  {
    "url": "/_nuxt/b9aaf57a376c607de20b.js",
    "revision": "8d0f45cb30bf46b7138063080390671a"
  },
  {
    "url": "/_nuxt/df3b40b6921c5dc1be8e.js",
    "revision": "8a6d2103c27626e1469e884a4a1db6d3"
  },
  {
    "url": "/_nuxt/eb7641081ae357dc26eb.js",
    "revision": "ab7953dc2a2e2985f763189f1dbe3ac5"
  }
], {
  "cacheId": "quran-offline",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.precaching.precacheAndRoute(['/favicon.ico', '/favicon-32x32.png', '/favicon-96x96.png', '/icon-192x192.png', '/data/surah-info.json', '/data/surah/1.json', '/data/surah/2.json', '/data/surah/3.json', '/data/surah/4.json', '/data/surah/5.json', '/data/surah/6.json', '/data/surah/7.json', '/data/surah/8.json', '/data/surah/9.json', '/data/surah/10.json', '/data/surah/11.json', '/data/surah/12.json', '/data/surah/13.json', '/data/surah/14.json', '/data/surah/15.json', '/data/surah/16.json', '/data/surah/17.json', '/data/surah/18.json', '/data/surah/19.json', '/data/surah/20.json', '/data/surah/21.json', '/data/surah/22.json', '/data/surah/23.json', '/data/surah/24.json', '/data/surah/25.json', '/data/surah/26.json', '/data/surah/27.json', '/data/surah/28.json', '/data/surah/29.json', '/data/surah/30.json', '/data/surah/31.json', '/data/surah/32.json', '/data/surah/33.json', '/data/surah/34.json', '/data/surah/35.json', '/data/surah/36.json', '/data/surah/37.json', '/data/surah/38.json', '/data/surah/39.json', '/data/surah/40.json', '/data/surah/41.json', '/data/surah/42.json', '/data/surah/43.json', '/data/surah/44.json', '/data/surah/45.json', '/data/surah/46.json', '/data/surah/47.json', '/data/surah/48.json', '/data/surah/49.json', '/data/surah/50.json', '/data/surah/51.json', '/data/surah/52.json', '/data/surah/53.json', '/data/surah/54.json', '/data/surah/55.json', '/data/surah/56.json', '/data/surah/57.json', '/data/surah/58.json', '/data/surah/59.json', '/data/surah/60.json', '/data/surah/61.json', '/data/surah/62.json', '/data/surah/63.json', '/data/surah/64.json', '/data/surah/65.json', '/data/surah/66.json', '/data/surah/67.json', '/data/surah/68.json', '/data/surah/69.json', '/data/surah/70.json', '/data/surah/71.json', '/data/surah/72.json', '/data/surah/73.json', '/data/surah/74.json', '/data/surah/75.json', '/data/surah/76.json', '/data/surah/77.json', '/data/surah/78.json', '/data/surah/79.json', '/data/surah/80.json', '/data/surah/81.json', '/data/surah/82.json', '/data/surah/83.json', '/data/surah/84.json', '/data/surah/85.json', '/data/surah/86.json', '/data/surah/87.json', '/data/surah/88.json', '/data/surah/89.json', '/data/surah/90.json', '/data/surah/91.json', '/data/surah/92.json', '/data/surah/93.json', '/data/surah/94.json', '/data/surah/95.json', '/data/surah/96.json', '/data/surah/97.json', '/data/surah/98.json', '/data/surah/99.json', '/data/surah/100.json', '/data/surah/101.json', '/data/surah/102.json', '/data/surah/103.json', '/data/surah/104.json', '/data/surah/105.json', '/data/surah/106.json', '/data/surah/107.json', '/data/surah/108.json', '/data/surah/109.json', '/data/surah/110.json', '/data/surah/111.json', '/data/surah/112.json', '/data/surah/113.json', '/data/surah/114.json'])

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')