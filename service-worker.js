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
    "revision": "2f750d03b7b3fe8d57fe41f15d837d3f"
  },
  {
    "url": "/gridsome-starter-wikidata/404/index.html",
    "revision": "2f750d03b7b3fe8d57fe41f15d837d3f"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/css/0.styles.30436c83.css",
    "revision": "258c02d1708c2962b8ef58b403897506"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/404/index.json",
    "revision": "f931634387eaf112b22bc6301b800868"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/index.json",
    "revision": "7fae90eff797fd749fb113e25af9ce70"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1059211/index.json",
    "revision": "01eaeec31acf94cf0c706cc172ffba5d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1142058/index.json",
    "revision": "6f618ad95ff21ff2dde9e75c44c617cf"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q11935346/index.json",
    "revision": "be8919178e560409c00032eae6f0cd00"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1217213/index.json",
    "revision": "d05001030e9f071fb03eb201e2ed40b5"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12418/index.json",
    "revision": "f4094a90b2108487ecee18d960bdb059"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1267893/index.json",
    "revision": "83c9e4826f7158d8d3937ac21fe048a4"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12734910/index.json",
    "revision": "8885a369a21e9735a75499a5ff89710b"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q128910/index.json",
    "revision": "9676047dc23b6aa58d98fedfa066fc89"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1327676/index.json",
    "revision": "4eea78f7c3a100a28e7166d653b0ad9e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1638622/index.json",
    "revision": "89d80df5351de22ba581e76494cd7786"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1892745/index.json",
    "revision": "6480333dfb15a7a7848021fc4db16f92"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q20174114/index.json",
    "revision": "dffe5d98c6259ee6004a70f647fecce0"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2045726/index.json",
    "revision": "e1d0825ff8fedc62f2a0e47d93d65049"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2072801/index.json",
    "revision": "16eb0dbfa18a31571e9ccedc7cf1722f"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2338404/index.json",
    "revision": "d02019fef009e391037f8a890db992d8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2397593/index.json",
    "revision": "d7a36044aea4f186cda83a6525d0962f"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q27970282/index.json",
    "revision": "3efc4e86c393a41220cc1d1ba7a3d9bd"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3618186/index.json",
    "revision": "6a73e1157995afe5f0e357542debb439"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3800774/index.json",
    "revision": "beac4ac784d600eb15a3127fb9acc960"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3937378/index.json",
    "revision": "cf60d5ded9c97d8817e68511a864c935"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3985169/index.json",
    "revision": "d50c61181302427e057a914458563928"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4009972/index.json",
    "revision": "fefe1fc394aef8494d2ff4e6f540e2bd"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4390923/index.json",
    "revision": "64ae848b62883afe5c55e8fbd38bb1e0"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q474338/index.json",
    "revision": "adc9e7ccf4b086b7d6f87a6a8abc74ab"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q5237905/index.json",
    "revision": "129711427e157aecd067c5b224e9db8a"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q56280397/index.json",
    "revision": "8b8cbff2783da7b4517a16ff57be8964"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q563727/index.json",
    "revision": "799cb98c08760189d9c1e0680e797f06"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q656434/index.json",
    "revision": "e138ae49af9e3c99610b86cc3d291839"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q6696013/index.json",
    "revision": "631215339136c21cea6a9689bce4051b"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q698015/index.json",
    "revision": "8d5308ae91a59127cd03c18478afd4ba"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q783215/index.json",
    "revision": "06b313b9288e3285c4a6941254a7887c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q797902/index.json",
    "revision": "b8216292e7fc5c5886bda29fca57d027"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q798034/index.json",
    "revision": "c454d56b0d237ecf92b2ba889cab689e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q972196/index.json",
    "revision": "638a49ede26511bc7a07e5722aa8e632"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/app.b93466f1.js",
    "revision": "636f5fb448e55cdc1ec3c971c8b317f8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--node-modules--gridsome--app--pages--404-vue.d8e97352.js",
    "revision": "9f7db538505cf350b781f4a2de0f7ed0"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--src--pages--index-vue.24a7b01a.js",
    "revision": "36d06758917287f2bb894c61e915cce3"
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
    "revision": "155ecb6ce86ea4a1189e44cd6e0abfd9"
  },
  {
    "url": "/gridsome-starter-wikidata/manifest.json",
    "revision": "c4c4fdca57559c564290c246088b8d1f"
  },
  {
    "url": "/gridsome-starter-wikidata/q1059211/index.html",
    "revision": "9a35c92ac79f1d5019c75b5a23bf60bd"
  },
  {
    "url": "/gridsome-starter-wikidata/q1142058/index.html",
    "revision": "4d76781990a611ddcbea3ed6ff737a70"
  },
  {
    "url": "/gridsome-starter-wikidata/q11935346/index.html",
    "revision": "b9428d7d6c5c4e4dce37c925ca8a9f8c"
  },
  {
    "url": "/gridsome-starter-wikidata/q1217213/index.html",
    "revision": "0b42cde30df5a976ef17c3afe120c2e4"
  },
  {
    "url": "/gridsome-starter-wikidata/q12418/index.html",
    "revision": "4ce14ee61de9476a19f0691b2f4e12de"
  },
  {
    "url": "/gridsome-starter-wikidata/q1267893/index.html",
    "revision": "e67b92e4a9ee9ec3f1ba769f8eb27260"
  },
  {
    "url": "/gridsome-starter-wikidata/q12734910/index.html",
    "revision": "45052fff95185d511e2bb19c0c5e7c65"
  },
  {
    "url": "/gridsome-starter-wikidata/q128910/index.html",
    "revision": "2449ff6f02f58dfc987f6018ffa020ba"
  },
  {
    "url": "/gridsome-starter-wikidata/q1327676/index.html",
    "revision": "255d578e404f8d8250db7b5a057eaf61"
  },
  {
    "url": "/gridsome-starter-wikidata/q1638622/index.html",
    "revision": "43a85395d09d7962d3b3b8c32531f6f9"
  },
  {
    "url": "/gridsome-starter-wikidata/q1892745/index.html",
    "revision": "8d18bada98ddfee032999bcf744dc05b"
  },
  {
    "url": "/gridsome-starter-wikidata/q20174114/index.html",
    "revision": "30ee72b9fefbad5539502a793ef282ab"
  },
  {
    "url": "/gridsome-starter-wikidata/q2045726/index.html",
    "revision": "b10202af90d16a76a50dfbbe516fed10"
  },
  {
    "url": "/gridsome-starter-wikidata/q2072801/index.html",
    "revision": "f12dd5b3617546d6abaf3d5946ea3d60"
  },
  {
    "url": "/gridsome-starter-wikidata/q2338404/index.html",
    "revision": "23d56b2bd4db15e44c369366114dde08"
  },
  {
    "url": "/gridsome-starter-wikidata/q2397593/index.html",
    "revision": "b8bc0ad3915f8aefd8068452d229ec36"
  },
  {
    "url": "/gridsome-starter-wikidata/q27970282/index.html",
    "revision": "eeda3b4294f5ad011b9f74de9672adf3"
  },
  {
    "url": "/gridsome-starter-wikidata/q3618186/index.html",
    "revision": "5815f172adc5688d2539ae51966ea56d"
  },
  {
    "url": "/gridsome-starter-wikidata/q3800774/index.html",
    "revision": "d5fa47d103ed019dfe61b03237f8e9d3"
  },
  {
    "url": "/gridsome-starter-wikidata/q3937378/index.html",
    "revision": "80b566fe07c6b7ca9fafd19fb2e0896f"
  },
  {
    "url": "/gridsome-starter-wikidata/q3985169/index.html",
    "revision": "11d618e4055cef337d3609b4f6d17fcd"
  },
  {
    "url": "/gridsome-starter-wikidata/q4009972/index.html",
    "revision": "772d285960751d67cd2cc00d3fdff914"
  },
  {
    "url": "/gridsome-starter-wikidata/q4390923/index.html",
    "revision": "f8a01b744c7b31f4b0626c9e37f34003"
  },
  {
    "url": "/gridsome-starter-wikidata/q474338/index.html",
    "revision": "e7bcd4a7f6afe4a2eb177d5221466ed4"
  },
  {
    "url": "/gridsome-starter-wikidata/q5237905/index.html",
    "revision": "a1b9809fcc37a60757b5583c2f163a76"
  },
  {
    "url": "/gridsome-starter-wikidata/q56280397/index.html",
    "revision": "f26c3e49face5a25b2c8fe6dcfce7786"
  },
  {
    "url": "/gridsome-starter-wikidata/q563727/index.html",
    "revision": "b3c95efe12e06d93186059dd201c8bf3"
  },
  {
    "url": "/gridsome-starter-wikidata/q656434/index.html",
    "revision": "e85c6a712dff3c605fadbcb93a166aed"
  },
  {
    "url": "/gridsome-starter-wikidata/q6696013/index.html",
    "revision": "79f15363e36f9d084645e165e1cfd18d"
  },
  {
    "url": "/gridsome-starter-wikidata/q698015/index.html",
    "revision": "c860e3dc8213951fdc8f3c18e9a5e33c"
  },
  {
    "url": "/gridsome-starter-wikidata/q783215/index.html",
    "revision": "49cf23af6bdcb88c27546031abcade28"
  },
  {
    "url": "/gridsome-starter-wikidata/q797902/index.html",
    "revision": "b6ecb326c4a7e960cbe74714f2784b19"
  },
  {
    "url": "/gridsome-starter-wikidata/q798034/index.html",
    "revision": "a45b32a44ce3eb5f23b6eb33e68698ba"
  },
  {
    "url": "/gridsome-starter-wikidata/q972196/index.html",
    "revision": "5aad1ce5435a5a0ceca27fd5ecb1df18"
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