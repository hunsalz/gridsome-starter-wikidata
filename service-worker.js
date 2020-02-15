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
    "revision": "33ecd8e8af11bfc9840fb602bc2bcb55"
  },
  {
    "url": "/gridsome-starter-wikidata/404/index.html",
    "revision": "33ecd8e8af11bfc9840fb602bc2bcb55"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/css/0.styles.ec2040d0.css",
    "revision": "64f6af78febc4b6e6389e16eebb463bf"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/404/index.json",
    "revision": "783cf0dd25d3730a785111352a75a7e6"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/index.json",
    "revision": "0180c050b010c06a62a04b0e39362ed6"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1059211/index.json",
    "revision": "57f45865f6837ac525e95ad9ba007fd8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1142058/index.json",
    "revision": "e5e04c4facd82cec44d663dda3b32445"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q11935346/index.json",
    "revision": "1378604394e4e007d53e0ef8163b8c79"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1217213/index.json",
    "revision": "708233c3ad2bffbce7a158f035e6a5d7"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12418/index.json",
    "revision": "d08f3a6c922d8316438bfcf1e607516c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1267893/index.json",
    "revision": "db6847fc86b712371b287ddbbaf62104"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12734910/index.json",
    "revision": "90c6483d21ce1fbe796afd405eddb861"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q128910/index.json",
    "revision": "1c77e3edb8638df047d229651c91bb3d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1327676/index.json",
    "revision": "f11d709badecb1cff8c578bc207922fc"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1638622/index.json",
    "revision": "537e983dce5df0aceb20f59d05785bf5"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1892745/index.json",
    "revision": "2aa7e1c43855cdfd5f6fe0f12cb07620"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q20174114/index.json",
    "revision": "2982ce1616ee5483e20d0eea375813c3"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2045726/index.json",
    "revision": "2fa6744d7cc75362db7eeca354245192"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2072801/index.json",
    "revision": "5f4eb17401e9655fc0a5e245b2e7cf5f"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2338404/index.json",
    "revision": "67cb033b0f80937bb5e06cd4586cefbb"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2397593/index.json",
    "revision": "7aae0b4ec49223361e1fd4ea31cd66c6"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q27970282/index.json",
    "revision": "2de6684a966534a5703375b4ad168790"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3618186/index.json",
    "revision": "bb40c37469ab7d67bdb19cc5c028d273"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3800774/index.json",
    "revision": "185b1b67b6abf43625cc849fcc3117f4"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3937378/index.json",
    "revision": "e38215011ea439f660c15d21818bfe38"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3985169/index.json",
    "revision": "93af545eeb1182dcdaa2813126e93e2f"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4009972/index.json",
    "revision": "8eb54c705ac59dab1625ac4c2d4b5113"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4390923/index.json",
    "revision": "b06cf778ef07e0db3378e9e3ccf46338"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q474338/index.json",
    "revision": "f312b3a1ec4140cff9045ab13a2cf2c0"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q5237905/index.json",
    "revision": "33935107a2baf5d02fe0ac5ddb78b18f"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q56280397/index.json",
    "revision": "7c5983f1164c7ec7802789401cc72487"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q563727/index.json",
    "revision": "1884851e848e537110fd1a58bfdd5746"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q656434/index.json",
    "revision": "f376be33438a4ec11880134f79509108"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q6696013/index.json",
    "revision": "bf13782fa2cc8549561220a8d85a1cc6"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q698015/index.json",
    "revision": "4844087e570fb716c5f53b33f3983c13"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q783215/index.json",
    "revision": "fbe09d52b743823351157dd15fbe4975"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q797902/index.json",
    "revision": "52970269188dc63266fa6137b014a760"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q798034/index.json",
    "revision": "169cdedf0985c2910c966b7777af0e01"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q972196/index.json",
    "revision": "3adcc428ebaec250ed13319725a228c8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/app.f9aa0f31.js",
    "revision": "5018b1968e8807c2d52db130724e8e83"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--node-modules--gridsome--app--pages--404-vue.56704fa6.js",
    "revision": "bca3f9b66b03ee035f95b15440b269bb"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--src--pages--index-vue.9e7c99df.js",
    "revision": "6c68c015a4f7782b8fa0536e26815cee"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--src--templates--record-vue.46c518af.js",
    "revision": "948d0aa99f1aaeaaace65765c0e05f9f"
  },
  {
    "url": "/gridsome-starter-wikidata/index.html",
    "revision": "e8756edda35e99ab2aa2f758c73b29d1"
  },
  {
    "url": "/gridsome-starter-wikidata/manifest.json",
    "revision": "abdb2504518281d70ba2c785280ddc4b"
  },
  {
    "url": "/gridsome-starter-wikidata/q1059211/index.html",
    "revision": "203b9b819bf0256bb4e68da1dae7ea6d"
  },
  {
    "url": "/gridsome-starter-wikidata/q1142058/index.html",
    "revision": "e78b04e3aa4d09457a79c8534c26f2e8"
  },
  {
    "url": "/gridsome-starter-wikidata/q11935346/index.html",
    "revision": "88ff721a0487d6728c41db257574ec4b"
  },
  {
    "url": "/gridsome-starter-wikidata/q1217213/index.html",
    "revision": "2e2b13f76f4a400f8b900f5452cd1828"
  },
  {
    "url": "/gridsome-starter-wikidata/q12418/index.html",
    "revision": "80aa7e43564654a5c9a3d66cec0d2389"
  },
  {
    "url": "/gridsome-starter-wikidata/q1267893/index.html",
    "revision": "3cea7a876b33748dae76fe66afc00254"
  },
  {
    "url": "/gridsome-starter-wikidata/q12734910/index.html",
    "revision": "5a5baf5f5751117fb600a91610f22ab1"
  },
  {
    "url": "/gridsome-starter-wikidata/q128910/index.html",
    "revision": "ee783925154614a7a161ce6f97b6a04b"
  },
  {
    "url": "/gridsome-starter-wikidata/q1327676/index.html",
    "revision": "05966d21ac2feccbfe205ad339e5ba9a"
  },
  {
    "url": "/gridsome-starter-wikidata/q1638622/index.html",
    "revision": "bf23f5d48d744bc821e06d439c3436e6"
  },
  {
    "url": "/gridsome-starter-wikidata/q1892745/index.html",
    "revision": "1ba5c9ca4aacc84e57fb5d210a28cf3c"
  },
  {
    "url": "/gridsome-starter-wikidata/q20174114/index.html",
    "revision": "9b4577a85a9b10881a5675a2712b9fea"
  },
  {
    "url": "/gridsome-starter-wikidata/q2045726/index.html",
    "revision": "19d3b790667c3948f6936ee1b14e5321"
  },
  {
    "url": "/gridsome-starter-wikidata/q2072801/index.html",
    "revision": "3c807174050db756dd2de10c9b404d67"
  },
  {
    "url": "/gridsome-starter-wikidata/q2338404/index.html",
    "revision": "cafe988c1b5c2071bad6a7f2dd4a22bd"
  },
  {
    "url": "/gridsome-starter-wikidata/q2397593/index.html",
    "revision": "ded9d1236a143cabc82251e4294a4703"
  },
  {
    "url": "/gridsome-starter-wikidata/q27970282/index.html",
    "revision": "c2157ba025ddbd02ff1d19aaeb8c05f1"
  },
  {
    "url": "/gridsome-starter-wikidata/q3618186/index.html",
    "revision": "6d18dddabf7435f1a1d3f95dabc59e5d"
  },
  {
    "url": "/gridsome-starter-wikidata/q3800774/index.html",
    "revision": "8775f9eddc58ca0af8189ea56a80a8c8"
  },
  {
    "url": "/gridsome-starter-wikidata/q3937378/index.html",
    "revision": "57f0f552e7cba4e7817f37142aa0a75a"
  },
  {
    "url": "/gridsome-starter-wikidata/q3985169/index.html",
    "revision": "4571fc5b9d08adaab74b3251b11d49e0"
  },
  {
    "url": "/gridsome-starter-wikidata/q4009972/index.html",
    "revision": "c875a00a30a7ad0671332c4a9d0ee78e"
  },
  {
    "url": "/gridsome-starter-wikidata/q4390923/index.html",
    "revision": "acbf0081f2c4bfc72bb1b19b78bd7267"
  },
  {
    "url": "/gridsome-starter-wikidata/q474338/index.html",
    "revision": "29ef52549810f0a1f8997eb635e20a97"
  },
  {
    "url": "/gridsome-starter-wikidata/q5237905/index.html",
    "revision": "38cc483208872b94e082c8c6fc758de3"
  },
  {
    "url": "/gridsome-starter-wikidata/q56280397/index.html",
    "revision": "97b3e82859505299b70fd99aaa8e2220"
  },
  {
    "url": "/gridsome-starter-wikidata/q563727/index.html",
    "revision": "a1ea00127d7ab3854aeb1cc418171338"
  },
  {
    "url": "/gridsome-starter-wikidata/q656434/index.html",
    "revision": "d95c60dc0e6e48155b5e9d61af6e0ea6"
  },
  {
    "url": "/gridsome-starter-wikidata/q6696013/index.html",
    "revision": "4e22de6c721fb603d2e6e173b3bad28c"
  },
  {
    "url": "/gridsome-starter-wikidata/q698015/index.html",
    "revision": "9c20ebbe4966caa90f2f68ca0c0ec8dc"
  },
  {
    "url": "/gridsome-starter-wikidata/q783215/index.html",
    "revision": "94105e47cb6cfd2ba2c05e92f2b1f4a5"
  },
  {
    "url": "/gridsome-starter-wikidata/q797902/index.html",
    "revision": "a483104cd89dda17bfdb064db07310c0"
  },
  {
    "url": "/gridsome-starter-wikidata/q798034/index.html",
    "revision": "0a939887839d06e489fa353a69ac60fd"
  },
  {
    "url": "/gridsome-starter-wikidata/q972196/index.html",
    "revision": "a7a151fb0a62899f8da5c45c4a29f573"
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
    "url": "/gridsome-starter-wikidata/q1142058",
    "revision": "4c50c91dc581d5df06e87f98ef0a6b27"
  },
  {
    "url": "/gridsome-starter-wikidata/q1638622",
    "revision": "9eac4e83cf0cbfb8505cafc3bab1483a"
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
    "url": "/gridsome-starter-wikidata/q1327676",
    "revision": "7c226ea1aea779f246c740161461807e"
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
    "url": "/gridsome-starter-wikidata/q1892745",
    "revision": "9f049e3e17f79d56cd0e7c60743ac854"
  },
  {
    "url": "/gridsome-starter-wikidata/q128910",
    "revision": "d63cdd3db35eae7890c24435d4a2bbd0"
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