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
    "revision": "de26c27c954442b93224ac6577f2cf8e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1059211/index.json",
    "revision": "99f478c201745bf0bc9720d3e228245b"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1142058/index.json",
    "revision": "bfee7c96db9f7a981979c273e9cc6648"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q11935346/index.json",
    "revision": "824b110e407797c00a73554685ee0d99"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1217213/index.json",
    "revision": "52ea4913bc60b6fa4d64ec13f45f95a8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12418/index.json",
    "revision": "b1dc5b8fcb8cf9d3197b3785ce9e67c0"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1267893/index.json",
    "revision": "31aa588fa99d1b7ee5f7505a0340a87e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12734910/index.json",
    "revision": "642c2da56d38e4c021dcfa08bb4fb6d5"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q128910/index.json",
    "revision": "db2a3d3558b1900d8c808194c524f11b"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1327676/index.json",
    "revision": "612f26de60574204258706ca897ba92f"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1638622/index.json",
    "revision": "c6d3d87903a345e1fbcbb6ba5d1a5df6"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1892745/index.json",
    "revision": "7f3d1061b3226338c62e696c3ead968e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q20174114/index.json",
    "revision": "7fd53fb4a9a85969b422302d2a5afc4c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2045726/index.json",
    "revision": "3f1d9156b6f7a2b9b55b318a8cdd8d72"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2072801/index.json",
    "revision": "d074a437ed888857a71f6dc4fd9eb4f4"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2338404/index.json",
    "revision": "ee52e0734355b5643935d6caca795345"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2397593/index.json",
    "revision": "96d0d49076677b85759d82a51239d0d6"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q27970282/index.json",
    "revision": "2a728bed4cc4587a6b2821d7cc30e1be"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3618186/index.json",
    "revision": "c3c1456e65cd1ad36e40d2a5b913739c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3800774/index.json",
    "revision": "f172e9ae23159099368e68d96603382d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3937378/index.json",
    "revision": "3c141b93c0f0b1af25d19e2cccb49b63"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3985169/index.json",
    "revision": "fa231ca887cd6575841352e4398bd6b4"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4009972/index.json",
    "revision": "1bb74cf4713241fb99f695fc23df4e6a"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4390923/index.json",
    "revision": "b1d43022bde7583e95c9c2e6222e30c9"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q474338/index.json",
    "revision": "352f04af67acbad18377f73c1af09919"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q5237905/index.json",
    "revision": "0a8145a053a45a23bc242590a2efaa07"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q56280397/index.json",
    "revision": "6206018c0f3a52c514fc32b819459454"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q563727/index.json",
    "revision": "55320291293655dfcaf866e6d158942c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q656434/index.json",
    "revision": "0c1eee2e696ca7d7136874dcc380e52b"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q6696013/index.json",
    "revision": "f9c9ae9479cad33864b0310ed8370be3"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q698015/index.json",
    "revision": "44aa1ef84fca05918aaa8885b16dff52"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q783215/index.json",
    "revision": "010ce1cb29d10ec168190c9737b7ddbe"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q797902/index.json",
    "revision": "a60923cf88fc5acf4cb9de4aee7d18d8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q798034/index.json",
    "revision": "aab8f3a4c4a3591d86045c8c402c890f"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q972196/index.json",
    "revision": "ff8040c0b563b48821aa15b09e498bce"
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
    "revision": "09c459a56a55a78490f8c73c91bf03b7"
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
    "url": "/gridsome-starter-wikidata/q1142058/index.html",
    "revision": "ed44f2ac1242069373dfca16fcd378b3"
  },
  {
    "url": "/gridsome-starter-wikidata/q11935346/index.html",
    "revision": "79a49a6b0a49efb92717c1d7f70389a8"
  },
  {
    "url": "/gridsome-starter-wikidata/q1217213/index.html",
    "revision": "4e4381a83509842ca0fb9ba6dd92484c"
  },
  {
    "url": "/gridsome-starter-wikidata/q12418/index.html",
    "revision": "375f00b74eed3c0f4898adfea3746fbf"
  },
  {
    "url": "/gridsome-starter-wikidata/q1267893/index.html",
    "revision": "73956ba7bf5689c5a49613f5a97fcdc2"
  },
  {
    "url": "/gridsome-starter-wikidata/q12734910/index.html",
    "revision": "579a3309c480997d2cc75c6d48299a0f"
  },
  {
    "url": "/gridsome-starter-wikidata/q128910/index.html",
    "revision": "06242064b311fca7bc3a872433e8a93c"
  },
  {
    "url": "/gridsome-starter-wikidata/q1327676/index.html",
    "revision": "b83aed2946cb78c162c3ccf09c00eafb"
  },
  {
    "url": "/gridsome-starter-wikidata/q1638622/index.html",
    "revision": "26adfd678f08a44641a06392a7de54d1"
  },
  {
    "url": "/gridsome-starter-wikidata/q1892745/index.html",
    "revision": "042ff737f1bd1b92d4c6501ccbd7cc50"
  },
  {
    "url": "/gridsome-starter-wikidata/q20174114/index.html",
    "revision": "945e0af6599f6af37a45989a2584d3f4"
  },
  {
    "url": "/gridsome-starter-wikidata/q2045726/index.html",
    "revision": "974df164f3ca516451a262c357bd1918"
  },
  {
    "url": "/gridsome-starter-wikidata/q2072801/index.html",
    "revision": "fa88519b9265858f4ba27c480785ed89"
  },
  {
    "url": "/gridsome-starter-wikidata/q2338404/index.html",
    "revision": "12378f7e17e6dbb2fc383fda73c8a4c1"
  },
  {
    "url": "/gridsome-starter-wikidata/q2397593/index.html",
    "revision": "1b8a09373a9bdca1cdf60edb6176cbbd"
  },
  {
    "url": "/gridsome-starter-wikidata/q27970282/index.html",
    "revision": "a0e4d6acde4ab3d068ab296471af69a9"
  },
  {
    "url": "/gridsome-starter-wikidata/q3618186/index.html",
    "revision": "2ddf8ee70ba8af65a9d92128a7133be5"
  },
  {
    "url": "/gridsome-starter-wikidata/q3800774/index.html",
    "revision": "afc77d0475200c65238a39b2283ba34a"
  },
  {
    "url": "/gridsome-starter-wikidata/q3937378/index.html",
    "revision": "812ac4445e7179660b6c499a926d7bc4"
  },
  {
    "url": "/gridsome-starter-wikidata/q3985169/index.html",
    "revision": "7ac5974e9dbc5a7a59f4d2dae78e1305"
  },
  {
    "url": "/gridsome-starter-wikidata/q4009972/index.html",
    "revision": "bf93df9891a58176c6bf602e953a64ea"
  },
  {
    "url": "/gridsome-starter-wikidata/q4390923/index.html",
    "revision": "6221c8306a2f23dc5639454bafd8a4c2"
  },
  {
    "url": "/gridsome-starter-wikidata/q474338/index.html",
    "revision": "b15626e503cec255865d5981d7aacf6a"
  },
  {
    "url": "/gridsome-starter-wikidata/q5237905/index.html",
    "revision": "7e3b828245b88b495e773c2f874f6e6d"
  },
  {
    "url": "/gridsome-starter-wikidata/q56280397/index.html",
    "revision": "d52d2a21808619523044de5e1408a1b4"
  },
  {
    "url": "/gridsome-starter-wikidata/q563727/index.html",
    "revision": "5795a2970eae1f8b1cdebd1e62c0bce0"
  },
  {
    "url": "/gridsome-starter-wikidata/q656434/index.html",
    "revision": "6b7ceaada6f70535c683d6c1e9e2b8d2"
  },
  {
    "url": "/gridsome-starter-wikidata/q6696013/index.html",
    "revision": "d7e9eb1f8b9198012175946363669428"
  },
  {
    "url": "/gridsome-starter-wikidata/q698015/index.html",
    "revision": "402d2cc1fde692298a7670292705b81f"
  },
  {
    "url": "/gridsome-starter-wikidata/q783215/index.html",
    "revision": "89c8540913489038342c5e323cae4e31"
  },
  {
    "url": "/gridsome-starter-wikidata/q797902/index.html",
    "revision": "45b36c3a3520b240a9e33c2ee502baa1"
  },
  {
    "url": "/gridsome-starter-wikidata/q798034/index.html",
    "revision": "a0ec80085dccd357b96fe3811037c495"
  },
  {
    "url": "/gridsome-starter-wikidata/q972196/index.html",
    "revision": "10a43f4bcf2c2dd0feecd900f764cab1"
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
    "url": "/gridsome-starter-wikidata/q2397593",
    "revision": "54082bddaf866a72c6cb8ff4147311ef"
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