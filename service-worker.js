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
    "revision": "b050d1be2e79f4f7a64f551d01230a1b"
  },
  {
    "url": "/gridsome-starter-wikidata/404/index.html",
    "revision": "b050d1be2e79f4f7a64f551d01230a1b"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/css/0.styles.f549b303.css",
    "revision": "05c0d22cdb57ce8626e3a2d59c792f71"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/404/index.json",
    "revision": "23ba40482a43046b709b2b2bf25c2638"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/index.json",
    "revision": "8f893ef3137b01e0ac8f4367b0210ebd"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1059211/index.json",
    "revision": "7d5b92534077a9ebe697579f53b66402"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1142058/index.json",
    "revision": "ff7a6a2fc8b2ca2aa530c8fd2dfd77a6"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q11935346/index.json",
    "revision": "1030a0c42f6eaac7e24b1bd6e30dffa0"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1217213/index.json",
    "revision": "8c0626b8646f78c046e8aaac40355bbc"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12418/index.json",
    "revision": "8d55ddcaf8fb782647900a6eb6bce5f2"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1267893/index.json",
    "revision": "dc791e20f5948a7a1d243847a30bcae1"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12734910/index.json",
    "revision": "85fe16269a0915e46d35aaf8809cf2ec"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q128910/index.json",
    "revision": "cb538e18f9247be8373cd2e5b4c58ffa"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1327676/index.json",
    "revision": "46880229907498ec9e9f55e3f17cdbe4"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1638622/index.json",
    "revision": "5341c52b095fdd0b601f62e0f5f358f7"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1892745/index.json",
    "revision": "aece5d19b0f634b30ddbcd4b6ad8a6b3"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q20174114/index.json",
    "revision": "a808e7a5bc9e722c28a352244fd2a187"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2045726/index.json",
    "revision": "d6c29715eebdf1ce5a5d2001ab355a3d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2072801/index.json",
    "revision": "bdd0879c19018f2777db79029dcc3c50"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2338404/index.json",
    "revision": "9a8b990e8c14f86092fe98404775dc87"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2397593/index.json",
    "revision": "f73c6aef968671d5d5692516f7b59835"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q27970282/index.json",
    "revision": "e7553b57ac2c1ded51b1eaa83145de1c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3618186/index.json",
    "revision": "accdca6cbbaf53552d00f24282c5a584"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3800774/index.json",
    "revision": "524aad86fefd7545630029092c0cc8ae"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3937378/index.json",
    "revision": "9223095c6f8eccabee5a92fa666e47c8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3985169/index.json",
    "revision": "568b4b30d2bbbd4f84a4e19b8652da27"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4009972/index.json",
    "revision": "2fb257e28a77af74bbe76ae338813d54"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4390923/index.json",
    "revision": "bf0531a9e6d71562424d3b28cd2ea8a4"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q474338/index.json",
    "revision": "44437bbcf39f965cbe21e2c05265cd7b"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q5237905/index.json",
    "revision": "fd9ef4afb6519dc95b8513f860e7f7d2"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q56280397/index.json",
    "revision": "89ba9c3cc15fbdc7f4e3d416e1a167ab"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q563727/index.json",
    "revision": "025f64b5044708059b7b4fe468d90292"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q656434/index.json",
    "revision": "3912caa54603bc6048004ca330b2e3f9"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q6696013/index.json",
    "revision": "6ab822fe5ddff293e675ec1c539ad205"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q698015/index.json",
    "revision": "0ac2f93eb05df9593415efb1538af6fc"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q783215/index.json",
    "revision": "a2a0e3aacce4a379f952b457ab504f1f"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q797902/index.json",
    "revision": "3d237ef9b15c06e81d4a0e4fbccce755"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q798034/index.json",
    "revision": "dc74d49bbda907cfd41c3978b4cc6794"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q972196/index.json",
    "revision": "0e4c52ea7556cd4de5d53382056ab607"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/app.8fac54e7.js",
    "revision": "02f5e2094fdf683bef7f1b33a81d694c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--node-modules--gridsome--app--pages--404-vue.3035ba19.js",
    "revision": "ed05a2c3b49281e2fa697ac2b8f0c24d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--src--pages--index-vue.5351f01e.js",
    "revision": "434caed9592346dd229ca96d98691370"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--src--templates--painting-vue.e8629075.js",
    "revision": "e4f85d66b2b265850afef1c12d19c427"
  },
  {
    "url": "/gridsome-starter-wikidata/index.html",
    "revision": "aa3fdb1733a0cdac9bc5c1aa778837cf"
  },
  {
    "url": "/gridsome-starter-wikidata/manifest.json",
    "revision": "c4c4fdca57559c564290c246088b8d1f"
  },
  {
    "url": "/gridsome-starter-wikidata/q1059211/index.html",
    "revision": "865637c7c1bf8711c6449ad6831f1857"
  },
  {
    "url": "/gridsome-starter-wikidata/q1142058/index.html",
    "revision": "0276e0469c801d14d577e8f67b766416"
  },
  {
    "url": "/gridsome-starter-wikidata/q11935346/index.html",
    "revision": "e8ad8773200c8e6eb5cda099e84ec7d8"
  },
  {
    "url": "/gridsome-starter-wikidata/q1217213/index.html",
    "revision": "0722731adde1da149fb70cd0e93a267a"
  },
  {
    "url": "/gridsome-starter-wikidata/q12418/index.html",
    "revision": "ae426b0f3e66d35c54b2f21a66d9536f"
  },
  {
    "url": "/gridsome-starter-wikidata/q1267893/index.html",
    "revision": "0c9249fdee378f03e06ddea981b8ffd8"
  },
  {
    "url": "/gridsome-starter-wikidata/q12734910/index.html",
    "revision": "97e6bfc691a88ea5977d00a01a8de515"
  },
  {
    "url": "/gridsome-starter-wikidata/q128910/index.html",
    "revision": "be067e99fc1c1ee6b318e6807987a5e3"
  },
  {
    "url": "/gridsome-starter-wikidata/q1327676/index.html",
    "revision": "ad42348ddd28f095400e46d4373f1364"
  },
  {
    "url": "/gridsome-starter-wikidata/q1638622/index.html",
    "revision": "debe22c08c4a21bd85cc3943944bc1b7"
  },
  {
    "url": "/gridsome-starter-wikidata/q1892745/index.html",
    "revision": "a359eac24618a4df6315291404beaffb"
  },
  {
    "url": "/gridsome-starter-wikidata/q20174114/index.html",
    "revision": "25660d745ad07a3d8e3b4134506b6c21"
  },
  {
    "url": "/gridsome-starter-wikidata/q2045726/index.html",
    "revision": "a75a0536f32b7ace0ff7cfeb0aa2f5eb"
  },
  {
    "url": "/gridsome-starter-wikidata/q2072801/index.html",
    "revision": "644d2fc2ff3c3996501ed7f0e93ef4d6"
  },
  {
    "url": "/gridsome-starter-wikidata/q2338404/index.html",
    "revision": "3880477363ae73e06db89e7e529e8f61"
  },
  {
    "url": "/gridsome-starter-wikidata/q2397593/index.html",
    "revision": "72667d76bbffa32084c95eec83bdc27c"
  },
  {
    "url": "/gridsome-starter-wikidata/q27970282/index.html",
    "revision": "3ca3d03c2406a12e473dc8fac178e3af"
  },
  {
    "url": "/gridsome-starter-wikidata/q3618186/index.html",
    "revision": "4b62e1529845decbdb7f082653dd925d"
  },
  {
    "url": "/gridsome-starter-wikidata/q3800774/index.html",
    "revision": "c2c6ee60a4036b6adf47f3508706ac04"
  },
  {
    "url": "/gridsome-starter-wikidata/q3937378/index.html",
    "revision": "2368f96c2111b2b29336bd0da90838a7"
  },
  {
    "url": "/gridsome-starter-wikidata/q3985169/index.html",
    "revision": "af9f3bb5554abd7c77db35c9270018d0"
  },
  {
    "url": "/gridsome-starter-wikidata/q4009972/index.html",
    "revision": "603f2736a2634a00365faab38e305b61"
  },
  {
    "url": "/gridsome-starter-wikidata/q4390923/index.html",
    "revision": "d7808855034f9a022ac1d21f8b5a94f3"
  },
  {
    "url": "/gridsome-starter-wikidata/q474338/index.html",
    "revision": "d691b15b84a47fcf12dce0c221e87479"
  },
  {
    "url": "/gridsome-starter-wikidata/q5237905/index.html",
    "revision": "e181d1fb6be5fe1a9616973d985ac8d8"
  },
  {
    "url": "/gridsome-starter-wikidata/q56280397/index.html",
    "revision": "730af4367ea86dfa7f2cab32792dd59a"
  },
  {
    "url": "/gridsome-starter-wikidata/q563727/index.html",
    "revision": "bba3804aac28f99a5e27081cc9f4bb10"
  },
  {
    "url": "/gridsome-starter-wikidata/q656434/index.html",
    "revision": "bd842bd8e8f9cbd2a2c122de45b823d3"
  },
  {
    "url": "/gridsome-starter-wikidata/q6696013/index.html",
    "revision": "8fc949773a29d94563e9323a32cb6f73"
  },
  {
    "url": "/gridsome-starter-wikidata/q698015/index.html",
    "revision": "c492f816e5ec9218c5467128f4bc8d87"
  },
  {
    "url": "/gridsome-starter-wikidata/q783215/index.html",
    "revision": "5dd18abb94d63a4aa3c43b32f9299320"
  },
  {
    "url": "/gridsome-starter-wikidata/q797902/index.html",
    "revision": "0e371317c5c50777892ac3cfaa56b5c9"
  },
  {
    "url": "/gridsome-starter-wikidata/q798034/index.html",
    "revision": "5c4f957a28a8a8f3ece0850c4fb681f1"
  },
  {
    "url": "/gridsome-starter-wikidata/q972196/index.html",
    "revision": "64e36f80f649572b0f0f69105178d0c5"
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
    "url": "/gridsome-starter-wikidata/q474338",
    "revision": "c7ce3b4eac6acb1622c972b26b96596f"
  },
  {
    "url": "/gridsome-starter-wikidata/q656434",
    "revision": "194e099b257765ea13fa7c6dc59a504b"
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