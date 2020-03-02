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
    "revision": "e8d9b7fe3269f58002e9c811d878ef7c"
  },
  {
    "url": "/gridsome-starter-wikidata/404/index.html",
    "revision": "e8d9b7fe3269f58002e9c811d878ef7c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/css/0.styles.9c8f1f53.css",
    "revision": "6a13fb0f4d9f02016a851bd4211aacfe"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/404/index.json",
    "revision": "c5d6f9a97855dabf57f696174147efc0"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/index.json",
    "revision": "c49ee5d74b11a899d5ae51239bdc60b8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1059211/index.json",
    "revision": "6816be66eb5a5f7959852606426068a9"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1142058/index.json",
    "revision": "f4f998eb739f7c52fd64135d13440bfb"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q11935346/index.json",
    "revision": "af8283e753e5b32508f21c5b89248704"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1217213/index.json",
    "revision": "a487416d3e26d99ab7fa5c4ce39cd63f"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12418/index.json",
    "revision": "a9621e605e132363e3d5c5a7935d1745"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1267893/index.json",
    "revision": "a618e5af2b997f5ba7605fa8894d21cf"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12734910/index.json",
    "revision": "51f2f54b4fb15214d1d80336128d2efc"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q128910/index.json",
    "revision": "81f9f008b87b5fad7eaefc4109a8a1e8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1327676/index.json",
    "revision": "1b9c783fe1ad452fd8816711abebc5fd"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1638622/index.json",
    "revision": "5bdcb0d32cb04f56c97bd43ec0ab1d5f"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1892745/index.json",
    "revision": "de4158393156bc9f493e321d0125efba"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q20174114/index.json",
    "revision": "11542de0da7d3fecb4f3c56f2d01e0af"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2045726/index.json",
    "revision": "d0b087d2fc2a1a1bc69bea2d0745b831"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2072801/index.json",
    "revision": "111ec06382f75ad299ab78e16171198d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2338404/index.json",
    "revision": "51eb587436f36a69c136650c83ba6d46"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2397593/index.json",
    "revision": "ab4e5bfdf75098d3766826459e4888d9"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q27970282/index.json",
    "revision": "a278d1597a998411551f8fece32b2137"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3618186/index.json",
    "revision": "9ae50d9e4d60ddc9b86e5387c1ba5be7"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3800774/index.json",
    "revision": "a476a908b1a773ab3fafa4309d26c4c4"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3937378/index.json",
    "revision": "7f4160339c615e3f4142a347fea1e447"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3985169/index.json",
    "revision": "63cbc7a02078efce943e5b9baacd9468"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4009972/index.json",
    "revision": "6bee91e5972658bddb6988e04c2763ce"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4390923/index.json",
    "revision": "eee52f587a1f7b2bf71e3ac56893afd7"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q474338/index.json",
    "revision": "89bd285eaac221d7cf91d830f356fad3"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q5237905/index.json",
    "revision": "56cf97cde0a5e715317f3138921e8e31"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q56280397/index.json",
    "revision": "07520295345f61d93e8ffad7d7484388"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q563727/index.json",
    "revision": "94e775c5f1a404bdf7974b548196ba81"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q656434/index.json",
    "revision": "3686840cf728a347f30bbffddd7f900a"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q6696013/index.json",
    "revision": "0b8eb4f39077ff6fce065f87be27b736"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q698015/index.json",
    "revision": "c76511a86dafe12f62d7c2a8535a82f6"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q783215/index.json",
    "revision": "3111747ab6d7d4408ba33381c1ba941e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q797902/index.json",
    "revision": "bfc09a09838b9172bc45dc5c4c0f5159"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q798034/index.json",
    "revision": "a69fccc653a56be3b39b2abf7cb8ad14"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q972196/index.json",
    "revision": "bb5619fea0de20e4ee334862a2bf22a5"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/app.875bc59f.js",
    "revision": "574542c49bf3742a210d1054931d8284"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--node-modules--gridsome--app--pages--404-vue.d8e97352.js",
    "revision": "9f7db538505cf350b781f4a2de0f7ed0"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--src--pages--index-vue.2a5bfd2f.js",
    "revision": "7a0331a3ec38b397dc4525a1b7c72738"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--src--templates--record-vue.f63cc93c.js",
    "revision": "697e092f81e4d296679ec07e98e973d3"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/vendors~page--src--pages--index-vue.9b252e42.js",
    "revision": "598cbf48bce0b0f9c0b35e425cddaac1"
  },
  {
    "url": "/gridsome-starter-wikidata/index.html",
    "revision": "d293c09f25e844693d37897f6e0e335b"
  },
  {
    "url": "/gridsome-starter-wikidata/manifest.json",
    "revision": "c4c4fdca57559c564290c246088b8d1f"
  },
  {
    "url": "/gridsome-starter-wikidata/q1059211/index.html",
    "revision": "a6f0985256f92acd7ab4d2a32786ba1e"
  },
  {
    "url": "/gridsome-starter-wikidata/q1142058/index.html",
    "revision": "a179a1b38d27da2f3613c15bbbdbf2f6"
  },
  {
    "url": "/gridsome-starter-wikidata/q11935346/index.html",
    "revision": "7862aa22b5bf67c263c5088399e9217b"
  },
  {
    "url": "/gridsome-starter-wikidata/q1217213/index.html",
    "revision": "c32376ba33fbe69e983e1656c05d842a"
  },
  {
    "url": "/gridsome-starter-wikidata/q12418/index.html",
    "revision": "25bc4941ca0dcd9c6b916eee0d38b6c8"
  },
  {
    "url": "/gridsome-starter-wikidata/q1267893/index.html",
    "revision": "991155fd467b6c8a8abc1cc48f5c8c54"
  },
  {
    "url": "/gridsome-starter-wikidata/q12734910/index.html",
    "revision": "03a1ab9ea57b29966c9b84c973b57af2"
  },
  {
    "url": "/gridsome-starter-wikidata/q128910/index.html",
    "revision": "23a335609ee5c65ab61766b744ea5a3f"
  },
  {
    "url": "/gridsome-starter-wikidata/q1327676/index.html",
    "revision": "0b253ce57f126b3f02f18a4ad818756a"
  },
  {
    "url": "/gridsome-starter-wikidata/q1638622/index.html",
    "revision": "b19e582ee158b01739ab21179308587a"
  },
  {
    "url": "/gridsome-starter-wikidata/q1892745/index.html",
    "revision": "e9e948082ec93aaa64f1381f312cbd9b"
  },
  {
    "url": "/gridsome-starter-wikidata/q20174114/index.html",
    "revision": "6e1f468f5eb7914e8d52bb6cff626d4c"
  },
  {
    "url": "/gridsome-starter-wikidata/q2045726/index.html",
    "revision": "9d5f5bc32078137aedec0ca921f9681d"
  },
  {
    "url": "/gridsome-starter-wikidata/q2072801/index.html",
    "revision": "ecad1325e799706bf7359c33e7040a7d"
  },
  {
    "url": "/gridsome-starter-wikidata/q2338404/index.html",
    "revision": "4d6c237297a5863f48356889279324ac"
  },
  {
    "url": "/gridsome-starter-wikidata/q2397593/index.html",
    "revision": "0571e5aabf35e11a14f5385baccd651c"
  },
  {
    "url": "/gridsome-starter-wikidata/q27970282/index.html",
    "revision": "8bb63d2d966fbb6b9e434e1356fa7e3e"
  },
  {
    "url": "/gridsome-starter-wikidata/q3618186/index.html",
    "revision": "87cb5aa0113aef2d6e205341a763b2f9"
  },
  {
    "url": "/gridsome-starter-wikidata/q3800774/index.html",
    "revision": "a28e7c39f51e3269d6722c7106cd3661"
  },
  {
    "url": "/gridsome-starter-wikidata/q3937378/index.html",
    "revision": "241519c2ed2cd4b9030fc0a4d2fa1ac0"
  },
  {
    "url": "/gridsome-starter-wikidata/q3985169/index.html",
    "revision": "2b48ae2227cf0d5e4e4c04a12d40a4ee"
  },
  {
    "url": "/gridsome-starter-wikidata/q4009972/index.html",
    "revision": "6fd5dedff9c3c449a188ab198a28bcc5"
  },
  {
    "url": "/gridsome-starter-wikidata/q4390923/index.html",
    "revision": "7f6a32656a3256b88b4d7fa5a3176d51"
  },
  {
    "url": "/gridsome-starter-wikidata/q474338/index.html",
    "revision": "fedd37c858d402cff54641bd52bab126"
  },
  {
    "url": "/gridsome-starter-wikidata/q5237905/index.html",
    "revision": "2c22076bd82eeec42f826dd24282ff93"
  },
  {
    "url": "/gridsome-starter-wikidata/q56280397/index.html",
    "revision": "fcc4bae9bd11b608aca3762f9afd4633"
  },
  {
    "url": "/gridsome-starter-wikidata/q563727/index.html",
    "revision": "1401bcddacd92f52c310f386a0e2573e"
  },
  {
    "url": "/gridsome-starter-wikidata/q656434/index.html",
    "revision": "0fdce5f1a1cb80a824d520a97b57debf"
  },
  {
    "url": "/gridsome-starter-wikidata/q6696013/index.html",
    "revision": "7c36065f912a5b080769190e17bbc2ef"
  },
  {
    "url": "/gridsome-starter-wikidata/q698015/index.html",
    "revision": "1e3807fbcd09d2ed7d289fa7a11892ab"
  },
  {
    "url": "/gridsome-starter-wikidata/q783215/index.html",
    "revision": "ccea7ce5563edc70e5ed80b133e8af6f"
  },
  {
    "url": "/gridsome-starter-wikidata/q797902/index.html",
    "revision": "83cfda2dd1f31a28c34fc2095907eac6"
  },
  {
    "url": "/gridsome-starter-wikidata/q798034/index.html",
    "revision": "4bce5180b708e240a5ea6a637e46b8eb"
  },
  {
    "url": "/gridsome-starter-wikidata/q972196/index.html",
    "revision": "9c208f745e4a33d1eca8dcfc3ffaec1a"
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