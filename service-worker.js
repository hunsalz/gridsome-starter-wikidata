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
    "revision": "f0ebbb71ca1c90c4391b7e06183d11b5"
  },
  {
    "url": "/gridsome-starter-wikidata/404/index.html",
    "revision": "f0ebbb71ca1c90c4391b7e06183d11b5"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/css/0.styles.eb1dd192.css",
    "revision": "63b862ad7d6dde3f60f9ddc30f57722c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/404/index.json",
    "revision": "ba49a6d6d83b40b44457ccce6f093c59"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/index.json",
    "revision": "24329f3596dc2d108402154bf3c2c383"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1059211/index.json",
    "revision": "4466af7606e01bf687b827ab18856c8d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1142058/index.json",
    "revision": "3d47fdec17078d25df50645e3588a280"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q11935346/index.json",
    "revision": "9b3b051db532d54d874158a8545c8d23"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1217213/index.json",
    "revision": "2b02d1941f551707826abfd9659edcb2"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12418/index.json",
    "revision": "d2aa648eb7682c1209de1fd29eedd4be"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1267893/index.json",
    "revision": "8e7c3214422de35eb3a67d7111babb6c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12734910/index.json",
    "revision": "0c375cd0aebca7b5f39c7104b22dcee3"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q128910/index.json",
    "revision": "e412e57778187edbd9d1ce4b8dec4ca6"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1327676/index.json",
    "revision": "16747f02101b1c19892c571494b72589"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1638622/index.json",
    "revision": "f9d951294235027c3caab8809c8727b5"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1892745/index.json",
    "revision": "fe177b063082885f76310ae30676771a"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q20174114/index.json",
    "revision": "bc910367b83ac81dea9c9b7a2a2302e5"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2045726/index.json",
    "revision": "eb38f0e626f25ecfc6bd954a5f55c40e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2072801/index.json",
    "revision": "c2b34576574041be2215de9d6a53fda5"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2338404/index.json",
    "revision": "96d6db9966fce32a417c7f6287dea9e4"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2397593/index.json",
    "revision": "02e54bfc17d4ab80f99bf3343b602273"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q27970282/index.json",
    "revision": "70613a6a32862b84eb6fcf6d7cdfb173"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3618186/index.json",
    "revision": "c064565b5fe971a4af161093e142fbaf"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3800774/index.json",
    "revision": "db58c09e1deb765b274f5677990330fa"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3937378/index.json",
    "revision": "97bbd2d8cbc9e1df9b14ed48153fff31"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3985169/index.json",
    "revision": "51ef5bae319753d52afecbe24bca219e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4009972/index.json",
    "revision": "b681e24e760e502ae068bc484cb1e6f8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4390923/index.json",
    "revision": "5874b33a4389f14f6fc74e30b8a40db1"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q474338/index.json",
    "revision": "72746507e04b8d751805a1bf07aa25cc"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q5237905/index.json",
    "revision": "1ee3aea15547ec776b0262ad8e8ae336"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q56280397/index.json",
    "revision": "fba23ffaf93ef04ce1614ac78dd4274c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q563727/index.json",
    "revision": "b66b83945217064925c156e03243f666"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q656434/index.json",
    "revision": "8ca442e1916061c69bdeb2f07dfe6f56"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q6696013/index.json",
    "revision": "b32bc0cd4b0d3c00017706242303f5ae"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q698015/index.json",
    "revision": "7f883c698979c7fd65a426e8a66076ec"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q783215/index.json",
    "revision": "9ece4c24efb1296fe56a976725720a7e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q797902/index.json",
    "revision": "783f2f9f41b81c8c89e852b58ebe15e7"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q798034/index.json",
    "revision": "5cffeb7074d681eafd8febbf228f5732"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q972196/index.json",
    "revision": "4471fd2591a0e6e0121e867091af95ea"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/app.ea49887e.js",
    "revision": "9220a14dca9a446eaeab6d18cfc647cd"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--node-modules--gridsome--app--pages--404-vue.6e22a91b.js",
    "revision": "d3cdf962d82142fa956269815baed791"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--src--pages--index-vue.2334f5d6.js",
    "revision": "56b2e2391e2ccd4e37e5f91254b8c8b0"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--src--templates--painting-vue.5dcf8afe.js",
    "revision": "315e389339be03b8c4813ad2f8f9464c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/vendors~page--src--pages--index-vue.cc28ed7f.js",
    "revision": "58f62748ba43f4ee27e23034a89e4077"
  },
  {
    "url": "/gridsome-starter-wikidata/index.html",
    "revision": "697463c1eaf852abe6114b1874a89d26"
  },
  {
    "url": "/gridsome-starter-wikidata/manifest.json",
    "revision": "c4c4fdca57559c564290c246088b8d1f"
  },
  {
    "url": "/gridsome-starter-wikidata/q1059211/index.html",
    "revision": "962b59e8de17ab27341e9536e811683b"
  },
  {
    "url": "/gridsome-starter-wikidata/q1142058/index.html",
    "revision": "a02fcb13bcb5d79846b3ef9261be53ee"
  },
  {
    "url": "/gridsome-starter-wikidata/q11935346/index.html",
    "revision": "fee3322aa9f6e0e48438303c4bb644bc"
  },
  {
    "url": "/gridsome-starter-wikidata/q1217213/index.html",
    "revision": "94af3b890781cf2383b632e96eb8d0b9"
  },
  {
    "url": "/gridsome-starter-wikidata/q12418/index.html",
    "revision": "ab541f0215d0fb32c82ea3d9c399f236"
  },
  {
    "url": "/gridsome-starter-wikidata/q1267893/index.html",
    "revision": "4c9cd59765ca1738b01a6988676b0f56"
  },
  {
    "url": "/gridsome-starter-wikidata/q12734910/index.html",
    "revision": "d543aa087aa811e29da0d9f076ff307a"
  },
  {
    "url": "/gridsome-starter-wikidata/q128910/index.html",
    "revision": "0ccdf2802049869ebaabcd8bee5975eb"
  },
  {
    "url": "/gridsome-starter-wikidata/q1327676/index.html",
    "revision": "6c42a7d7c496e2452d5c8899e1b35475"
  },
  {
    "url": "/gridsome-starter-wikidata/q1638622/index.html",
    "revision": "d5cf1750b0a3eebd0bff7bdab5fdc2b3"
  },
  {
    "url": "/gridsome-starter-wikidata/q1892745/index.html",
    "revision": "dc29236082ea29a2686651a5a324c349"
  },
  {
    "url": "/gridsome-starter-wikidata/q20174114/index.html",
    "revision": "23d0eb79452ee3cbdb39866483cdbd52"
  },
  {
    "url": "/gridsome-starter-wikidata/q2045726/index.html",
    "revision": "d053b9b6d70a415bbaa6644a4a8c220f"
  },
  {
    "url": "/gridsome-starter-wikidata/q2072801/index.html",
    "revision": "35750cd122625991b58a80efa09030bf"
  },
  {
    "url": "/gridsome-starter-wikidata/q2338404/index.html",
    "revision": "137df79902015062de7f0aed321ffc21"
  },
  {
    "url": "/gridsome-starter-wikidata/q2397593/index.html",
    "revision": "f85e59c02d976c5cbccf0f42751aad6c"
  },
  {
    "url": "/gridsome-starter-wikidata/q27970282/index.html",
    "revision": "01b7fe4a65636e149b9691592478c020"
  },
  {
    "url": "/gridsome-starter-wikidata/q3618186/index.html",
    "revision": "f16bb0bbd05ec7aab8b04c707e9d48f1"
  },
  {
    "url": "/gridsome-starter-wikidata/q3800774/index.html",
    "revision": "9fc9acf63e8790b3bba8d36056e7d3bc"
  },
  {
    "url": "/gridsome-starter-wikidata/q3937378/index.html",
    "revision": "fb0dea5cde3a6ebe970faccd5722e592"
  },
  {
    "url": "/gridsome-starter-wikidata/q3985169/index.html",
    "revision": "fff483a209281469d30418010623c3d2"
  },
  {
    "url": "/gridsome-starter-wikidata/q4009972/index.html",
    "revision": "de17dc07cb380dc0a272ce4c9d7cbcca"
  },
  {
    "url": "/gridsome-starter-wikidata/q4390923/index.html",
    "revision": "c6f7bd03b753082eb8515ef413961d31"
  },
  {
    "url": "/gridsome-starter-wikidata/q474338/index.html",
    "revision": "38a40df6be99a166f2e76bdbcda94d1c"
  },
  {
    "url": "/gridsome-starter-wikidata/q5237905/index.html",
    "revision": "5acfa94260470750fbe01252e10ac453"
  },
  {
    "url": "/gridsome-starter-wikidata/q56280397/index.html",
    "revision": "3d72edfc51b30ab7ce331dced4319233"
  },
  {
    "url": "/gridsome-starter-wikidata/q563727/index.html",
    "revision": "a9c8a41d344f24bfb25d87dcc3975e88"
  },
  {
    "url": "/gridsome-starter-wikidata/q656434/index.html",
    "revision": "5e3d342cfac186df9c4c2a7f95efda6f"
  },
  {
    "url": "/gridsome-starter-wikidata/q6696013/index.html",
    "revision": "cc9268e32fb29802cf37478a96558533"
  },
  {
    "url": "/gridsome-starter-wikidata/q698015/index.html",
    "revision": "1a731b51919d249a06ab716990ea507b"
  },
  {
    "url": "/gridsome-starter-wikidata/q783215/index.html",
    "revision": "f46ed2143b23abbce688a958d069d8ba"
  },
  {
    "url": "/gridsome-starter-wikidata/q797902/index.html",
    "revision": "d86f3511b3af49ee24833e86b7aaa964"
  },
  {
    "url": "/gridsome-starter-wikidata/q798034/index.html",
    "revision": "4d375f34a8a073579643e1348dc88f47"
  },
  {
    "url": "/gridsome-starter-wikidata/q972196/index.html",
    "revision": "70851cf703eee2f8d579cc61b32e8b4b"
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
    "url": "/gridsome-starter-wikidata/q1327676",
    "revision": "7c226ea1aea779f246c740161461807e"
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