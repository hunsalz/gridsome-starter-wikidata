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
    "revision": "bcc287d1afd5c8c66b0adf0be8f5f4a5"
  },
  {
    "url": "/gridsome-starter-wikidata/404/index.html",
    "revision": "bcc287d1afd5c8c66b0adf0be8f5f4a5"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/css/0.styles.f549b303.css",
    "revision": "05c0d22cdb57ce8626e3a2d59c792f71"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/404/index.json",
    "revision": "7942bc1299124f681e318d88fb15ab12"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/index.json",
    "revision": "eed0851ab5fd72aaba0b95b69ae77dc6"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1059211/index.json",
    "revision": "021b86e8f39875142564b8a8681dfbeb"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1142058/index.json",
    "revision": "899f4ffa3d14ad07320540928e9bbd26"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q11935346/index.json",
    "revision": "36d36b16f3051273c51279230c5e097d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1217213/index.json",
    "revision": "cea8b60ccc615b616e018d49d1927906"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12418/index.json",
    "revision": "2ed709caa3ef590351b5d4c4088cbb60"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1267893/index.json",
    "revision": "33c9fd88a76cfc1ba846e7e100a42d63"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12734910/index.json",
    "revision": "362e483128ed3eff0d8d2b92d1a20483"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q128910/index.json",
    "revision": "fbe7eb0bece7b5a599670569176ea03e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1327676/index.json",
    "revision": "3952fe830e5b4076805ed8804ea32666"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1638622/index.json",
    "revision": "cc13bf9f74e431adfdda9ac469c820e6"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1892745/index.json",
    "revision": "06bb5c4d22e0ecd54c5a8f6bbb6fde9a"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q20174114/index.json",
    "revision": "d26f854d5bef3326a921603cb3c8de93"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2045726/index.json",
    "revision": "5219ed033cfac444e9d8cec8deab4d33"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2072801/index.json",
    "revision": "6f2690f90d49a1378b991c6db5a2cba0"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2338404/index.json",
    "revision": "1f8800feeef415004cff8fce528c3d8e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2397593/index.json",
    "revision": "e9e3e0173396a4f1153eab7abc93dc31"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q27970282/index.json",
    "revision": "62ce3cfacd2c0f39deabef959232bb6d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3618186/index.json",
    "revision": "a76c7e4ce88ea77ff55e6b51b33a3420"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3800774/index.json",
    "revision": "2c577ce346f95a3253938c07e058ab0a"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3937378/index.json",
    "revision": "cedb020c4c0ac407d2be4e08b8edf8ac"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3985169/index.json",
    "revision": "40d4167ee6df4b6d81666e560f69339c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4009972/index.json",
    "revision": "8d3aed9fe48a31f25fc701d0bb6297cf"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4390923/index.json",
    "revision": "f39101fe96312cfb02c422709aa332a0"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q474338/index.json",
    "revision": "21f49fb691263bbeafa7ba88e7c27ad7"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q5237905/index.json",
    "revision": "26e238a195586cc9ba281473c8c3a00a"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q56280397/index.json",
    "revision": "7e46c1762fb4b05e5c33602c5a0f8518"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q563727/index.json",
    "revision": "d24acc0e9783aceeefc6677ca281abfc"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q656434/index.json",
    "revision": "7c787167e363a070b01826d5acaa4c61"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q6696013/index.json",
    "revision": "b6c72a34ebb17b8c07a85d3b83830b1d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q698015/index.json",
    "revision": "6df51c87504cbbdeb8e441f72fd3e9a1"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q783215/index.json",
    "revision": "d783719cd9ac62809f228984c65fcc72"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q797902/index.json",
    "revision": "b1e702fbb0d11e48486044801c855669"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q798034/index.json",
    "revision": "26ceb634e1c3959e9828e9f06faffde3"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q972196/index.json",
    "revision": "e83018c0c54d94deb7c567f400a0a31e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/app.a955d9f7.js",
    "revision": "2e5f2e398cdec30434b29c3b88373d38"
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
    "revision": "445e3de78ee7751bf9f6bef9c0b18362"
  },
  {
    "url": "/gridsome-starter-wikidata/manifest.json",
    "revision": "c4c4fdca57559c564290c246088b8d1f"
  },
  {
    "url": "/gridsome-starter-wikidata/q1059211/index.html",
    "revision": "84106b5743ba2eae7b8fa41d7af2d15c"
  },
  {
    "url": "/gridsome-starter-wikidata/q1142058/index.html",
    "revision": "5ee04356d222b93cbc9999aec2978793"
  },
  {
    "url": "/gridsome-starter-wikidata/q11935346/index.html",
    "revision": "db19c7fdc78dd326b2326e8f1440ffb1"
  },
  {
    "url": "/gridsome-starter-wikidata/q1217213/index.html",
    "revision": "a324f4f16281126b4443fc02290331de"
  },
  {
    "url": "/gridsome-starter-wikidata/q12418/index.html",
    "revision": "40ee4cdc7683233982957757a54c93d2"
  },
  {
    "url": "/gridsome-starter-wikidata/q1267893/index.html",
    "revision": "7af979c8ca4c4c4c3a524b2d9b87726a"
  },
  {
    "url": "/gridsome-starter-wikidata/q12734910/index.html",
    "revision": "cd425434ddd48b6cfb8248d0acf935f0"
  },
  {
    "url": "/gridsome-starter-wikidata/q128910/index.html",
    "revision": "2b1eb237d0d5ea2c27222fd1bc16ac4e"
  },
  {
    "url": "/gridsome-starter-wikidata/q1327676/index.html",
    "revision": "d5240b31916efec753e4a1e866d7996a"
  },
  {
    "url": "/gridsome-starter-wikidata/q1638622/index.html",
    "revision": "d7ff95a83cc06391776e4bc95d0f8613"
  },
  {
    "url": "/gridsome-starter-wikidata/q1892745/index.html",
    "revision": "fb0a3408967f8130f4ae57f4a34cd823"
  },
  {
    "url": "/gridsome-starter-wikidata/q20174114/index.html",
    "revision": "172a984ac78bf3b0e5e06abdf8929594"
  },
  {
    "url": "/gridsome-starter-wikidata/q2045726/index.html",
    "revision": "1552cf770d06db98aa1e0e2d826ec4fb"
  },
  {
    "url": "/gridsome-starter-wikidata/q2072801/index.html",
    "revision": "b7c3fc44c429d687b9c7d5085479c154"
  },
  {
    "url": "/gridsome-starter-wikidata/q2338404/index.html",
    "revision": "b73534af33a19ff3739c1f5c807e95dc"
  },
  {
    "url": "/gridsome-starter-wikidata/q2397593/index.html",
    "revision": "8cf18406cce6fd1ef2110c7a9ceede78"
  },
  {
    "url": "/gridsome-starter-wikidata/q27970282/index.html",
    "revision": "380c47732a84f578456f93f4fe74cfd3"
  },
  {
    "url": "/gridsome-starter-wikidata/q3618186/index.html",
    "revision": "9f747c82a53557698c07d9c824c54eb8"
  },
  {
    "url": "/gridsome-starter-wikidata/q3800774/index.html",
    "revision": "d6058ad8233d80d40549add639608cb4"
  },
  {
    "url": "/gridsome-starter-wikidata/q3937378/index.html",
    "revision": "553129db19adf356a0c72ac4861c5875"
  },
  {
    "url": "/gridsome-starter-wikidata/q3985169/index.html",
    "revision": "51bd55b1d21640ed40ee59a511bc0e9d"
  },
  {
    "url": "/gridsome-starter-wikidata/q4009972/index.html",
    "revision": "590b1636010f53344cd35e6cc43ef31b"
  },
  {
    "url": "/gridsome-starter-wikidata/q4390923/index.html",
    "revision": "e6d44d78d4a6ff5c607a597526702b61"
  },
  {
    "url": "/gridsome-starter-wikidata/q474338/index.html",
    "revision": "183b06a5447ae721df173cfe761d6814"
  },
  {
    "url": "/gridsome-starter-wikidata/q5237905/index.html",
    "revision": "714795322315ec19caf41d606a57a6eb"
  },
  {
    "url": "/gridsome-starter-wikidata/q56280397/index.html",
    "revision": "4a7af3c99d6997421318fcfcc0a82189"
  },
  {
    "url": "/gridsome-starter-wikidata/q563727/index.html",
    "revision": "9fc590f5e8eb541c5c4ecbb03b9ae48e"
  },
  {
    "url": "/gridsome-starter-wikidata/q656434/index.html",
    "revision": "7af008681e93c1e209f9c8cc12b4291e"
  },
  {
    "url": "/gridsome-starter-wikidata/q6696013/index.html",
    "revision": "f301023e8abca3eee0bea875bba78310"
  },
  {
    "url": "/gridsome-starter-wikidata/q698015/index.html",
    "revision": "77a7a8ed71e8ec5c545c63bbb5ad7995"
  },
  {
    "url": "/gridsome-starter-wikidata/q783215/index.html",
    "revision": "750fa59d789b01fd5af9aeb95cb6d7df"
  },
  {
    "url": "/gridsome-starter-wikidata/q797902/index.html",
    "revision": "3ae7472c40c0de2af751c59ceb2d30af"
  },
  {
    "url": "/gridsome-starter-wikidata/q798034/index.html",
    "revision": "99ab9aa719eb16c5a2d352d8e9c427b8"
  },
  {
    "url": "/gridsome-starter-wikidata/q972196/index.html",
    "revision": "b903d68790a6afab89aaf161f21e78fc"
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