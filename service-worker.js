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
    "revision": "f07722ff0d8cd62390a8d247e5e2cb7c"
  },
  {
    "url": "/gridsome-starter-wikidata/404/index.html",
    "revision": "f07722ff0d8cd62390a8d247e5e2cb7c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/css/0.styles.24606c44.css",
    "revision": "3962034ace9ea90ddacaf77762f0169b"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/404/index.json",
    "revision": "160aaf87766abe8a09f17a0740277910"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/index.json",
    "revision": "b741ad6cb5cfa6134625202a9454a2ba"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1059211/index.json",
    "revision": "74b5dbab00c90728989efc52624aca56"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1142058/index.json",
    "revision": "d6b3474f1158374a81b06b455d1de561"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q11935346/index.json",
    "revision": "9c49b9204a891c23d40a5604c9f6cc2d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1217213/index.json",
    "revision": "0c3f51bd52d2f2cee8614edef7a10691"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12418/index.json",
    "revision": "98532aa94c49ed3bbfab9ce0dc267e51"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1267893/index.json",
    "revision": "7e0fdbe43dca0d63238f0507f465fa24"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12734910/index.json",
    "revision": "6b817266d544d561e470739e68283e65"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q128910/index.json",
    "revision": "4b5def9013d769bfdfbf08631828e29d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1327676/index.json",
    "revision": "16ca317656423cb3e827c1db9e07c181"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1638622/index.json",
    "revision": "5e134d293f3e52fcd1669c497235782e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1892745/index.json",
    "revision": "1d10a5abf2e9d1de005e8bc554e6edc0"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q20174114/index.json",
    "revision": "7265e57bfedbdb7994ae9eb58bebf0cb"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2045726/index.json",
    "revision": "e6e2eb0da46ab10630da427759ca83e9"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2072801/index.json",
    "revision": "934321e3b42d381b11d200ad2765b5fd"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2338404/index.json",
    "revision": "cd84fa3158c25c05793fbdf7be1e23d6"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2397593/index.json",
    "revision": "d6abba87b51faaa711916520fe8f3035"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q27970282/index.json",
    "revision": "47e6d02bf7b67d5b4ee9d82fbb085086"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3618186/index.json",
    "revision": "836cf5d063486bdee952292449a6a813"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3800774/index.json",
    "revision": "e3567d988d29a81d4beb6d39a0730fa5"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3937378/index.json",
    "revision": "0062eef3166fb8dd407a67bde401191d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3985169/index.json",
    "revision": "0ac68b6cd893c1a5d4d8cf1d46539ccd"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4009972/index.json",
    "revision": "a2bf69307baaf567890971bf3f760a8d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4390923/index.json",
    "revision": "54c37eb5872c63f8c4ca7632d98bfe88"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q474338/index.json",
    "revision": "73b22c8a52b28fd327154b790ae433f8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q5237905/index.json",
    "revision": "2a03204a0d62701778e3bf3d7535c4c7"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q56280397/index.json",
    "revision": "a883b15f03791298f4a9a8637f6b3e08"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q563727/index.json",
    "revision": "618f582cfa7f6bb3aa84df2ef9a37293"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q656434/index.json",
    "revision": "fe8bace2af675be28bb06c8d07f452ce"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q6696013/index.json",
    "revision": "4b3bc82f6c2a101113707d4ed712f8e0"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q698015/index.json",
    "revision": "477a4b56a6105529bc181da257088238"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q783215/index.json",
    "revision": "df204f99f3a307e815a127295db1c5e7"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q797902/index.json",
    "revision": "57d87bd716a96e5f58d298b430c41ff3"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q798034/index.json",
    "revision": "b5c14515f5ba91ced15b3f870f5b375f"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q972196/index.json",
    "revision": "9a7d76eee9758af2578aceab9b8162cd"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/app.d8ebb705.js",
    "revision": "65cfb2fe4b7b04de39fdc4b2d51441e2"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--node-modules--gridsome--app--pages--404-vue.d8e97352.js",
    "revision": "9f7db538505cf350b781f4a2de0f7ed0"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--src--pages--index-vue.51bacb62.js",
    "revision": "8577bf5f9350b1a8cdc291ddad7de69b"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--src--templates--painting-vue.701d9ed7.js",
    "revision": "e1098fc4d9834bcfa0cbd7cb123bd04f"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/vendors~page--src--pages--index-vue.34535da8.js",
    "revision": "b0fa3efddf7727e918a2c388ddee9ef9"
  },
  {
    "url": "/gridsome-starter-wikidata/index.html",
    "revision": "26a7c60ae47f9b170fb1e6e266b25af3"
  },
  {
    "url": "/gridsome-starter-wikidata/manifest.json",
    "revision": "c4c4fdca57559c564290c246088b8d1f"
  },
  {
    "url": "/gridsome-starter-wikidata/q1059211/index.html",
    "revision": "ac260ea447efd3c6310547a88fb6e4ee"
  },
  {
    "url": "/gridsome-starter-wikidata/q1142058/index.html",
    "revision": "f374b66ad4804eac462530b1a8b8190b"
  },
  {
    "url": "/gridsome-starter-wikidata/q11935346/index.html",
    "revision": "43b6ad28c02e408870a938f673900d83"
  },
  {
    "url": "/gridsome-starter-wikidata/q1217213/index.html",
    "revision": "3c22390940c5e38a63e5bbd0e37b7298"
  },
  {
    "url": "/gridsome-starter-wikidata/q12418/index.html",
    "revision": "3b1abaac54b5c40a3b8bb1f1ac64dcfe"
  },
  {
    "url": "/gridsome-starter-wikidata/q1267893/index.html",
    "revision": "d8d180f479449b392762c5685789903c"
  },
  {
    "url": "/gridsome-starter-wikidata/q12734910/index.html",
    "revision": "9a1f230bba0a89d7572e4e0230cbe44a"
  },
  {
    "url": "/gridsome-starter-wikidata/q128910/index.html",
    "revision": "ddb1334f458aa75070e84b85b78dbf25"
  },
  {
    "url": "/gridsome-starter-wikidata/q1327676/index.html",
    "revision": "8ff6299ba51ad2c2c802eae7b1daba82"
  },
  {
    "url": "/gridsome-starter-wikidata/q1638622/index.html",
    "revision": "b9867281713940dbda45fc3a3226edd7"
  },
  {
    "url": "/gridsome-starter-wikidata/q1892745/index.html",
    "revision": "8545a428ce9c33bdc355e06b75713896"
  },
  {
    "url": "/gridsome-starter-wikidata/q20174114/index.html",
    "revision": "4506f6ac7ed73267321efdcd00e55a9f"
  },
  {
    "url": "/gridsome-starter-wikidata/q2045726/index.html",
    "revision": "235b385cafb7582fcfa7878fa274f677"
  },
  {
    "url": "/gridsome-starter-wikidata/q2072801/index.html",
    "revision": "09ba89790d4949c767f05243c7384409"
  },
  {
    "url": "/gridsome-starter-wikidata/q2338404/index.html",
    "revision": "b308faabfc7f271e14987ae119b2fe91"
  },
  {
    "url": "/gridsome-starter-wikidata/q2397593/index.html",
    "revision": "51e0ee07a5b8b9755191c7dc65fa3605"
  },
  {
    "url": "/gridsome-starter-wikidata/q27970282/index.html",
    "revision": "75bcd1c68b93306e0735c5aaa6bf304e"
  },
  {
    "url": "/gridsome-starter-wikidata/q3618186/index.html",
    "revision": "0f28bb561bb770d5e1db83a2d8c6420b"
  },
  {
    "url": "/gridsome-starter-wikidata/q3800774/index.html",
    "revision": "b89baf450fb56f36398d791764828b36"
  },
  {
    "url": "/gridsome-starter-wikidata/q3937378/index.html",
    "revision": "3cd0641e850a8428e97d711c0c848588"
  },
  {
    "url": "/gridsome-starter-wikidata/q3985169/index.html",
    "revision": "57826335b1a6953bfb108617d7fe918d"
  },
  {
    "url": "/gridsome-starter-wikidata/q4009972/index.html",
    "revision": "4cab5d27b3232611fc16306422937924"
  },
  {
    "url": "/gridsome-starter-wikidata/q4390923/index.html",
    "revision": "0998fe6b5240ec1c3f40d0f116e8196e"
  },
  {
    "url": "/gridsome-starter-wikidata/q474338/index.html",
    "revision": "675be198636d7915e9fcacb546ef843b"
  },
  {
    "url": "/gridsome-starter-wikidata/q5237905/index.html",
    "revision": "69deb3b751a18436fc1e28330d39ad09"
  },
  {
    "url": "/gridsome-starter-wikidata/q56280397/index.html",
    "revision": "2faef0f4afb9ead5d1b585f1a97b0e97"
  },
  {
    "url": "/gridsome-starter-wikidata/q563727/index.html",
    "revision": "147e7e1393ff3f1d382d46701f30f0af"
  },
  {
    "url": "/gridsome-starter-wikidata/q656434/index.html",
    "revision": "cc8aa98e722067eff17f475898d4abf4"
  },
  {
    "url": "/gridsome-starter-wikidata/q6696013/index.html",
    "revision": "a9fca96c73364ccf250a398bb12242b5"
  },
  {
    "url": "/gridsome-starter-wikidata/q698015/index.html",
    "revision": "63cf9d30edbac21201808830862b3280"
  },
  {
    "url": "/gridsome-starter-wikidata/q783215/index.html",
    "revision": "729f7a45412fa950058bd52735a0b61a"
  },
  {
    "url": "/gridsome-starter-wikidata/q797902/index.html",
    "revision": "b054aea6cada67c836e5358e2a53b3bb"
  },
  {
    "url": "/gridsome-starter-wikidata/q798034/index.html",
    "revision": "8c5f41f340147505fb055fb93aa7d253"
  },
  {
    "url": "/gridsome-starter-wikidata/q972196/index.html",
    "revision": "65d45e4fb785aa03a4456f98c931a67f"
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
  },
  {
    "url": "/gridsome-starter-wikidata/q698015",
    "revision": "0ee232afa94211ea95766d6e12ce86de"
  },
  {
    "url": "/gridsome-starter-wikidata/q1638622",
    "revision": "9eac4e83cf0cbfb8505cafc3bab1483a"
  },
  {
    "url": "/gridsome-starter-wikidata/q1142058",
    "revision": "4c50c91dc581d5df06e87f98ef0a6b27"
  },
  {
    "url": "/gridsome-starter-wikidata/q972196",
    "revision": "587cb71bdfd0bd90fca4c0842d985cb5"
  },
  {
    "url": "/gridsome-starter-wikidata/q11935346",
    "revision": "cd69bb8cf3cba2981df31bb2fd921b32"
  },
  {
    "url": "/gridsome-starter-wikidata/q2338404",
    "revision": "b201cbb95f8aa739ee562dce31b5cd55"
  },
  {
    "url": "/gridsome-starter-wikidata/q5237905",
    "revision": "1259a7960f42aee0769dd4e70af1638f"
  },
  {
    "url": "/gridsome-starter-wikidata/q128910",
    "revision": "d63cdd3db35eae7890c24435d4a2bbd0"
  },
  {
    "url": "/gridsome-starter-wikidata/q1327676",
    "revision": "7c226ea1aea779f246c740161461807e"
  },
  {
    "url": "/gridsome-starter-wikidata/q1892745",
    "revision": "9f049e3e17f79d56cd0e7c60743ac854"
  },
  {
    "url": "/gridsome-starter-wikidata/q474338",
    "revision": "c7ce3b4eac6acb1622c972b26b96596f"
  },
  {
    "url": "/gridsome-starter-wikidata/q656434",
    "revision": "194e099b257765ea13fa7c6dc59a504b"
  },
  {
    "url": "/gridsome-starter-wikidata/q3985169",
    "revision": "2a01debba58fcae88aa675c37c2dcc76"
  },
  {
    "url": "/gridsome-starter-wikidata/q4009972",
    "revision": "cb8d455908504cffa0fae3754d237dc8"
  },
  {
    "url": "/gridsome-starter-wikidata/q2072801",
    "revision": "3547073f75c2d2b18b00347bbc4970cf"
  },
  {
    "url": "/gridsome-starter-wikidata/q3937378",
    "revision": "d934beb4c9b92eaba5dc102da61d32b5"
  },
  {
    "url": "/gridsome-starter-wikidata/q3800774",
    "revision": "dc4aafcb34a78d049cc3852041d5dbc3"
  },
  {
    "url": "/gridsome-starter-wikidata/q27970282",
    "revision": "1cf7f7bd18abb76bd53b3c8167012116"
  },
  {
    "url": "/gridsome-starter-wikidata/q4390923",
    "revision": "654946132f84cf2af28804fc8887e70d"
  },
  {
    "url": "/gridsome-starter-wikidata/q12418",
    "revision": "9acdeb79612716f57e4590d2447c4911"
  },
  {
    "url": "/gridsome-starter-wikidata/q563727",
    "revision": "d9097dc764b342fbc3560e7f065c03c5"
  },
  {
    "url": "/gridsome-starter-wikidata/q2397593",
    "revision": "54082bddaf866a72c6cb8ff4147311ef"
  },
  {
    "url": "/gridsome-starter-wikidata/q2045726",
    "revision": "9109c5e405e853dd80e2b931e967be69"
  },
  {
    "url": "/gridsome-starter-wikidata/q6696013",
    "revision": "c33c2b7a0d895a487085988f5e2b5709"
  },
  {
    "url": "/gridsome-starter-wikidata/q797902",
    "revision": "0721b2ce19b9692c88233b780fd48130"
  },
  {
    "url": "/gridsome-starter-wikidata/q56280397",
    "revision": "fc176f87f8d09fd845b116178569db11"
  },
  {
    "url": "/gridsome-starter-wikidata/q783215",
    "revision": "8bdf6360f8ab61de495885895b6a2ff0"
  },
  {
    "url": "/gridsome-starter-wikidata/q798034",
    "revision": "2f4b56199ee6b174a8ce37d09e09116d"
  },
  {
    "url": "/gridsome-starter-wikidata/q12734910",
    "revision": "4164d3b82965206566a26dce5839f7dc"
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