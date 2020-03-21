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
    "revision": "488670bf4166e0540c6fed06ded03b21"
  },
  {
    "url": "/gridsome-starter-wikidata/404/index.html",
    "revision": "488670bf4166e0540c6fed06ded03b21"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/css/0.styles.6a12966a.css",
    "revision": "5eeee8dfbd070d4b0da1af0f446c6b2e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/404/index.json",
    "revision": "f528f127f29851a9ddff1dc29101c34f"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/index.json",
    "revision": "78e4512ed9ccf7f67d14b8aaa7e0bb27"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1059211/index.json",
    "revision": "aef854de76cb9761e8db043fbe5a6a25"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1142058/index.json",
    "revision": "740b12e747c53895eff0d05337ed242a"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q11935346/index.json",
    "revision": "1c6a2d36566c013d6d0e28dd96d33f7a"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1217213/index.json",
    "revision": "42fef62193e086a40f8980dee82b3170"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12418/index.json",
    "revision": "57ae790a2a469e7fd216f2d5dcb86e83"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1267893/index.json",
    "revision": "90d3a7e074cbb9dddc55132abae1b47a"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q12734910/index.json",
    "revision": "adcb81cd1e81461e2943eb8339e0061a"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q128910/index.json",
    "revision": "92eb4be1307ed1f1d7c5054136f755ec"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1327676/index.json",
    "revision": "133519b7d6571d6ce95e016fdf8d5bbe"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1638622/index.json",
    "revision": "e83b1738be33f5e97fb6a88ea9b0d14a"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q1892745/index.json",
    "revision": "d0c770412f20ffc5dfdcf76b7e1475f5"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q20174114/index.json",
    "revision": "1f11673ba9e70601586cac58b8bc506a"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2045726/index.json",
    "revision": "eaaae0424275a04f4de9c58ec16ad987"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2072801/index.json",
    "revision": "47f5358a049056ad49e0130c362abfaa"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2338404/index.json",
    "revision": "eb26bc3faf3f5a3fff0b8e8dbedfb655"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q2397593/index.json",
    "revision": "28b3a70d8127b01581b0288507f0ddd8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q27970282/index.json",
    "revision": "34b1fa59430d25a78b60f43ed67fbc2e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3618186/index.json",
    "revision": "aac9f631e9833115b52f2f3df334a082"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3800774/index.json",
    "revision": "61e07fb2e8d287aee33510ef41db3fd8"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3937378/index.json",
    "revision": "11bc811a73b1e17987e7e90eab7f673c"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q3985169/index.json",
    "revision": "28d33d362fc60df828746c27b6cf7db2"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4009972/index.json",
    "revision": "b14821f06be5b80a5f3de82f734e695e"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q4390923/index.json",
    "revision": "f22b12643fa5b1fe04f58e0525df701d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q474338/index.json",
    "revision": "b8caba19ee7ce6dd8eb6f1c30de2668d"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q5237905/index.json",
    "revision": "0fe11da694f446668ac6ec083237b1af"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q56280397/index.json",
    "revision": "f53af4359faedfcc728843759896a079"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q563727/index.json",
    "revision": "a655810fd34e12f9a3fd79e049c142e7"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q656434/index.json",
    "revision": "46c9a12a95692025a15b06977c662f61"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q6696013/index.json",
    "revision": "3d9b81f4521409220fec6abf8f841c86"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q698015/index.json",
    "revision": "29fbc64b90414bd8051d0ca56d6d2ff1"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q783215/index.json",
    "revision": "91c4d1b8d0f01186a53b062e13282db9"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q797902/index.json",
    "revision": "0ddbb29b93a0371d64aef47f78e86d36"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q798034/index.json",
    "revision": "1bfc1f5e1452d4b05dd8816ac63db89b"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/data/q972196/index.json",
    "revision": "173af364b9fbdc817dd4cd7ab23db575"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/app.a4cba111.js",
    "revision": "b319798affc6d09ba7cc7e20fe99b4af"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--node-modules--gridsome--app--pages--404-vue.d8e97352.js",
    "revision": "9f7db538505cf350b781f4a2de0f7ed0"
  },
  {
    "url": "/gridsome-starter-wikidata/assets/js/page--src--pages--index-vue.ccdee688.js",
    "revision": "e6712c19bbf79a5e4bdcf92b4babe7d1"
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
    "revision": "9da419c813c50c7b69461803600738e3"
  },
  {
    "url": "/gridsome-starter-wikidata/manifest.json",
    "revision": "c4c4fdca57559c564290c246088b8d1f"
  },
  {
    "url": "/gridsome-starter-wikidata/q1059211/index.html",
    "revision": "109792aa09f285deec5e11308e2c494e"
  },
  {
    "url": "/gridsome-starter-wikidata/q1142058/index.html",
    "revision": "3608a6c78d65f5c59327b117810932bf"
  },
  {
    "url": "/gridsome-starter-wikidata/q11935346/index.html",
    "revision": "979211788508bc7e77ecfafc7713f698"
  },
  {
    "url": "/gridsome-starter-wikidata/q1217213/index.html",
    "revision": "7714188204c3292f060e50e9aef68025"
  },
  {
    "url": "/gridsome-starter-wikidata/q12418/index.html",
    "revision": "fb6c5314defa49442049a0e794f01b15"
  },
  {
    "url": "/gridsome-starter-wikidata/q1267893/index.html",
    "revision": "58554495ae0683df3a1589f521987d0f"
  },
  {
    "url": "/gridsome-starter-wikidata/q12734910/index.html",
    "revision": "b670d5fc9cb2f82cbc814e8d6a8af243"
  },
  {
    "url": "/gridsome-starter-wikidata/q128910/index.html",
    "revision": "ed8f2e61ab057c6530798420a15b9f7e"
  },
  {
    "url": "/gridsome-starter-wikidata/q1327676/index.html",
    "revision": "19db4c563f8c3214ed8bd41827136e9d"
  },
  {
    "url": "/gridsome-starter-wikidata/q1638622/index.html",
    "revision": "75ed8cf05490eedddbeb6036401e8d68"
  },
  {
    "url": "/gridsome-starter-wikidata/q1892745/index.html",
    "revision": "4f8575d5a629f936b0256a9fdd2d4ab5"
  },
  {
    "url": "/gridsome-starter-wikidata/q20174114/index.html",
    "revision": "47666b6fcecd45571a36079b73d6a8c9"
  },
  {
    "url": "/gridsome-starter-wikidata/q2045726/index.html",
    "revision": "05adc82bcdf00bc628d758a65550cec1"
  },
  {
    "url": "/gridsome-starter-wikidata/q2072801/index.html",
    "revision": "5739dcde05967c06f829c8bcdb8f5129"
  },
  {
    "url": "/gridsome-starter-wikidata/q2338404/index.html",
    "revision": "e93219c1f3563a9a554b05d5bf9437b2"
  },
  {
    "url": "/gridsome-starter-wikidata/q2397593/index.html",
    "revision": "fdcdf98d013e3bbef0750fcf87240cb9"
  },
  {
    "url": "/gridsome-starter-wikidata/q27970282/index.html",
    "revision": "8fdadaac89476f73dc7de8857fac5c94"
  },
  {
    "url": "/gridsome-starter-wikidata/q3618186/index.html",
    "revision": "1abd916606d2be6a999d6d1294d2ec11"
  },
  {
    "url": "/gridsome-starter-wikidata/q3800774/index.html",
    "revision": "9cddf4e3595c5789cec8f983a7343a70"
  },
  {
    "url": "/gridsome-starter-wikidata/q3937378/index.html",
    "revision": "899c8fb8dd17145d752127f99e9f005c"
  },
  {
    "url": "/gridsome-starter-wikidata/q3985169/index.html",
    "revision": "0eba93aa6a3d77f9730753d13819d4bd"
  },
  {
    "url": "/gridsome-starter-wikidata/q4009972/index.html",
    "revision": "ac9a0c90da01fc63d1a0b2ea15d236f9"
  },
  {
    "url": "/gridsome-starter-wikidata/q4390923/index.html",
    "revision": "73cb4d31de88e5c8cc654cd22e1e5417"
  },
  {
    "url": "/gridsome-starter-wikidata/q474338/index.html",
    "revision": "d05150da02f90f844d61913a26fd8ea2"
  },
  {
    "url": "/gridsome-starter-wikidata/q5237905/index.html",
    "revision": "71058b8e99278ee59bc7242e895f5529"
  },
  {
    "url": "/gridsome-starter-wikidata/q56280397/index.html",
    "revision": "f23c5f27eb68c74335b7e610fae4cddf"
  },
  {
    "url": "/gridsome-starter-wikidata/q563727/index.html",
    "revision": "ef270ec4ef08ae257723d1757fba50aa"
  },
  {
    "url": "/gridsome-starter-wikidata/q656434/index.html",
    "revision": "b03d6ae89624f5526f5b499d21e2816f"
  },
  {
    "url": "/gridsome-starter-wikidata/q6696013/index.html",
    "revision": "164796a855abe8279d70aefe34d79bfc"
  },
  {
    "url": "/gridsome-starter-wikidata/q698015/index.html",
    "revision": "465c96bb38b7d876d22439f47ba3cb28"
  },
  {
    "url": "/gridsome-starter-wikidata/q783215/index.html",
    "revision": "e92d97c8abed1743a2870bb4ac6cb65f"
  },
  {
    "url": "/gridsome-starter-wikidata/q797902/index.html",
    "revision": "6de8901e1fe905e8a563696b1180e487"
  },
  {
    "url": "/gridsome-starter-wikidata/q798034/index.html",
    "revision": "f08d657c7254636c60b254e1259053b4"
  },
  {
    "url": "/gridsome-starter-wikidata/q972196/index.html",
    "revision": "437db290d1fb312d6a0acf1c15177ecb"
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