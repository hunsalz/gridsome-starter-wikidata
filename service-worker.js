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
    "revision": "c1137f8db20daddfc2f4c11d2237f792"
  },
  {
    "url": "/gridsome-starter-wikidata/404/index.html",
    "revision": "c1137f8db20daddfc2f4c11d2237f792"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/css/0.styles.4c5ac4af.css",
    "revision": "85f412b843e1e8d34db0672023af737d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/404/index.json",
    "revision": "7e9e644824383a6115f28fce90c3aa8f"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/index.json",
    "revision": "4a4c2e75045e67d317ab8bbfbbbbb7b7"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1059211/index.json",
    "revision": "9a1b258361be58f8e81192e2d7692884"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1142058/index.json",
    "revision": "e399d2a2abf7a32e8b10478499f45687"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q11935346/index.json",
    "revision": "177f0d368a61ca179cf5e2479b091d1e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1217213/index.json",
    "revision": "7775d1fe24f6b61e707f4832a8299b53"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12418/index.json",
    "revision": "67213572d463afc6e6622d69fee5adcd"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1267893/index.json",
    "revision": "5b08b78a468686c9a83345bb45a358cc"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12734910/index.json",
    "revision": "ae1f2a167575d269504d6c6826139692"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q128910/index.json",
    "revision": "bcf0d7c35e0a36a4048ea143f48e27b7"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1327676/index.json",
    "revision": "4ed007663ea3c2473e29920c8281045b"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1638622/index.json",
    "revision": "f861b822c4e70b4f315aeb0ab73ae15b"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1892745/index.json",
    "revision": "4ef5049f5588dfa4e2ec1a3edab68a76"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q20174114/index.json",
    "revision": "1ef7be03b014ad85aa69a4dd60be4954"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2045726/index.json",
    "revision": "c316728e8c2e27ec2c63601bc8d0f918"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2072801/index.json",
    "revision": "80e028f891ebab61fd1f6945d1936e44"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2338404/index.json",
    "revision": "e392cf16907d2fc0ea31566e6a3a99fd"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2397593/index.json",
    "revision": "4bb10d4b8e44f1e9f8ec6f1a6d36d7cc"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q27970282/index.json",
    "revision": "edb3a7e5d0af244d3df1dafb7f672c97"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3618186/index.json",
    "revision": "1902614261252035fc5ab9fa9581cc7b"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3800774/index.json",
    "revision": "cdabe8975d77bf7b37ca683c2a8ef68f"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3937378/index.json",
    "revision": "2b8c1e1338aed7a4ef0e3c99117bd1e1"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3985169/index.json",
    "revision": "cadde82be9b561339663371274afd4ca"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4009972/index.json",
    "revision": "927cf2ebd00d1e608cd818a778f68486"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4390923/index.json",
    "revision": "b515a860983bf37ca9d4295b42b32954"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q474338/index.json",
    "revision": "9fed068cd640185a57ba763e201fceeb"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q5237905/index.json",
    "revision": "ffc856941e7b8335d1c24066e0ea0d59"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q56280397/index.json",
    "revision": "deda2858008428211f30b0d8fb9a1668"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q563727/index.json",
    "revision": "d4b37d752541768b99299ec0195cde05"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q656434/index.json",
    "revision": "402d7e2b2611e1db4bdd0df1c8a2c894"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q6696013/index.json",
    "revision": "bd205772198e58fa2f6726e2a50d1c4c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q698015/index.json",
    "revision": "ab2e784bcc41a82bc6eae1def9b66192"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q783215/index.json",
    "revision": "ac6ac2d58b69035a3880b73bcc3590c3"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q797902/index.json",
    "revision": "e277fa5314df8044a5c7f5facf2c4971"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q798034/index.json",
    "revision": "7ff408890ee20507b6b86866e6df94d8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q972196/index.json",
    "revision": "dd55de98b4dc862d9574524acc47e7b6"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/app.0e6ba220.js",
    "revision": "6e004df29a274cb6e365d18e1712822d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--node-modules--gridsome--app--pages--404-vue.3035ba19.js",
    "revision": "ed05a2c3b49281e2fa697ac2b8f0c24d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--src--pages--index-vue.58d0d180.js",
    "revision": "434caed9592346dd229ca96d98691370"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--src--templates--painting-vue.e8629075.js",
    "revision": "e4f85d66b2b265850afef1c12d19c427"
  },
  {
    "url": "/gridsome-starter-wikidata/index.html",
    "revision": "374b4bb542f000a4c0b43232ff79235f"
  },
  {
    "url": "/gridsome-starter-wikidata/manifest.json",
    "revision": "c4c4fdca57559c564290c246088b8d1f"
  },
  {
    "url": "/gridsome-starter-wikidata/q1059211/index.html",
    "revision": "ee98c2dec56f139487852c0d91a242b9"
  },
  {
    "url": "/gridsome-starter-wikidata/q1142058/index.html",
    "revision": "4a235bd4a9dd99e85f5f87ff73ece15f"
  },
  {
    "url": "/gridsome-starter-wikidata/q11935346/index.html",
    "revision": "394301ec6745b7464250ded4645d9e19"
  },
  {
    "url": "/gridsome-starter-wikidata/q1217213/index.html",
    "revision": "de69f5d7894d1c0b4d6f5474a25ce637"
  },
  {
    "url": "/gridsome-starter-wikidata/q12418/index.html",
    "revision": "bd51f6198f2c2005c46acd8a435e21f1"
  },
  {
    "url": "/gridsome-starter-wikidata/q1267893/index.html",
    "revision": "04116fd80bb31b234fe6c643b5707c74"
  },
  {
    "url": "/gridsome-starter-wikidata/q12734910/index.html",
    "revision": "2d14c26256feae46688a9cb78ad49c8d"
  },
  {
    "url": "/gridsome-starter-wikidata/q128910/index.html",
    "revision": "f07b1e404a4130a73afaf7d49fbd212c"
  },
  {
    "url": "/gridsome-starter-wikidata/q1327676/index.html",
    "revision": "de0ceea425d3f44017bdd5f546767b61"
  },
  {
    "url": "/gridsome-starter-wikidata/q1638622/index.html",
    "revision": "d3a726e9b70769147e7e57b3c979bcc8"
  },
  {
    "url": "/gridsome-starter-wikidata/q1892745/index.html",
    "revision": "77aafda3b854edb0950f8629b91b10fc"
  },
  {
    "url": "/gridsome-starter-wikidata/q20174114/index.html",
    "revision": "55912d0d0ddba9b7c24de9eb4188d6af"
  },
  {
    "url": "/gridsome-starter-wikidata/q2045726/index.html",
    "revision": "82ed286130a55927d465462004ca7ef0"
  },
  {
    "url": "/gridsome-starter-wikidata/q2072801/index.html",
    "revision": "4fcfe7e415a728d818ec20d10f8b9121"
  },
  {
    "url": "/gridsome-starter-wikidata/q2338404/index.html",
    "revision": "027f655b7c5ca744d7670cc56164d19e"
  },
  {
    "url": "/gridsome-starter-wikidata/q2397593/index.html",
    "revision": "f73e46ed822a6a1c9a942551306c6989"
  },
  {
    "url": "/gridsome-starter-wikidata/q27970282/index.html",
    "revision": "73d023a6388824839e555407447ff480"
  },
  {
    "url": "/gridsome-starter-wikidata/q3618186/index.html",
    "revision": "d0079810f761425555237e87aa76bcc7"
  },
  {
    "url": "/gridsome-starter-wikidata/q3800774/index.html",
    "revision": "9e4f7ba0e94863ed8ff8b903fdf7b058"
  },
  {
    "url": "/gridsome-starter-wikidata/q3937378/index.html",
    "revision": "fb9552cde20fa7cc5390f7110025b3e4"
  },
  {
    "url": "/gridsome-starter-wikidata/q3985169/index.html",
    "revision": "6bc3d527f1edab898d7508508601795a"
  },
  {
    "url": "/gridsome-starter-wikidata/q4009972/index.html",
    "revision": "a6c07b80a40841572ab37122ac955e85"
  },
  {
    "url": "/gridsome-starter-wikidata/q4390923/index.html",
    "revision": "3d459a12b404aa64ffe0924d73f39d79"
  },
  {
    "url": "/gridsome-starter-wikidata/q474338/index.html",
    "revision": "8de4952492d9f4f57340585f8e5a63bf"
  },
  {
    "url": "/gridsome-starter-wikidata/q5237905/index.html",
    "revision": "7929f57286073e3e7d038ad9a9dd88cb"
  },
  {
    "url": "/gridsome-starter-wikidata/q56280397/index.html",
    "revision": "cfb22692fe87adac0aa8ae5cc6c8b938"
  },
  {
    "url": "/gridsome-starter-wikidata/q563727/index.html",
    "revision": "3421c612cadacabfe54625a20ecf6ed4"
  },
  {
    "url": "/gridsome-starter-wikidata/q656434/index.html",
    "revision": "f107bcda1613e19216c4f9d8cb7df4ce"
  },
  {
    "url": "/gridsome-starter-wikidata/q6696013/index.html",
    "revision": "895c30d0abb2c0a5b53a0fc65cad1481"
  },
  {
    "url": "/gridsome-starter-wikidata/q698015/index.html",
    "revision": "6a0cb751965b43a72c865d89f688fee1"
  },
  {
    "url": "/gridsome-starter-wikidata/q783215/index.html",
    "revision": "038f3bbf09c70f108c013d7c1fd5561f"
  },
  {
    "url": "/gridsome-starter-wikidata/q797902/index.html",
    "revision": "75ffe0c1c0556f862f941d4e1c68ab2e"
  },
  {
    "url": "/gridsome-starter-wikidata/q798034/index.html",
    "revision": "dc938234bb7a1a09b81c50ad7dc13c81"
  },
  {
    "url": "/gridsome-starter-wikidata/q972196/index.html",
    "revision": "4a31ef6ebf1aead33d8ebe5aab4da7d7"
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