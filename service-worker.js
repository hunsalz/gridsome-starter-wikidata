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
    "revision": "ac684d1f7170ba66db691b1f7eb359f3"
  },
  {
    "url": "/gridsome-starter-wikidata/404/index.html",
    "revision": "ac684d1f7170ba66db691b1f7eb359f3"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/css/0.styles.eb1dd192.css",
    "revision": "63b862ad7d6dde3f60f9ddc30f57722c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/404/index.json",
    "revision": "48c6dce89a1e6a668c4e0d945e481f1e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/index.json",
    "revision": "02e3f5afedbea496d3a5e9079dc6e618"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1059211/index.json",
    "revision": "18eb29d526719346bcd1ea786918d235"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1142058/index.json",
    "revision": "8c52bf75d84f73c1abf43356e62e3423"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q11935346/index.json",
    "revision": "4adc899a42031bcd763bacbbc494a5fb"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1217213/index.json",
    "revision": "c4e959b841d47d5ac91486f95b4ec5a3"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12418/index.json",
    "revision": "2d472029528e55069ba263e1164ab3c6"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1267893/index.json",
    "revision": "87336d3ca93491a7ecab9fff410f640d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12734910/index.json",
    "revision": "2c2c63ada0c966b377cec538d5b7227a"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q128910/index.json",
    "revision": "af024e548b93f156058da7a3f9acbaee"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1327676/index.json",
    "revision": "2d7b900723517a8690bb67d0db5f6d25"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1638622/index.json",
    "revision": "67e8e5476bf5b73f022241ccb642982a"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1892745/index.json",
    "revision": "1d943423bdedd75e87d68a6f8a3554c3"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q20174114/index.json",
    "revision": "a07b0ba389a22720f00ba96a9cc98147"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2045726/index.json",
    "revision": "73fd4964543e17a8dcccd7c04c729fbd"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2072801/index.json",
    "revision": "29c80734aec7edab7bd6713038b954ba"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2338404/index.json",
    "revision": "ecae67238f8f6b0bb01814f5a7b76250"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2397593/index.json",
    "revision": "c943ee56af0e97d86baeef734edb00b8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q27970282/index.json",
    "revision": "41859393eaa99416287cb084dee1f35a"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3618186/index.json",
    "revision": "ed6f390598ebe88e643030dca6dedd79"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3800774/index.json",
    "revision": "9cee0e605b36d3189e2377fa43e7d10e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3937378/index.json",
    "revision": "ea6652e458ebbd69eb182acdf9863569"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3985169/index.json",
    "revision": "718b3cc7eabfe3d9b9007d47cfe3cd3a"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4009972/index.json",
    "revision": "b745d699c7d7779aa59392c2cda1e753"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4390923/index.json",
    "revision": "3510680c1f45c4c2aa4e755082ce7d77"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q474338/index.json",
    "revision": "9bf6ce0890dc3009a35bbe84dbf8affe"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q5237905/index.json",
    "revision": "3dbeeadab9f688db91845a27691a0ef8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q56280397/index.json",
    "revision": "72f7321ae293803ce34cbb17639ca6fc"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q563727/index.json",
    "revision": "19de7e8cd4c27a4d16d98a7f6d895e29"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q656434/index.json",
    "revision": "7ecd9d13e666b3eabe7839b17e72594c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q6696013/index.json",
    "revision": "1ed37b0bca85d5807dc4f52c3daf42a2"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q698015/index.json",
    "revision": "7e361def23e68be2b5bfef2d3e1a114e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q783215/index.json",
    "revision": "2b9abe0a957646d3167507fa311d021e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q797902/index.json",
    "revision": "f7becc0813a01711bb92d1dfb61f7384"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q798034/index.json",
    "revision": "cb048922f50628b690c55b3fe023e519"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q972196/index.json",
    "revision": "c52a917da4ccd5d757618b57709e3814"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/app.89c1d549.js",
    "revision": "ec72c3ac8ce1dcc246190ec9e0efd614"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--node-modules--gridsome--app--pages--404-vue.3035ba19.js",
    "revision": "ed05a2c3b49281e2fa697ac2b8f0c24d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--src--pages--index-vue.bd6eff27.js",
    "revision": "434caed9592346dd229ca96d98691370"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--src--templates--painting-vue.e8629075.js",
    "revision": "e4f85d66b2b265850afef1c12d19c427"
  },
  {
    "url": "/gridsome-starter-wikidata/index.html",
    "revision": "e7fb5d30631715cf98b5166beaebe6f5"
  },
  {
    "url": "/gridsome-starter-wikidata/manifest.json",
    "revision": "c4c4fdca57559c564290c246088b8d1f"
  },
  {
    "url": "/gridsome-starter-wikidata/q1059211/index.html",
    "revision": "b0daa3d01c1b70e460da53e7b22b9d66"
  },
  {
    "url": "/gridsome-starter-wikidata/q1142058/index.html",
    "revision": "e6bb712f6a0a6c99264d276af64239e2"
  },
  {
    "url": "/gridsome-starter-wikidata/q11935346/index.html",
    "revision": "c6471c6fc35098ce023abc68b0593f0a"
  },
  {
    "url": "/gridsome-starter-wikidata/q1217213/index.html",
    "revision": "6844033acb0cb226c3c5e4e9d6648b82"
  },
  {
    "url": "/gridsome-starter-wikidata/q12418/index.html",
    "revision": "e3b22024135b3e37fd9d065062c5c7cd"
  },
  {
    "url": "/gridsome-starter-wikidata/q1267893/index.html",
    "revision": "b6873aa831b2922c97a132b567430169"
  },
  {
    "url": "/gridsome-starter-wikidata/q12734910/index.html",
    "revision": "ea3a2cb5d47b444d9f836c034aa95c6a"
  },
  {
    "url": "/gridsome-starter-wikidata/q128910/index.html",
    "revision": "c5a6622d24e44d56d304d12a8d2024e2"
  },
  {
    "url": "/gridsome-starter-wikidata/q1327676/index.html",
    "revision": "ae05e38cbf8f9816d957576de4a79ec3"
  },
  {
    "url": "/gridsome-starter-wikidata/q1638622/index.html",
    "revision": "0a3e9fd33c315706528b1113b5924a4c"
  },
  {
    "url": "/gridsome-starter-wikidata/q1892745/index.html",
    "revision": "c75ef843236633c87a8d4c454b132ffc"
  },
  {
    "url": "/gridsome-starter-wikidata/q20174114/index.html",
    "revision": "f9e1f62f1abb104e4f7d6260cb569c03"
  },
  {
    "url": "/gridsome-starter-wikidata/q2045726/index.html",
    "revision": "27134af021c9299246dfec7ea11f14dc"
  },
  {
    "url": "/gridsome-starter-wikidata/q2072801/index.html",
    "revision": "e69dda7f739f2bbc1cb23b6d5d814bc3"
  },
  {
    "url": "/gridsome-starter-wikidata/q2338404/index.html",
    "revision": "743a7a3e743ec342ebe3653c117312b7"
  },
  {
    "url": "/gridsome-starter-wikidata/q2397593/index.html",
    "revision": "d4b3b7d66943c2d40f0252cf0276933d"
  },
  {
    "url": "/gridsome-starter-wikidata/q27970282/index.html",
    "revision": "044d81e248e7e94640832c6ec1b3498d"
  },
  {
    "url": "/gridsome-starter-wikidata/q3618186/index.html",
    "revision": "2e972871350f0f452a01ab04f02981ac"
  },
  {
    "url": "/gridsome-starter-wikidata/q3800774/index.html",
    "revision": "0f3bde06a304b8279b24977cd89a7991"
  },
  {
    "url": "/gridsome-starter-wikidata/q3937378/index.html",
    "revision": "6519727778d24549ee9aae650562e276"
  },
  {
    "url": "/gridsome-starter-wikidata/q3985169/index.html",
    "revision": "d422f4ddc0295d0c59206064d9910205"
  },
  {
    "url": "/gridsome-starter-wikidata/q4009972/index.html",
    "revision": "7bbf31f123721da319c5f1ec87a0c9ac"
  },
  {
    "url": "/gridsome-starter-wikidata/q4390923/index.html",
    "revision": "6a1bfba3212a0fd35fcbd2b25a4082e4"
  },
  {
    "url": "/gridsome-starter-wikidata/q474338/index.html",
    "revision": "1457ca221326ebc20c431ad197c226d0"
  },
  {
    "url": "/gridsome-starter-wikidata/q5237905/index.html",
    "revision": "5dc91ef03578e80774d8a815d5c59e8d"
  },
  {
    "url": "/gridsome-starter-wikidata/q56280397/index.html",
    "revision": "711143c01fdd828d6cef19c5914949c2"
  },
  {
    "url": "/gridsome-starter-wikidata/q563727/index.html",
    "revision": "5613b8e57055ac42296ad10305e5981b"
  },
  {
    "url": "/gridsome-starter-wikidata/q656434/index.html",
    "revision": "4da535369cb5283f0f11502ba7cd1924"
  },
  {
    "url": "/gridsome-starter-wikidata/q6696013/index.html",
    "revision": "0ebf3b3bcad6debf3717c14f1b5e1479"
  },
  {
    "url": "/gridsome-starter-wikidata/q698015/index.html",
    "revision": "5a44bfaf9401a0ac95a4c5aefab96954"
  },
  {
    "url": "/gridsome-starter-wikidata/q783215/index.html",
    "revision": "94a7d2fb7c81baa7958367349086ca43"
  },
  {
    "url": "/gridsome-starter-wikidata/q797902/index.html",
    "revision": "d45bd003194dcce828e6c8666ca3222f"
  },
  {
    "url": "/gridsome-starter-wikidata/q798034/index.html",
    "revision": "0e20036fae18e35f12c74ab0e3bfdd69"
  },
  {
    "url": "/gridsome-starter-wikidata/q972196/index.html",
    "revision": "4b2b73697c69d8a593bf8952cf672f8e"
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
    "url": "/gridsome-starter-wikidata/q563727",
    "revision": "d9097dc764b342fbc3560e7f065c03c5"
  },
  {
    "url": "/gridsome-starter-wikidata/q2397593",
    "revision": "54082bddaf866a72c6cb8ff4147311ef"
  },
  {
    "url": "/gridsome-starter-wikidata/q12418",
    "revision": "9acdeb79612716f57e4590d2447c4911"
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