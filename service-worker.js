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
    "url": "404.html",
    "revision": "fa6a685ebc59de4817ea83ab016afd5a"
  },
  {
    "url": "404/index.html",
    "revision": "fa6a685ebc59de4817ea83ab016afd5a"
  },
  {
    "url": "assets/css/0.styles.ec2040d0.css",
    "revision": "64f6af78febc4b6e6389e16eebb463bf"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "b8d0e5257b30ff31f9c95f01bae3fd1f"
  },
  {
    "url": "assets/data/index.json",
    "revision": "3d023d1e6d869379272e160ddfde5481"
  },
  {
    "url": "assets/data/q1059211/index.json",
    "revision": "7a04b17dfbc5ac623157d6ce22eaf632"
  },
  {
    "url": "assets/data/q1142058/index.json",
    "revision": "95ae779d789b6f1315b422558e0b66e8"
  },
  {
    "url": "assets/data/q11935346/index.json",
    "revision": "6fcd32805c7dfe381aa56c831b27fa17"
  },
  {
    "url": "assets/data/q1217213/index.json",
    "revision": "e50ad2532db012205de946b825c71fb8"
  },
  {
    "url": "assets/data/q12418/index.json",
    "revision": "3ea389f8f5f31a779e9d8592f69b5cda"
  },
  {
    "url": "assets/data/q1267893/index.json",
    "revision": "322d4303f0a683cacd52f1f5f09f7a07"
  },
  {
    "url": "assets/data/q12734910/index.json",
    "revision": "63b5dc6003d4d83ea425a65f614edb06"
  },
  {
    "url": "assets/data/q128910/index.json",
    "revision": "4de659d658eea73719861c8c71000ee4"
  },
  {
    "url": "assets/data/q1327676/index.json",
    "revision": "c80d9970d50cbd52985c0e67c02db21d"
  },
  {
    "url": "assets/data/q1638622/index.json",
    "revision": "afc94c48daccf605581b368ebd31dd08"
  },
  {
    "url": "assets/data/q1892745/index.json",
    "revision": "ee0df642b5c2fe9b011cf65da0705fb9"
  },
  {
    "url": "assets/data/q20174114/index.json",
    "revision": "92864cc32fd376dfc62e85efcea65d7a"
  },
  {
    "url": "assets/data/q2045726/index.json",
    "revision": "cba211cad5098e1d113fcafcc2e6afc6"
  },
  {
    "url": "assets/data/q2072801/index.json",
    "revision": "1ee096c7cf0a2171a275bd6282520eff"
  },
  {
    "url": "assets/data/q2338404/index.json",
    "revision": "6e3ec0f92257380c7511c8e5b4a59d8f"
  },
  {
    "url": "assets/data/q2397593/index.json",
    "revision": "d1ff79ec708a4e0525ae5ddefb137dea"
  },
  {
    "url": "assets/data/q27970282/index.json",
    "revision": "e2cf25476e1b3053a9765284c87708c7"
  },
  {
    "url": "assets/data/q3618186/index.json",
    "revision": "a3307582423d846a2e07e9a82d4cd4e8"
  },
  {
    "url": "assets/data/q3800774/index.json",
    "revision": "cf2ebc2501a9d4d1949bf8b2cb1f863a"
  },
  {
    "url": "assets/data/q3937378/index.json",
    "revision": "4edc548d4fd1be999699bb67479dc20e"
  },
  {
    "url": "assets/data/q3985169/index.json",
    "revision": "191f76a66e7fde8e8bd963b7a28fc393"
  },
  {
    "url": "assets/data/q4009972/index.json",
    "revision": "63f6024fe378e4c6cb81f3ec55236b8d"
  },
  {
    "url": "assets/data/q4390923/index.json",
    "revision": "3691877e82493f74030505c49c7f5292"
  },
  {
    "url": "assets/data/q474338/index.json",
    "revision": "a020042c4b84cf48f4bafa7a6ed4ae0c"
  },
  {
    "url": "assets/data/q5237905/index.json",
    "revision": "a42a3a0b6fa6a50fb4cd02644acdc59f"
  },
  {
    "url": "assets/data/q56280397/index.json",
    "revision": "fc9363d8420db827ef320fb6201e3ddc"
  },
  {
    "url": "assets/data/q563727/index.json",
    "revision": "87f0c45bfed1f0823748c9f33841237b"
  },
  {
    "url": "assets/data/q656434/index.json",
    "revision": "8a5d7db5a51132fca6adf61eea7feb89"
  },
  {
    "url": "assets/data/q6696013/index.json",
    "revision": "411f6293d3fd94afe52566771dff5080"
  },
  {
    "url": "assets/data/q698015/index.json",
    "revision": "99cf2db14f94c4f5281f59d2632f6f81"
  },
  {
    "url": "assets/data/q783215/index.json",
    "revision": "3aa9a5d49b8a42fe17ef783b1c40e9cd"
  },
  {
    "url": "assets/data/q797902/index.json",
    "revision": "b9bf346eecf3f6e613c354281855efd2"
  },
  {
    "url": "assets/data/q798034/index.json",
    "revision": "42e5eea4395402714e240f35928684ee"
  },
  {
    "url": "assets/data/q972196/index.json",
    "revision": "7b0daf94e722066f0183f761fa768871"
  },
  {
    "url": "assets/js/app.1d34b06f.js",
    "revision": "797de006812e48229bf821d811fb5a65"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.56704fa6.js",
    "revision": "bca3f9b66b03ee035f95b15440b269bb"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.cb5333d4.js",
    "revision": "6c68c015a4f7782b8fa0536e26815cee"
  },
  {
    "url": "assets/js/page--src--templates--record-vue.6caa7d45.js",
    "revision": "948d0aa99f1aaeaaace65765c0e05f9f"
  },
  {
    "url": "assets/static/Annunciation (Leonardo) (cropped).09b17d9.c213d47c547dd54a11ed7abb4e3c3caf.jpg",
    "revision": "d098ed036b31a1841438cf8569d9ff12"
  },
  {
    "url": "assets/static/Annunciation (Leonardo) (cropped).0b85c65.c213d47c547dd54a11ed7abb4e3c3caf.jpg",
    "revision": "7f19f2903be8b000010c68779bf7a4a4"
  },
  {
    "url": "assets/static/Annunciation (Leonardo) (cropped).1b91758.c213d47c547dd54a11ed7abb4e3c3caf.jpg",
    "revision": "2c96ac72913a75c7cad94987019d4706"
  },
  {
    "url": "assets/static/Annunciation (Leonardo) (cropped).3df3210.c213d47c547dd54a11ed7abb4e3c3caf.jpg",
    "revision": "80fd9ad495acc79bd33fa16b59c90d9e"
  },
  {
    "url": "assets/static/Annunciation (Leonardo) (cropped).81b85c1.c213d47c547dd54a11ed7abb4e3c3caf.jpg",
    "revision": "aef046ffb46fdaf000da7e02da009663"
  },
  {
    "url": "assets/static/Bacchus (painting).1b91758.b2269e74997ccd174bd2f27dfb467ea3.jpg",
    "revision": "c879266d32859a7fb615dd44698d8db6"
  },
  {
    "url": "assets/static/Bacchus (painting).6cd073f.b2269e74997ccd174bd2f27dfb467ea3.jpg",
    "revision": "245654345a11e8f15808f22f601d76be"
  },
  {
    "url": "assets/static/Bacchus (painting).81b85c1.b2269e74997ccd174bd2f27dfb467ea3.jpg",
    "revision": "178194e1dc03ec80dbaed77c2ad60723"
  },
  {
    "url": "assets/static/Dama z gronostajem.09b17d9.bccd0147e9484b86947ea92b4356b54e.jpg",
    "revision": "17c433670b5648a62b566085e79f6518"
  },
  {
    "url": "assets/static/Dama z gronostajem.0b85c65.bccd0147e9484b86947ea92b4356b54e.jpg",
    "revision": "0eb819a23583cb39ac4d7c4d60af0034"
  },
  {
    "url": "assets/static/Dama z gronostajem.1b91758.bccd0147e9484b86947ea92b4356b54e.jpg",
    "revision": "13a782ba39f338e2a95395f534e98c97"
  },
  {
    "url": "assets/static/Dama z gronostajem.3df3210.bccd0147e9484b86947ea92b4356b54e.jpg",
    "revision": "81f3afc85423a6733265f1e361dab6da"
  },
  {
    "url": "assets/static/Dama z gronostajem.81b85c1.bccd0147e9484b86947ea92b4356b54e.jpg",
    "revision": "db7bc327181b23cd2fc5cc8acb38785d"
  },
  {
    "url": "assets/static/favicon.1539b60.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "7e3c420ed3359221ac22eedbc5cc1630"
  },
  {
    "url": "assets/static/favicon.62d22cb.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "2f85c47cd65b86c6507ff18b2b8d5e98"
  },
  {
    "url": "assets/static/favicon.7b22250.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "fa38503a9bbe98901bd244b830e4d6c5"
  },
  {
    "url": "assets/static/favicon.ac8d93a.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "6b22178d5429b8ac29e5ced482659f49"
  },
  {
    "url": "assets/static/favicon.b9532cc.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "540320e5aa9702b00a08f9e00d7a921e"
  },
  {
    "url": "assets/static/favicon.ce0531f.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "a8710ab24cde9ded477cd08f602f7349"
  },
  {
    "url": "assets/static/favicon.dc0cdc5.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "7e2074d4885eacfb8d44276b74beac92"
  },
  {
    "url": "assets/static/favicon.f22e9f3.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "94b22eed0bfc12ff09d62a86659c4fab"
  },
  {
    "url": "assets/static/Giampetrino-Leonardo.1b91758.5313919b6a90d4bd64c1b67b9998046b.jpg",
    "revision": "1487b649e630192f660894cc517dddfc"
  },
  {
    "url": "assets/static/Giampetrino-Leonardo.4250cd3.5313919b6a90d4bd64c1b67b9998046b.jpg",
    "revision": "2b79d4b7cce2451be739a2659578547c"
  },
  {
    "url": "assets/static/Giampetrino-Leonardo.81b85c1.5313919b6a90d4bd64c1b67b9998046b.jpg",
    "revision": "be4cef4c988ec41968db014088f86aa5"
  },
  {
    "url": "assets/static/L'Annonciation, by Leonardo da Vinci, from C2RMF retouched.09b17d9.4ef72fdbb4a64219eeec52aff6db2a91.jpg",
    "revision": "79605272e3c14a404bd5c33d6cf979c4"
  },
  {
    "url": "assets/static/L'Annonciation, by Leonardo da Vinci, from C2RMF retouched.0b85c65.4ef72fdbb4a64219eeec52aff6db2a91.jpg",
    "revision": "edff22be95374ccb5d7aac2cbb9dedb8"
  },
  {
    "url": "assets/static/L'Annonciation, by Leonardo da Vinci, from C2RMF retouched.1b91758.4ef72fdbb4a64219eeec52aff6db2a91.jpg",
    "revision": "ecbdc54f9de65e469bcbbe8482c30b96"
  },
  {
    "url": "assets/static/L'Annonciation, by Leonardo da Vinci, from C2RMF retouched.3df3210.4ef72fdbb4a64219eeec52aff6db2a91.jpg",
    "revision": "05f0b16b443aba62991f0733c6c02523"
  },
  {
    "url": "assets/static/L'Annonciation, by Leonardo da Vinci, from C2RMF retouched.81b85c1.4ef72fdbb4a64219eeec52aff6db2a91.jpg",
    "revision": "7317e83695903472a8515690effd92f3"
  },
  {
    "url": "assets/static/La Battaglia di Anghiari di Leonardo.1b91758.8c9f2af7fad117101ac2b2f8171849db.jpg",
    "revision": "4a85ad3fa1a5b3a97adf82b610b79ca7"
  },
  {
    "url": "assets/static/La Battaglia di Anghiari di Leonardo.81b85c1.8c9f2af7fad117101ac2b2f8171849db.jpg",
    "revision": "26c0ba0845ef16cc3482e00184144a68"
  },
  {
    "url": "assets/static/La Battaglia di Anghiari di Leonardo.d09e26b.8c9f2af7fad117101ac2b2f8171849db.jpg",
    "revision": "a1742ca8a931dfa7d0c1eae61d67c228"
  },
  {
    "url": "assets/static/Lascapigliata.1b91758.068c67493d30ea3ec4cdcd1c9aff1897.jpg",
    "revision": "19cebbba58fd6f60e995f25b36240744"
  },
  {
    "url": "assets/static/Lascapigliata.3df3210.068c67493d30ea3ec4cdcd1c9aff1897.jpg",
    "revision": "eca28815d7a7c875440757eaddc31016"
  },
  {
    "url": "assets/static/Lascapigliata.444cfdd.068c67493d30ea3ec4cdcd1c9aff1897.jpg",
    "revision": "3349dd918162442be7bafd7d8ba52e2e"
  },
  {
    "url": "assets/static/Lascapigliata.81b85c1.068c67493d30ea3ec4cdcd1c9aff1897.jpg",
    "revision": "f667678c97bbb93f9c8fd43e157c5163"
  },
  {
    "url": "assets/static/Last Supper by Leonardo da Vinci.09b17d9.05b2d4532a86f49aa77f4a00af1854ad.jpg",
    "revision": "42c4eca0e57cf8743cdcd8a327594160"
  },
  {
    "url": "assets/static/Last Supper by Leonardo da Vinci.0b85c65.05b2d4532a86f49aa77f4a00af1854ad.jpg",
    "revision": "c03f6b3c2b1c56f764ef911f3e6ef1fa"
  },
  {
    "url": "assets/static/Last Supper by Leonardo da Vinci.1b91758.05b2d4532a86f49aa77f4a00af1854ad.jpg",
    "revision": "3d56ff16ea90d7c37989d9ac8e7c1ae2"
  },
  {
    "url": "assets/static/Last Supper by Leonardo da Vinci.3df3210.05b2d4532a86f49aa77f4a00af1854ad.jpg",
    "revision": "099abbec3fd7f73bf5498d46f5260804"
  },
  {
    "url": "assets/static/Last Supper by Leonardo da Vinci.81b85c1.05b2d4532a86f49aa77f4a00af1854ad.jpg",
    "revision": "fb2ea9b4481af113a2ab68d990fbbde1"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Adorazione dei Magi - Google Art Project.09b17d9.7d7dc8c217bd9056e98efae20d6cde1d.jpg",
    "revision": "2c14a51ddfceebf9a8f06ecce178ef45"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Adorazione dei Magi - Google Art Project.0b85c65.7d7dc8c217bd9056e98efae20d6cde1d.jpg",
    "revision": "6751d34962de2d0c896dad8b345d9ba0"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Adorazione dei Magi - Google Art Project.1b91758.7d7dc8c217bd9056e98efae20d6cde1d.jpg",
    "revision": "2586bc716963fcc7f9578c4b6cbca353"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Adorazione dei Magi - Google Art Project.3df3210.7d7dc8c217bd9056e98efae20d6cde1d.jpg",
    "revision": "45e73d726e061cc7edb273d66ececc88"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Adorazione dei Magi - Google Art Project.81b85c1.7d7dc8c217bd9056e98efae20d6cde1d.jpg",
    "revision": "99fad71b2295f86b6f7786750e8224b9"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Ginevra de' Benci - Google Art Project.09b17d9.2ad14401c6a5d5d48c7cd9d0e599d5eb.jpg",
    "revision": "c087847998853ee30b09c216102e2984"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Ginevra de' Benci - Google Art Project.0b85c65.2ad14401c6a5d5d48c7cd9d0e599d5eb.jpg",
    "revision": "bc577b41240fba71c24efd138c894aa1"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Ginevra de' Benci - Google Art Project.1b91758.2ad14401c6a5d5d48c7cd9d0e599d5eb.jpg",
    "revision": "0fb945d99e4bf4864f3bf31bfb1ff800"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Ginevra de' Benci - Google Art Project.3df3210.2ad14401c6a5d5d48c7cd9d0e599d5eb.jpg",
    "revision": "d29bb942a3f4893b05cbd1ca2a324e7e"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Ginevra de' Benci - Google Art Project.81b85c1.2ad14401c6a5d5d48c7cd9d0e599d5eb.jpg",
    "revision": "67f621b301b9678c04fcc5a89b4b1237"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Portrait of a Musician.81b85c1.b3a70c3e0103090ea9fa66ee4fbfde63.jpg",
    "revision": "c2e5bd549492a166664b26cdf9b03ccd"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Portrait of a Musician.9529ca8.b3a70c3e0103090ea9fa66ee4fbfde63.jpg",
    "revision": "fec77ff1812f25303902180e42847c5d"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Saint Jerome.0b85c65.f1f11c742e11885540db02ddc9c4294b.jpg",
    "revision": "10b4a641b4e28253f25745dcb60af642"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Saint Jerome.1b91758.f1f11c742e11885540db02ddc9c4294b.jpg",
    "revision": "417c84a67db07828e0286d8d1d5c4f0a"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Saint Jerome.3df3210.f1f11c742e11885540db02ddc9c4294b.jpg",
    "revision": "f2084b5d76edbd57c11494f7481a8f89"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Saint Jerome.81b85c1.f1f11c742e11885540db02ddc9c4294b.jpg",
    "revision": "8d049a837b87bb7700a56b5108e0edca"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Saint John the Baptist C2RMF retouched.09b17d9.280bb281cb36581ba072e791c27f17ad.jpg",
    "revision": "81bd0af7da96a85eff7e94e08a9eada0"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Saint John the Baptist C2RMF retouched.0b85c65.280bb281cb36581ba072e791c27f17ad.jpg",
    "revision": "7685ed90c35cb23e439b7fdda85b9b9b"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Saint John the Baptist C2RMF retouched.1b91758.280bb281cb36581ba072e791c27f17ad.jpg",
    "revision": "cb918ae13a7ba7475d57090b9d45a53f"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Saint John the Baptist C2RMF retouched.3df3210.280bb281cb36581ba072e791c27f17ad.jpg",
    "revision": "ea774ac8d78c245f63b016efe2ad9c1a"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Saint John the Baptist C2RMF retouched.81b85c1.280bb281cb36581ba072e791c27f17ad.jpg",
    "revision": "ee8570d119f099850a13c4ca944d0abf"
  },
  {
    "url": "assets/static/Leonardo Da Vinci - Vergine delle Rocce (Louvre).09b17d9.2cc4912e0e0fa9129d8ec8d7061871b9.jpg",
    "revision": "c71259918d1b81558509c29d97dd9fa3"
  },
  {
    "url": "assets/static/Leonardo Da Vinci - Vergine delle Rocce (Louvre).0b85c65.2cc4912e0e0fa9129d8ec8d7061871b9.jpg",
    "revision": "56e8c8363e98a2cc9fe6741bd8eafebb"
  },
  {
    "url": "assets/static/Leonardo Da Vinci - Vergine delle Rocce (Louvre).1b91758.2cc4912e0e0fa9129d8ec8d7061871b9.jpg",
    "revision": "f7713530eed9d44a489c1643a529884d"
  },
  {
    "url": "assets/static/Leonardo Da Vinci - Vergine delle Rocce (Louvre).3df3210.2cc4912e0e0fa9129d8ec8d7061871b9.jpg",
    "revision": "da907cb5290697cb8c9096b5fd74de9e"
  },
  {
    "url": "assets/static/Leonardo Da Vinci - Vergine delle Rocce (Louvre).81b85c1.2cc4912e0e0fa9129d8ec8d7061871b9.jpg",
    "revision": "61e78561724cccd76fca70ca892ed6fa"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Virgin and Child with St Anne C2RMF retouched.09b17d9.f2d261a25aca1b12365df9a7195b0cde.jpg",
    "revision": "5531d13806ab43ac110dd149dd9c50fe"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Virgin and Child with St Anne C2RMF retouched.0b85c65.f2d261a25aca1b12365df9a7195b0cde.jpg",
    "revision": "9f90d3c0f209ebd6a5b8c19d2b46520d"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Virgin and Child with St Anne C2RMF retouched.1b91758.f2d261a25aca1b12365df9a7195b0cde.jpg",
    "revision": "7dc269e56cfa11c2c9a7fd8d6cb91dff"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Virgin and Child with St Anne C2RMF retouched.3df3210.f2d261a25aca1b12365df9a7195b0cde.jpg",
    "revision": "7fc8589f44dced8952388481c797e7da"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Virgin and Child with St Anne C2RMF retouched.81b85c1.f2d261a25aca1b12365df9a7195b0cde.jpg",
    "revision": "002a59ab0c73bb41ff2a078d8637f3a7"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Wreath of Laurel, Palm, and Juniper with a Scroll inscribed Virtutem Forum Decorat (reverse) - Google Art Project.09b17d9.0a1dca4232893705273286a9fb714d22.jpg",
    "revision": "f7a16575b8c4c8b6f4eb9f6a5ca34f83"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Wreath of Laurel, Palm, and Juniper with a Scroll inscribed Virtutem Forum Decorat (reverse) - Google Art Project.0b85c65.0a1dca4232893705273286a9fb714d22.jpg",
    "revision": "ae6bcb3e1fbc83188bded926f11f2b38"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Wreath of Laurel, Palm, and Juniper with a Scroll inscribed Virtutem Forum Decorat (reverse) - Google Art Project.1b91758.0a1dca4232893705273286a9fb714d22.jpg",
    "revision": "7c922060e22054895e3c5cd5addb1013"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Wreath of Laurel, Palm, and Juniper with a Scroll inscribed Virtutem Forum Decorat (reverse) - Google Art Project.3df3210.0a1dca4232893705273286a9fb714d22.jpg",
    "revision": "d88da422871777061a1b9373cbb3c52e"
  },
  {
    "url": "assets/static/Leonardo da Vinci - Wreath of Laurel, Palm, and Juniper with a Scroll inscribed Virtutem Forum Decorat (reverse) - Google Art Project.81b85c1.0a1dca4232893705273286a9fb714d22.jpg",
    "revision": "c632361d61009a79a77ec014041584b6"
  },
  {
    "url": "assets/static/Leonardo da Vinci (attrib) - The Holy Infants.1b91758.56eabf68f70403eabec477a049dab936.jpg",
    "revision": "ca41b9a5767ad33b3171762ff4adc64e"
  },
  {
    "url": "assets/static/Leonardo da Vinci (attrib) - The Holy Infants.52c055d.56eabf68f70403eabec477a049dab936.jpg",
    "revision": "1b9afd23f96411eeb85b320d92db7bf0"
  },
  {
    "url": "assets/static/Leonardo da Vinci (attrib) - The Holy Infants.81b85c1.56eabf68f70403eabec477a049dab936.jpg",
    "revision": "7212a1142282dc92be9ffa39f0e632ca"
  },
  {
    "url": "assets/static/Leonardo da Vinci (attrib)- la Belle Ferroniere.198d85a.cd46053ab9b973974fb835f0d5f78b1f.jpg",
    "revision": "2866abaa9cec360c8c97526d17507878"
  },
  {
    "url": "assets/static/Leonardo da Vinci (attrib)- la Belle Ferroniere.1b91758.cd46053ab9b973974fb835f0d5f78b1f.jpg",
    "revision": "d4ff69e8e4060b6a615bdc2e16953d41"
  },
  {
    "url": "assets/static/Leonardo da Vinci (attrib)- la Belle Ferroniere.3df3210.cd46053ab9b973974fb835f0d5f78b1f.jpg",
    "revision": "6b15fa71223aaa01dfba0db3f63485ca"
  },
  {
    "url": "assets/static/Leonardo da Vinci (attrib)- la Belle Ferroniere.81b85c1.cd46053ab9b973974fb835f0d5f78b1f.jpg",
    "revision": "b84a7d7101a30feb3912d089f05d6ce0"
  },
  {
    "url": "assets/static/Leonardo da Vinci 026.1b91758.57bedf5eed4a8e2eafe99ed061934e69.jpg",
    "revision": "767669cbbc2acf483a71b993ab8c8b54"
  },
  {
    "url": "assets/static/Leonardo da Vinci 026.81b85c1.57bedf5eed4a8e2eafe99ed061934e69.jpg",
    "revision": "2047eb2174eda34358a6382d3e3c7b0d"
  },
  {
    "url": "assets/static/Leonardo da Vinci 026.e4a3c47.57bedf5eed4a8e2eafe99ed061934e69.jpg",
    "revision": "ea67541fdc0ae697f8d859cb11f7ee06"
  },
  {
    "url": "assets/static/Leonardo da Vinci attributed - Madonna Litta.09b17d9.d3699f37d095c9cd4164ae867a53c931.jpg",
    "revision": "6c28d1748ce1f3fc406e6eb0cb2b1039"
  },
  {
    "url": "assets/static/Leonardo da Vinci attributed - Madonna Litta.0b85c65.d3699f37d095c9cd4164ae867a53c931.jpg",
    "revision": "4fe3d7bba1f1e74da3b0ceb0bf27fed3"
  },
  {
    "url": "assets/static/Leonardo da Vinci attributed - Madonna Litta.1b91758.d3699f37d095c9cd4164ae867a53c931.jpg",
    "revision": "af1f8d43356d750fbc4155f55fc4d040"
  },
  {
    "url": "assets/static/Leonardo da Vinci attributed - Madonna Litta.3df3210.d3699f37d095c9cd4164ae867a53c931.jpg",
    "revision": "100c1fa516ad3342e4131629176f1760"
  },
  {
    "url": "assets/static/Leonardo da Vinci attributed - Madonna Litta.81b85c1.d3699f37d095c9cd4164ae867a53c931.jpg",
    "revision": "e9cee76ba439bc0b29ac65676ece3893"
  },
  {
    "url": "assets/static/Leonardo da Vinci LUCAN Hohenstatt 1 portrait.81b85c1.c10ea0e6bf8b67ea406615167da8ea45.jpg",
    "revision": "15e462c1531801f7916bc6294aaca0d6"
  },
  {
    "url": "assets/static/Leonardo da Vinci LUCAN Hohenstatt 1 portrait.ecab69e.c10ea0e6bf8b67ea406615167da8ea45.jpg",
    "revision": "ac7cbb4db69b77581c7de346404099dd"
  },
  {
    "url": "assets/static/Leonardo da Vinci Virgin of the Rocks (National Gallery London).09b17d9.883bf0aff174de674e1be6c3ee2ec228.jpg",
    "revision": "66a683f893361d151402813886dea152"
  },
  {
    "url": "assets/static/Leonardo da Vinci Virgin of the Rocks (National Gallery London).0b85c65.883bf0aff174de674e1be6c3ee2ec228.jpg",
    "revision": "24a36549e462f45cd461b1dea160abe3"
  },
  {
    "url": "assets/static/Leonardo da Vinci Virgin of the Rocks (National Gallery London).1b91758.883bf0aff174de674e1be6c3ee2ec228.jpg",
    "revision": "c2a81ac60a65722135da39e11c451d1f"
  },
  {
    "url": "assets/static/Leonardo da Vinci Virgin of the Rocks (National Gallery London).3df3210.883bf0aff174de674e1be6c3ee2ec228.jpg",
    "revision": "338b2c993f392bb9f539a52421bae176"
  },
  {
    "url": "assets/static/Leonardo da Vinci Virgin of the Rocks (National Gallery London).81b85c1.883bf0aff174de674e1be6c3ee2ec228.jpg",
    "revision": "4006e8578c1afc2b63b4b1edb0b84ef8"
  },
  {
    "url": "assets/static/Leonardo da Vinci, Madonna of the Yarnwinder, Buccleuch version.1b91758.74df8bdc5ce4258b23b1e54b9895fdb4.jpg",
    "revision": "718b998dd0e613852da09153a3659807"
  },
  {
    "url": "assets/static/Leonardo da Vinci, Madonna of the Yarnwinder, Buccleuch version.62a498d.74df8bdc5ce4258b23b1e54b9895fdb4.jpg",
    "revision": "44d282ad5966471161d8cefbb105bfc1"
  },
  {
    "url": "assets/static/Leonardo da Vinci, Madonna of the Yarnwinder, Buccleuch version.81b85c1.74df8bdc5ce4258b23b1e54b9895fdb4.jpg",
    "revision": "87014bf14d401c59f883181af4c5bcf4"
  },
  {
    "url": "assets/static/Leonardo da vinci, Ritratti dei duchi di Milano con i figli.81b85c1.d61cff9c85f59646665812af5b2483fa.jpg",
    "revision": "85f3605177993f54a65c06b3d24cc1b2"
  },
  {
    "url": "assets/static/Leonardo da vinci, Ritratti dei duchi di Milano con i figli.f62e88f.d61cff9c85f59646665812af5b2483fa.jpg",
    "revision": "85f3605177993f54a65c06b3d24cc1b2"
  },
  {
    "url": "assets/static/Leonardo da Vinci, Salvator Mundi, c.1500, oil on walnut, 45.4 × 65.6 cm.09b17d9.66a3354023c3ccc276f136a0235d9bcb.jpg",
    "revision": "8553fe3846aa446a2607fd8c3148a93b"
  },
  {
    "url": "assets/static/Leonardo da Vinci, Salvator Mundi, c.1500, oil on walnut, 45.4 × 65.6 cm.0b85c65.66a3354023c3ccc276f136a0235d9bcb.jpg",
    "revision": "f189dc8698541b90b150f79a01e3a96f"
  },
  {
    "url": "assets/static/Leonardo da Vinci, Salvator Mundi, c.1500, oil on walnut, 45.4 × 65.6 cm.1b91758.66a3354023c3ccc276f136a0235d9bcb.jpg",
    "revision": "5ed9cb4c4bd02da24bc52946df36169b"
  },
  {
    "url": "assets/static/Leonardo da Vinci, Salvator Mundi, c.1500, oil on walnut, 45.4 × 65.6 cm.3df3210.66a3354023c3ccc276f136a0235d9bcb.jpg",
    "revision": "08bb962af7aa4795c19969a030d31a44"
  },
  {
    "url": "assets/static/Leonardo da Vinci, Salvator Mundi, c.1500, oil on walnut, 45.4 × 65.6 cm.81b85c1.66a3354023c3ccc276f136a0235d9bcb.jpg",
    "revision": "c3f845196798694f2cf087c5bf3d0eb3"
  },
  {
    "url": "assets/static/Leonardo, testa di cristo, 1494 circa, pinacoteca di brera.1b91758.c724eafe7a9de64d93b4a56068e28115.jpg",
    "revision": "1666dfc77da95a48a17880eff5ee05a0"
  },
  {
    "url": "assets/static/Leonardo, testa di cristo, 1494 circa, pinacoteca di brera.3df3210.c724eafe7a9de64d93b4a56068e28115.jpg",
    "revision": "c60d077ab66a7db6cfcf17660445ae98"
  },
  {
    "url": "assets/static/Leonardo, testa di cristo, 1494 circa, pinacoteca di brera.4ead34e.c724eafe7a9de64d93b4a56068e28115.jpg",
    "revision": "4acfbff1c14a115addc4a70b0cebcdab"
  },
  {
    "url": "assets/static/Leonardo, testa di cristo, 1494 circa, pinacoteca di brera.81b85c1.c724eafe7a9de64d93b4a56068e28115.jpg",
    "revision": "09f0dc7caa538f404ebb4447d1676de9"
  },
  {
    "url": "assets/static/Madonna of the Carnation Leonardo da Vinci.0b85c65.e959adfa7bface504209fb46c055b4e8.jpg",
    "revision": "388f8f93d51340492516cc8a8c7873d2"
  },
  {
    "url": "assets/static/Madonna of the Carnation Leonardo da Vinci.1b91758.e959adfa7bface504209fb46c055b4e8.jpg",
    "revision": "cffa7bb52fdb4dedc4d05a6cc3b0d30a"
  },
  {
    "url": "assets/static/Madonna of the Carnation Leonardo da Vinci.3df3210.e959adfa7bface504209fb46c055b4e8.jpg",
    "revision": "5f39db79447c9fd0beed882d5186dee0"
  },
  {
    "url": "assets/static/Madonna of the Carnation Leonardo da Vinci.81b85c1.e959adfa7bface504209fb46c055b4e8.jpg",
    "revision": "cfce99f9953ea9f4ca1069d624ec776c"
  },
  {
    "url": "assets/static/Madonna of the Carnation Leonardo da Vinci.c830c23.e959adfa7bface504209fb46c055b4e8.jpg",
    "revision": "f88c872d8007399e14df769ae7c0ab3d"
  },
  {
    "url": "assets/static/Madonna of the Yarnwinder.1b91758.68f37b44f511db7778f27a2ea9ffe8a7.jpg",
    "revision": "414a3cf6345a417535d2119cbffeb5dc"
  },
  {
    "url": "assets/static/Madonna of the Yarnwinder.3df3210.68f37b44f511db7778f27a2ea9ffe8a7.jpg",
    "revision": "229c9f70c789ca8a8b8709f37dd3d4e5"
  },
  {
    "url": "assets/static/Madonna of the Yarnwinder.81b85c1.68f37b44f511db7778f27a2ea9ffe8a7.jpg",
    "revision": "836aa2c1a6836eeea0f5417cb52af99f"
  },
  {
    "url": "assets/static/Madonna of the Yarnwinder.9e8309c.68f37b44f511db7778f27a2ea9ffe8a7.jpg",
    "revision": "517ecdb67562889b48d23d8ecec32602"
  },
  {
    "url": "assets/static/Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.09b17d9.7ad864fb2d2bc8bcd2cec9bec094e0fe.jpg",
    "revision": "b0d6da5dd369a17773913cc6622d4329"
  },
  {
    "url": "assets/static/Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.0b85c65.7ad864fb2d2bc8bcd2cec9bec094e0fe.jpg",
    "revision": "84c6fcc3915e21e78a8b7157905cac7a"
  },
  {
    "url": "assets/static/Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.1b91758.7ad864fb2d2bc8bcd2cec9bec094e0fe.jpg",
    "revision": "135854b2ecb06a983fb0fb78908e8467"
  },
  {
    "url": "assets/static/Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.3df3210.7ad864fb2d2bc8bcd2cec9bec094e0fe.jpg",
    "revision": "c94b8d8e57881b3aa41de8d53b0a9e0d"
  },
  {
    "url": "assets/static/Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.81b85c1.7ad864fb2d2bc8bcd2cec9bec094e0fe.jpg",
    "revision": "7bc3a771ffdeeb9c12d5fccd14bfed29"
  },
  {
    "url": "assets/static/Peter Paul Ruben's copy of the lost Battle of Anghiari.1b91758.bf68edcbaf03aff44fa0f0622bf07c30.jpg",
    "revision": "e96a7b4d2ac815e4f1a7b72d0b27f531"
  },
  {
    "url": "assets/static/Peter Paul Ruben's copy of the lost Battle of Anghiari.37b8093.bf68edcbaf03aff44fa0f0622bf07c30.jpg",
    "revision": "8cadd17e51a49ab26c45507845f474a4"
  },
  {
    "url": "assets/static/Peter Paul Ruben's copy of the lost Battle of Anghiari.81b85c1.bf68edcbaf03aff44fa0f0622bf07c30.jpg",
    "revision": "af0a86ae4f49618299cee8f3bc8d5198"
  },
  {
    "url": "assets/static/Profile of a Young Fiancee - da Vinci.09b17d9.ed46bdaa2441d4857534d3ebdca82225.jpg",
    "revision": "013d6ba6353294e0c89ae61add09e0b3"
  },
  {
    "url": "assets/static/Profile of a Young Fiancee - da Vinci.0b85c65.ed46bdaa2441d4857534d3ebdca82225.jpg",
    "revision": "07262cf3fa505c93d2bf0e1e31604930"
  },
  {
    "url": "assets/static/Profile of a Young Fiancee - da Vinci.1b91758.ed46bdaa2441d4857534d3ebdca82225.jpg",
    "revision": "a2631be9991d3a9ce51350304c9bb721"
  },
  {
    "url": "assets/static/Profile of a Young Fiancee - da Vinci.3df3210.ed46bdaa2441d4857534d3ebdca82225.jpg",
    "revision": "9320da597cdf6d68be3aa5d2eeb87735"
  },
  {
    "url": "assets/static/Profile of a Young Fiancee - da Vinci.81b85c1.ed46bdaa2441d4857534d3ebdca82225.jpg",
    "revision": "e95b67c1b1f576c97d7d838ec477eb93"
  },
  {
    "url": "assets/static/Sala VIII.1b91758.7f538544998d81468c2732cb7cdc87ea.jpg",
    "revision": "631ecfe6a3cb44ed6456c0def26f65e1"
  },
  {
    "url": "assets/static/Sala VIII.1c20d4c.7f538544998d81468c2732cb7cdc87ea.jpg",
    "revision": "eb271acadcb969b738e5021c71a101d1"
  },
  {
    "url": "assets/static/Sala VIII.81b85c1.7f538544998d81468c2732cb7cdc87ea.jpg",
    "revision": "bd589912e143cc10f8ef3e832f5ec781"
  },
  {
    "url": "assets/static/The Isleworth Mona Lisa.1b91758.70fcc8c149b80b529361ad9fb84e33e9.jpg",
    "revision": "a3fad15c7f34473311783764a3dc11d7"
  },
  {
    "url": "assets/static/The Isleworth Mona Lisa.7e28f63.70fcc8c149b80b529361ad9fb84e33e9.jpg",
    "revision": "695ae609265af4076cc364f3f2084ff9"
  },
  {
    "url": "assets/static/The Isleworth Mona Lisa.81b85c1.70fcc8c149b80b529361ad9fb84e33e9.jpg",
    "revision": "2c287a49ad6a5a689c31984d9639da36"
  },
  {
    "url": "assets/static/Verrocchio, Leonardo da Vinci - Battesimo di Cristo - Google Art Project.0b85c65.0ce16c636ab15af8c7576230ba644fe8.jpg",
    "revision": "356c2c2fb940e8318acf51b3914ad67b"
  },
  {
    "url": "assets/static/Verrocchio, Leonardo da Vinci - Battesimo di Cristo - Google Art Project.1b91758.0ce16c636ab15af8c7576230ba644fe8.jpg",
    "revision": "1609bf5f7843f1929ca6231d0c87a8fa"
  },
  {
    "url": "assets/static/Verrocchio, Leonardo da Vinci - Battesimo di Cristo - Google Art Project.3df3210.0ce16c636ab15af8c7576230ba644fe8.jpg",
    "revision": "6eee3e540390b3978c96ec56d4b93b7f"
  },
  {
    "url": "assets/static/Verrocchio, Leonardo da Vinci - Battesimo di Cristo - Google Art Project.81b85c1.0ce16c636ab15af8c7576230ba644fe8.jpg",
    "revision": "e069551db8b299859ab49ea9db82e67f"
  },
  {
    "url": "assets/static/Verrocchio, Leonardo da Vinci - Battesimo di Cristo - Google Art Project.a6e0b11.0ce16c636ab15af8c7576230ba644fe8.jpg",
    "revision": "f0f14565835d1eb786da7b186b8c5860"
  },
  {
    "url": "assets/static/website-icon.png",
    "revision": "505e281bcd369ecc424748ac6e8b6369"
  },
  {
    "url": "index.html",
    "revision": "b8ddb21a5b8a2c1435705a650c3538dc"
  },
  {
    "url": "manifest.json",
    "revision": "5799d92cc089e36529878003e677b575"
  },
  {
    "url": "q1059211/index.html",
    "revision": "b923f3c62eb2bdef8adef5d981f6c1ce"
  },
  {
    "url": "q1142058/index.html",
    "revision": "861cb802b48b4a1f5db600f22f845fc0"
  },
  {
    "url": "q11935346/index.html",
    "revision": "a08b37d6ba2ba55b48dc065471ec6c1b"
  },
  {
    "url": "q1217213/index.html",
    "revision": "44262caa65dce26df224d6bbcac10b98"
  },
  {
    "url": "q12418/index.html",
    "revision": "898cfc7b66a30fdd22d03f784c0123ff"
  },
  {
    "url": "q1267893/index.html",
    "revision": "d8f706d8f97a10fb8558a9973620ec7a"
  },
  {
    "url": "q12734910/index.html",
    "revision": "58cad5b0affa19450f08dfb3757153ca"
  },
  {
    "url": "q128910/index.html",
    "revision": "69522b3842a43718deb53d7dda42d370"
  },
  {
    "url": "q1327676/index.html",
    "revision": "ad6935cb9565d917bf0048909af504ac"
  },
  {
    "url": "q1638622/index.html",
    "revision": "d28953c1f7510ec3c20747ac19f77939"
  },
  {
    "url": "q1892745/index.html",
    "revision": "5e36415c0d0d226cf8cb9f67a4a23f10"
  },
  {
    "url": "q20174114/index.html",
    "revision": "9ea5ee3602a44e1e14aee02a58bf564d"
  },
  {
    "url": "q2045726/index.html",
    "revision": "c32d6488521d867a42c0df15c387e79c"
  },
  {
    "url": "q2072801/index.html",
    "revision": "17fe3113296acd7524bd97e51038b89d"
  },
  {
    "url": "q2338404/index.html",
    "revision": "be4cd03c00c6c9364572cc812ccb6955"
  },
  {
    "url": "q2397593/index.html",
    "revision": "da968a373dd0061a40350c1e5c9bdb03"
  },
  {
    "url": "q27970282/index.html",
    "revision": "b4700cfc3e235005d1b404a8b54fee4e"
  },
  {
    "url": "q3618186/index.html",
    "revision": "45cb0b3baefccd80689e071d32d87e12"
  },
  {
    "url": "q3800774/index.html",
    "revision": "662dfa5ca7ada6f79180128526d70ce9"
  },
  {
    "url": "q3937378/index.html",
    "revision": "d18d29084fa520bd88c651d439421117"
  },
  {
    "url": "q3985169/index.html",
    "revision": "72c6cb5cf85e4993caca05c4d963cbe6"
  },
  {
    "url": "q4009972/index.html",
    "revision": "42e4900945ed22a930f2f44ad5236084"
  },
  {
    "url": "q4390923/index.html",
    "revision": "f7116ad42bf3bae0e79a2d8947e2e9ed"
  },
  {
    "url": "q474338/index.html",
    "revision": "89a7d9e6e51f991a3961034d2fc8dde3"
  },
  {
    "url": "q5237905/index.html",
    "revision": "e966e181908c3208301210ea3d62df1a"
  },
  {
    "url": "q56280397/index.html",
    "revision": "9c0a4829c5531ae6d09002715fe7f095"
  },
  {
    "url": "q563727/index.html",
    "revision": "94b553f4374b3e3cb8e4e36a419c004d"
  },
  {
    "url": "q656434/index.html",
    "revision": "e03908e72791d2d1c97c8df41f90fb30"
  },
  {
    "url": "q6696013/index.html",
    "revision": "e16c892dda26d46146677c8ffa088059"
  },
  {
    "url": "q698015/index.html",
    "revision": "e8852e4205842826d2e10fdbd8b5828b"
  },
  {
    "url": "q783215/index.html",
    "revision": "c5537c10b92123452d886300b7fbbedc"
  },
  {
    "url": "q797902/index.html",
    "revision": "c8f158b52c841ecc04debf02e0f5eac2"
  },
  {
    "url": "q798034/index.html",
    "revision": "e9b104714d3b5212ab6999c7561248a9"
  },
  {
    "url": "q972196/index.html",
    "revision": "ef56d686079ff5b3bf6a7503ddb3e628"
  },
  {
    "url": "404",
    "revision": "28f25f53f5ce5d7c39f9df9ad1964986"
  },
  {
    "url": "q1059211",
    "revision": "5d99b2d44a4de1969ffff94125567cf5"
  },
  {
    "url": "q1217213",
    "revision": "328b5cb2076ff5078af91e1b507bd988"
  },
  {
    "url": "q1267893",
    "revision": "6e93c670a34709ac579d8b2219968f71"
  },
  {
    "url": "q20174114",
    "revision": "b7fba519e2a0d960b43bcb9cee2a60a2"
  },
  {
    "url": "q3618186",
    "revision": "d3680962cc5a0a3a27f24a6e0568492f"
  },
  {
    "url": "q698015",
    "revision": "0ee232afa94211ea95766d6e12ce86de"
  },
  {
    "url": "q1142058",
    "revision": "4c50c91dc581d5df06e87f98ef0a6b27"
  },
  {
    "url": "q1638622",
    "revision": "9eac4e83cf0cbfb8505cafc3bab1483a"
  },
  {
    "url": "q972196",
    "revision": "587cb71bdfd0bd90fca4c0842d985cb5"
  },
  {
    "url": "q11935346",
    "revision": "cd69bb8cf3cba2981df31bb2fd921b32"
  },
  {
    "url": "q2338404",
    "revision": "b201cbb95f8aa739ee562dce31b5cd55"
  },
  {
    "url": "q5237905",
    "revision": "1259a7960f42aee0769dd4e70af1638f"
  },
  {
    "url": "q128910",
    "revision": "d63cdd3db35eae7890c24435d4a2bbd0"
  },
  {
    "url": "q1892745",
    "revision": "9f049e3e17f79d56cd0e7c60743ac854"
  },
  {
    "url": "q1327676",
    "revision": "7c226ea1aea779f246c740161461807e"
  },
  {
    "url": "q474338",
    "revision": "c7ce3b4eac6acb1622c972b26b96596f"
  },
  {
    "url": "q656434",
    "revision": "194e099b257765ea13fa7c6dc59a504b"
  },
  {
    "url": "q3985169",
    "revision": "2a01debba58fcae88aa675c37c2dcc76"
  },
  {
    "url": "q4009972",
    "revision": "cb8d455908504cffa0fae3754d237dc8"
  },
  {
    "url": "q2072801",
    "revision": "3547073f75c2d2b18b00347bbc4970cf"
  },
  {
    "url": "q3937378",
    "revision": "d934beb4c9b92eaba5dc102da61d32b5"
  },
  {
    "url": "q3800774",
    "revision": "dc4aafcb34a78d049cc3852041d5dbc3"
  },
  {
    "url": "q27970282",
    "revision": "1cf7f7bd18abb76bd53b3c8167012116"
  },
  {
    "url": "q4390923",
    "revision": "654946132f84cf2af28804fc8887e70d"
  },
  {
    "url": "q2397593",
    "revision": "54082bddaf866a72c6cb8ff4147311ef"
  },
  {
    "url": "q12418",
    "revision": "9acdeb79612716f57e4590d2447c4911"
  },
  {
    "url": "q563727",
    "revision": "d9097dc764b342fbc3560e7f065c03c5"
  },
  {
    "url": "q2045726",
    "revision": "9109c5e405e853dd80e2b931e967be69"
  },
  {
    "url": "q6696013",
    "revision": "c33c2b7a0d895a487085988f5e2b5709"
  },
  {
    "url": "q797902",
    "revision": "0721b2ce19b9692c88233b780fd48130"
  },
  {
    "url": "q56280397",
    "revision": "fc176f87f8d09fd845b116178569db11"
  },
  {
    "url": "q783215",
    "revision": "8bdf6360f8ab61de495885895b6a2ff0"
  },
  {
    "url": "q798034",
    "revision": "2f4b56199ee6b174a8ce37d09e09116d"
  },
  {
    "url": "q12734910",
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