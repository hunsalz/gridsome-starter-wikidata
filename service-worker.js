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
    "revision": "17fde22c1d6b24a75929626131f66fd5"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1059211/index.json",
    "revision": "81c100312610fa3edab75690c17c12bd"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1142058/index.json",
    "revision": "8b51b78315f43f9f8f52195544e10b0b"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q11935346/index.json",
    "revision": "369ff5b8007b7ffbc718733b53c3b054"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1217213/index.json",
    "revision": "d2ada15b1ad8f6933af3d069d54c9cf3"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12418/index.json",
    "revision": "fa7d3f9c6fdb7ac1b8c8477abb084356"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1267893/index.json",
    "revision": "a9ea8f8b5db37674dcffd89093efc97d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12734910/index.json",
    "revision": "dba99a9278913abe824a1e01446dcd66"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q128910/index.json",
    "revision": "f70871e83d08ededed0bfbd297d6f730"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1327676/index.json",
    "revision": "af69ef30ae0ce01f9262fb6c1f1ab494"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1638622/index.json",
    "revision": "79d9be8ed6a8c3732fe6c3d4605d0fe8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1892745/index.json",
    "revision": "2569f08580db5c64a73e4b635b83e7c1"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q20174114/index.json",
    "revision": "e85a4529a772282ffa5607a73ba1802e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2045726/index.json",
    "revision": "3d253cf3494500a71a52cb8723d22c3e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2072801/index.json",
    "revision": "0f1b92482f17f04e53ed9c1e0f63e7a9"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2338404/index.json",
    "revision": "a7707296a377521c7a96cb0b172aa1fb"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2397593/index.json",
    "revision": "6375a19b0a405e9006c01b0e1c39c68a"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q27970282/index.json",
    "revision": "e72c00de51148f998b4253331255ae9e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3618186/index.json",
    "revision": "94648111b2a96d3bfd7bc395a816344f"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3800774/index.json",
    "revision": "02fdd70af1e4698058c6880320aef0a4"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3937378/index.json",
    "revision": "213b63b670eaf9965752772c2b4d3e45"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3985169/index.json",
    "revision": "7259eafe522bd76a4fda447c4b00aeff"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4009972/index.json",
    "revision": "79817e4f237374ee2310b4468ea1175f"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4390923/index.json",
    "revision": "b40ecd561f388da187135049504ca208"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q474338/index.json",
    "revision": "2437ac8c3a70c482edd1c53dcf3b8e96"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q5237905/index.json",
    "revision": "c34384eaf5758962143e25558fb4c5e8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q56280397/index.json",
    "revision": "548603a5adbe2fc99bb8250fa2c171a5"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q563727/index.json",
    "revision": "6c87339ffd5dfdb2c33c43e9e3e0141b"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q656434/index.json",
    "revision": "62d2de90f1a6113232b6e7ff2f3b90ad"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q6696013/index.json",
    "revision": "57ae58b0fc58261856f00009d98b0f10"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q698015/index.json",
    "revision": "52a4067f68b347c7967e015f69e21969"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q783215/index.json",
    "revision": "7229b4f64027f541948d6bac36ed29a9"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q797902/index.json",
    "revision": "cb6a19c4b0960895dd5421e98a8bf0f5"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q798034/index.json",
    "revision": "e1eb1067b259941328c34ad8bb63e1ca"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q972196/index.json",
    "revision": "e14d329d8ea691691149c1aa4336b6ae"
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
    "revision": "133ea3a498d8a21654e0a8141247ee58"
  },
  {
    "url": "/gridsome-starter-wikidata/manifest.json",
    "revision": "c4c4fdca57559c564290c246088b8d1f"
  },
  {
    "url": "/gridsome-starter-wikidata/q1059211/index.html",
    "revision": "af427a4f771048ffaa0d3f5f75c3883d"
  },
  {
    "url": "/gridsome-starter-wikidata/q1142058/index.html",
    "revision": "c31a4f436f40ed12f79fb63eaedfab83"
  },
  {
    "url": "/gridsome-starter-wikidata/q11935346/index.html",
    "revision": "d8a914c21598ceb751d12f541827c2f5"
  },
  {
    "url": "/gridsome-starter-wikidata/q1217213/index.html",
    "revision": "6b216d2957104b2643255a5ab49a9f8e"
  },
  {
    "url": "/gridsome-starter-wikidata/q12418/index.html",
    "revision": "83b81bd5ffc42a6694f58a2e9cf79dba"
  },
  {
    "url": "/gridsome-starter-wikidata/q1267893/index.html",
    "revision": "5ed7ab7851686910b33f2c484e3faaaf"
  },
  {
    "url": "/gridsome-starter-wikidata/q12734910/index.html",
    "revision": "2de30bf5b4881dda5908817db5223e77"
  },
  {
    "url": "/gridsome-starter-wikidata/q128910/index.html",
    "revision": "dfa5b2d0860e6084efb78152bf4881c7"
  },
  {
    "url": "/gridsome-starter-wikidata/q1327676/index.html",
    "revision": "e15c473340cdfa980cb9f45be23a831f"
  },
  {
    "url": "/gridsome-starter-wikidata/q1638622/index.html",
    "revision": "702dc24763a3bf86033c33c67f1b4ba5"
  },
  {
    "url": "/gridsome-starter-wikidata/q1892745/index.html",
    "revision": "dfc47e79ecfdca574aae145682b1aad2"
  },
  {
    "url": "/gridsome-starter-wikidata/q20174114/index.html",
    "revision": "06d1023b2907ebb9918907e1c5852f13"
  },
  {
    "url": "/gridsome-starter-wikidata/q2045726/index.html",
    "revision": "ad46c1486f4bbe0a29568ca6bd48bbfc"
  },
  {
    "url": "/gridsome-starter-wikidata/q2072801/index.html",
    "revision": "f5309fd8ca9975ac1b8fc6798eb2132a"
  },
  {
    "url": "/gridsome-starter-wikidata/q2338404/index.html",
    "revision": "408a634edf0b2d525d6bdb0312d08f04"
  },
  {
    "url": "/gridsome-starter-wikidata/q2397593/index.html",
    "revision": "5da73e131e47512fd78877d428fc774a"
  },
  {
    "url": "/gridsome-starter-wikidata/q27970282/index.html",
    "revision": "aea49361c361fb347dcc7e063ab9322e"
  },
  {
    "url": "/gridsome-starter-wikidata/q3618186/index.html",
    "revision": "9adec6688fc899a5292257cad2d8ce1c"
  },
  {
    "url": "/gridsome-starter-wikidata/q3800774/index.html",
    "revision": "b70d2aab6fdbf6a341999cf345be0761"
  },
  {
    "url": "/gridsome-starter-wikidata/q3937378/index.html",
    "revision": "72a43b893422a1ba2dd2d154a185b8e1"
  },
  {
    "url": "/gridsome-starter-wikidata/q3985169/index.html",
    "revision": "42c7498ccd3c88b2b20a81b8a386033a"
  },
  {
    "url": "/gridsome-starter-wikidata/q4009972/index.html",
    "revision": "cb9c8add562bc7ff24a069e3bdd067c2"
  },
  {
    "url": "/gridsome-starter-wikidata/q4390923/index.html",
    "revision": "c6561a256ac790b4cf462372224598d0"
  },
  {
    "url": "/gridsome-starter-wikidata/q474338/index.html",
    "revision": "36be0b119b0c4c4fb1719e2f22474e79"
  },
  {
    "url": "/gridsome-starter-wikidata/q5237905/index.html",
    "revision": "8bbb4569ada40b832aee793167fbb022"
  },
  {
    "url": "/gridsome-starter-wikidata/q56280397/index.html",
    "revision": "122360b87cbec8374d42dc09abf371d1"
  },
  {
    "url": "/gridsome-starter-wikidata/q563727/index.html",
    "revision": "d1114eb55187ff4a1b1ccfea157d1bed"
  },
  {
    "url": "/gridsome-starter-wikidata/q656434/index.html",
    "revision": "902467a79b353fec9dbc82174974a4e8"
  },
  {
    "url": "/gridsome-starter-wikidata/q6696013/index.html",
    "revision": "462d7bc9e84fd164aa870f07cee0e8f7"
  },
  {
    "url": "/gridsome-starter-wikidata/q698015/index.html",
    "revision": "b8cbc7dbda81810dc71a2254924acac7"
  },
  {
    "url": "/gridsome-starter-wikidata/q783215/index.html",
    "revision": "d941d9eafb52182c0034c87d626c2ec2"
  },
  {
    "url": "/gridsome-starter-wikidata/q797902/index.html",
    "revision": "8eccb90bf01a139ce1c5f02ae2e79f27"
  },
  {
    "url": "/gridsome-starter-wikidata/q798034/index.html",
    "revision": "7100747a2614d0d9513cb965131a38f7"
  },
  {
    "url": "/gridsome-starter-wikidata/q972196/index.html",
    "revision": "9221e7d874acb9325fe7e93dc2347b6f"
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