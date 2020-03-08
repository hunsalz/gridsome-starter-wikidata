/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/gridsome-starter-wikidata/404.html",
    "revision": "87f7a3eb37ad93fc075c05ef224c0171"
  },
  {
    "url": "/gridsome-starter-wikidata/404/index.html",
    "revision": "87f7a3eb37ad93fc075c05ef224c0171"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/css/0.styles.9c8f1f53.css",
    "revision": "6a13fb0f4d9f02016a851bd4211aacfe"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/404/index.json",
    "revision": "0cdaf551f1609c96f2f25fedec9b1b85"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/index.json",
    "revision": "2aa9737da585402831fa7630202bafc8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1059211/index.json",
    "revision": "99f478c201745bf0bc9720d3e228245b"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1217213/index.json",
    "revision": "52ea4913bc60b6fa4d64ec13f45f95a8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1267893/index.json",
    "revision": "31aa588fa99d1b7ee5f7505a0340a87e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q20174114/index.json",
    "revision": "7fd53fb4a9a85969b422302d2a5afc4c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3618186/index.json",
    "revision": "c3c1456e65cd1ad36e40d2a5b913739c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/app.3bdd5818.js",
    "revision": "95d6cc6f92f813a8933f784ccc31ec79"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--node-modules--gridsome--app--pages--404-vue.d8e97352.js",
    "revision": "9f7db538505cf350b781f4a2de0f7ed0"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--src--pages--index-vue.a2edc98e.js",
    "revision": "b37e22c4b51ec25446ec48907609a20b"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--src--templates--record-vue.1f85a261.js",
    "revision": "61c6e756b124ef16f3c5f075b687e001"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/vendors~page--src--pages--index-vue.34535da8.js",
    "revision": "b0fa3efddf7727e918a2c388ddee9ef9"
  },
  {
    "url": "/gridsome-starter-wikidata/index.html",
    "revision": "4ba84ef154c26b2aaf985d2ff8566a64"
  },
  {
    "url": "/gridsome-starter-wikidata/manifest.json",
    "revision": "c4c4fdca57559c564290c246088b8d1f"
  },
  {
    "url": "/gridsome-starter-wikidata/q1059211/index.html",
    "revision": "33d9d905071fa1afb5797175130000d2"
  },
  {
    "url": "/gridsome-starter-wikidata/q1217213/index.html",
    "revision": "4e4381a83509842ca0fb9ba6dd92484c"
  },
  {
    "url": "/gridsome-starter-wikidata/q1267893/index.html",
    "revision": "73956ba7bf5689c5a49613f5a97fcdc2"
  },
  {
    "url": "/gridsome-starter-wikidata/q20174114/index.html",
    "revision": "945e0af6599f6af37a45989a2584d3f4"
  },
  {
    "url": "/gridsome-starter-wikidata/q3618186/index.html",
    "revision": "2ddf8ee70ba8af65a9d92128a7133be5"
  },
  {
    "url": "/gridsome-starter-wikidata/404",
    "revision": "28f25f53f5ce5d7c39f9df9ad1964986"
  },
  {
    "url": "/gridsome-starter-wikidata/q1059211",
    "revision": "5d99b2d44a4de1969ffff94125567cf5"
  },
  {
    "url": "/gridsome-starter-wikidata/q1217213",
    "revision": "328b5cb2076ff5078af91e1b507bd988"
  },
  {
    "url": "/gridsome-starter-wikidata/q1267893",
    "revision": "6e93c670a34709ac579d8b2219968f71"
  },
  {
    "url": "/gridsome-starter-wikidata/q20174114",
    "revision": "b7fba519e2a0d960b43bcb9cee2a60a2"
  },
  {
    "url": "/gridsome-starter-wikidata/q3618186",
    "revision": "d3680962cc5a0a3a27f24a6e0568492f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})