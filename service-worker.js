if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return i[a]||(e=new Promise(async e=>{if("document"in self){const i=document.createElement("script");i.src=a,document.head.appendChild(i),i.onload=e}else importScripts(a),e()})),e.then(()=>{if(!i[a])throw new Error(`Module ${a} didn’t register its module`);return i[a]})},e=(e,i)=>{Promise.all(e.map(a)).then(a=>i(1===a.length?a[0]:a))},i={require:Promise.resolve(e)};self.define=(e,d,r)=>{i[e]||(i[e]=Promise.resolve().then(()=>{let i={};const s={uri:location.origin+e.slice(1)};return Promise.all(d.map(e=>{switch(e){case"exports":return i;case"module":return s;default:return a(e)}})).then(a=>{const e=r(...a);return i.default||(i.default=e),i})}))}}define("./service-worker.js",["./workbox-69b5a3b7"],(function(a){"use strict";self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.precacheAndRoute([{url:"/gridsome-starter-wikidata/404.html",revision:"774300296002c51bdc2a35175f5559c8"},{url:"/gridsome-starter-wikidata/404/index.html",revision:"774300296002c51bdc2a35175f5559c8"},{url:"/gridsome-starter-wikidata/assets/css/0.styles.f549b303.css",revision:"05c0d22cdb57ce8626e3a2d59c792f71"},{url:"/gridsome-starter-wikidata/assets/data/404/index.json",revision:"cb40e548a3fcd5f90e742b7eb3ff908d"},{url:"/gridsome-starter-wikidata/assets/data/index.json",revision:"ad5439af54e10159a0eb07983b033d6f"},{url:"/gridsome-starter-wikidata/assets/data/q1059211/index.json",revision:"737821d42f3c28253b8c36ec6c5792d8"},{url:"/gridsome-starter-wikidata/assets/data/q1142058/index.json",revision:"61338e2d485345dca979b3f90367a912"},{url:"/gridsome-starter-wikidata/assets/data/q11935346/index.json",revision:"a94a03cff3ba320f239cfd77ff86bdb0"},{url:"/gridsome-starter-wikidata/assets/data/q1217213/index.json",revision:"1dac67ee1f1e5d57ce85e75007803328"},{url:"/gridsome-starter-wikidata/assets/data/q12418/index.json",revision:"2a9c7f91191a48a3d0b7d318ec0c88e4"},{url:"/gridsome-starter-wikidata/assets/data/q1267893/index.json",revision:"b2482090833b1256c5977944d49add15"},{url:"/gridsome-starter-wikidata/assets/data/q128910/index.json",revision:"03fad29c8f61f6708c761dbfb5455d61"},{url:"/gridsome-starter-wikidata/assets/data/q1327676/index.json",revision:"7db43aa7e5fb9614e535af4a86a0dae8"},{url:"/gridsome-starter-wikidata/assets/data/q1638622/index.json",revision:"8c2a1cc5d8afc81f2688c0a89fe70009"},{url:"/gridsome-starter-wikidata/assets/data/q1892745/index.json",revision:"e52d589c00c3ed4d6baec48bb6c18d17"},{url:"/gridsome-starter-wikidata/assets/data/q20174114/index.json",revision:"15ae47c07782550d08030b384daf5f80"},{url:"/gridsome-starter-wikidata/assets/data/q2045726/index.json",revision:"664d37ff3f4218d4861e375127ea3c29"},{url:"/gridsome-starter-wikidata/assets/data/q2072801/index.json",revision:"842586a9dbd1684920549d7591e1b412"},{url:"/gridsome-starter-wikidata/assets/data/q2308934/index.json",revision:"45c0ec2f52cfe4d9b538fcb0cb421010"},{url:"/gridsome-starter-wikidata/assets/data/q2338404/index.json",revision:"c35a42c80a5594d5a89fac65e8f8a2b7"},{url:"/gridsome-starter-wikidata/assets/data/q2397593/index.json",revision:"40859d0decf37005dcd2ddde5cb863a2"},{url:"/gridsome-starter-wikidata/assets/data/q27970282/index.json",revision:"9ded5509208b78e364ce1313bb1adc99"},{url:"/gridsome-starter-wikidata/assets/data/q3618186/index.json",revision:"4ed8ccd8bffbd3dca49f415dafe38b68"},{url:"/gridsome-starter-wikidata/assets/data/q3800774/index.json",revision:"61bd96d881774f5d6ffd8b5f2317ddc6"},{url:"/gridsome-starter-wikidata/assets/data/q3937378/index.json",revision:"354e079a3453688f1a5c3f89f76888cc"},{url:"/gridsome-starter-wikidata/assets/data/q3985169/index.json",revision:"03471c2025a6d74b4e25f9d361b05e19"},{url:"/gridsome-starter-wikidata/assets/data/q4009972/index.json",revision:"06804d38dc6564c42c333c9e23fe6bc7"},{url:"/gridsome-starter-wikidata/assets/data/q4390923/index.json",revision:"107dc738d69ee409ca46911010332a52"},{url:"/gridsome-starter-wikidata/assets/data/q474338/index.json",revision:"7645fb2ddf73962887ca2a71c5c5a608"},{url:"/gridsome-starter-wikidata/assets/data/q5237905/index.json",revision:"12c2c8ea297f1d576d5713e8f2d8eec1"},{url:"/gridsome-starter-wikidata/assets/data/q56280397/index.json",revision:"151124f3e1506655544668da9855afc7"},{url:"/gridsome-starter-wikidata/assets/data/q563727/index.json",revision:"7a2e2383209c497010ef5b2702164196"},{url:"/gridsome-starter-wikidata/assets/data/q656434/index.json",revision:"d1faf420f26c16ef56af80742b38530a"},{url:"/gridsome-starter-wikidata/assets/data/q6696013/index.json",revision:"1ebd41a7d89f7cd2492971660e8e7b95"},{url:"/gridsome-starter-wikidata/assets/data/q698015/index.json",revision:"e2f334bf5d02ef4d84c7ad6125bfa66c"},{url:"/gridsome-starter-wikidata/assets/data/q783215/index.json",revision:"70ea45393e022a2f007bcf619d9b1a9a"},{url:"/gridsome-starter-wikidata/assets/data/q797902/index.json",revision:"5085c32ccca5decec078f2c4d69fe32d"},{url:"/gridsome-starter-wikidata/assets/data/q798034/index.json",revision:"339641b51a8a1df1f1cc9828cf3c488c"},{url:"/gridsome-starter-wikidata/assets/data/q972196/index.json",revision:"aed870ec06e2dc36b99074c0ff09aa2d"},{url:"/gridsome-starter-wikidata/assets/js/app.13aaef99.js",revision:"730cb96305566f714a5fa07849baa086"},{url:"/gridsome-starter-wikidata/assets/js/page--node-modules--gridsome--app--pages--404-vue.c1415315.js",revision:"3e055cbf6ae1330c4c03f4869b107b02"},{url:"/gridsome-starter-wikidata/assets/js/page--src--pages--index-vue.789a9e30.js",revision:"76809d543e14281e85e211cd7829bc6a"},{url:"/gridsome-starter-wikidata/assets/js/page--src--templates--painting-vue.e4229e04.js",revision:"64f4d22d94d19832e2f4ebbc6e8815c6"},{url:"/gridsome-starter-wikidata/assets/static/6.2 1980-1990 Saporetti angolo sud.1b91758.0ba6e3d07607a69116c44ce8b1d61aba.jpg",revision:"461d1e3363a5f64ac90a106ba005de87"},{url:"/gridsome-starter-wikidata/assets/static/6.2 1980-1990 Saporetti angolo sud.81b85c1.0ba6e3d07607a69116c44ce8b1d61aba.jpg",revision:"e04dea18ac3a76b9802ff3a755333bb3"},{url:"/gridsome-starter-wikidata/assets/static/6.2 1980-1990 Saporetti angolo sud.c1f1e49.0ba6e3d07607a69116c44ce8b1d61aba.jpg",revision:"8a269a9f6c798214373198ea6b21301b"},{url:"/gridsome-starter-wikidata/assets/static/Annunciation (Leonardo).09b17d9.e821a54c80f607f3db9cd51a146e0d77.jpg",revision:"d6d11056d530817b0674bcefad36fb16"},{url:"/gridsome-starter-wikidata/assets/static/Annunciation (Leonardo).0b85c65.e821a54c80f607f3db9cd51a146e0d77.jpg",revision:"dd868f4b150fe6f28f1dc49889fe1ebb"},{url:"/gridsome-starter-wikidata/assets/static/Annunciation (Leonardo).1b91758.e821a54c80f607f3db9cd51a146e0d77.jpg",revision:"febb06bcad2afd9ef95ba9865bf68899"},{url:"/gridsome-starter-wikidata/assets/static/Annunciation (Leonardo).3df3210.e821a54c80f607f3db9cd51a146e0d77.jpg",revision:"8f8a67f94f4eb029ce0279ceddc7611a"},{url:"/gridsome-starter-wikidata/assets/static/Annunciation (Leonardo).81b85c1.e821a54c80f607f3db9cd51a146e0d77.jpg",revision:"32e30dd1536eab165600cd624190494e"},{url:"/gridsome-starter-wikidata/assets/static/Bacchus (painting).1b91758.b2269e74997ccd174bd2f27dfb467ea3.jpg",revision:"c879266d32859a7fb615dd44698d8db6"},{url:"/gridsome-starter-wikidata/assets/static/Bacchus (painting).6cd073f.b2269e74997ccd174bd2f27dfb467ea3.jpg",revision:"245654345a11e8f15808f22f601d76be"},{url:"/gridsome-starter-wikidata/assets/static/Bacchus (painting).81b85c1.b2269e74997ccd174bd2f27dfb467ea3.jpg",revision:"178194e1dc03ec80dbaed77c2ad60723"},{url:"/gridsome-starter-wikidata/assets/static/favicon.ac8d93a.d07ec391ed68bb2fc24c5ed99d8fd12e.png",revision:"559832d937b393decf0b64c103b8b8e4"},{url:"/gridsome-starter-wikidata/assets/static/favicon.b9532cc.d07ec391ed68bb2fc24c5ed99d8fd12e.png",revision:"06353772afea50ba647ee5040f5164ae"},{url:"/gridsome-starter-wikidata/assets/static/favicon.ce0531f.d07ec391ed68bb2fc24c5ed99d8fd12e.png",revision:"473003951bf5f1e280abc942caba7619"},{url:"/gridsome-starter-wikidata/assets/static/favicon.f22e9f3.d07ec391ed68bb2fc24c5ed99d8fd12e.png",revision:"454a4c0e9db3554746361786bd8b6e3f"},{url:"/gridsome-starter-wikidata/assets/static/L'Annonciation, by Leonardo da Vinci, from C2RMF retouched.09b17d9.4ef72fdbb4a64219eeec52aff6db2a91.jpg",revision:"79605272e3c14a404bd5c33d6cf979c4"},{url:"/gridsome-starter-wikidata/assets/static/L'Annonciation, by Leonardo da Vinci, from C2RMF retouched.0b85c65.4ef72fdbb4a64219eeec52aff6db2a91.jpg",revision:"edff22be95374ccb5d7aac2cbb9dedb8"},{url:"/gridsome-starter-wikidata/assets/static/L'Annonciation, by Leonardo da Vinci, from C2RMF retouched.1b91758.4ef72fdbb4a64219eeec52aff6db2a91.jpg",revision:"ecbdc54f9de65e469bcbbe8482c30b96"},{url:"/gridsome-starter-wikidata/assets/static/L'Annonciation, by Leonardo da Vinci, from C2RMF retouched.3df3210.4ef72fdbb4a64219eeec52aff6db2a91.jpg",revision:"05f0b16b443aba62991f0733c6c02523"},{url:"/gridsome-starter-wikidata/assets/static/L'Annonciation, by Leonardo da Vinci, from C2RMF retouched.81b85c1.4ef72fdbb4a64219eeec52aff6db2a91.jpg",revision:"7317e83695903472a8515690effd92f3"},{url:"/gridsome-starter-wikidata/assets/static/La Battaglia di Anghiari di Leonardo.1b91758.8c9f2af7fad117101ac2b2f8171849db.jpg",revision:"4a85ad3fa1a5b3a97adf82b610b79ca7"},{url:"/gridsome-starter-wikidata/assets/static/La Battaglia di Anghiari di Leonardo.81b85c1.8c9f2af7fad117101ac2b2f8171849db.jpg",revision:"26c0ba0845ef16cc3482e00184144a68"},{url:"/gridsome-starter-wikidata/assets/static/La Battaglia di Anghiari di Leonardo.d09e26b.8c9f2af7fad117101ac2b2f8171849db.jpg",revision:"a1742ca8a931dfa7d0c1eae61d67c228"},{url:"/gridsome-starter-wikidata/assets/static/La belle ferronnière,Leonardo da Vinci - Louvre.1b91758.8d9547dc0a511b6b9e612f387155534f.jpg",revision:"f1b3ea7acac4ced15c1a73ff169d3fe9"},{url:"/gridsome-starter-wikidata/assets/static/La belle ferronnière,Leonardo da Vinci - Louvre.3df3210.8d9547dc0a511b6b9e612f387155534f.jpg",revision:"c4e9bb76e79e71b4340a043804c279d3"},{url:"/gridsome-starter-wikidata/assets/static/La belle ferronnière,Leonardo da Vinci - Louvre.4768666.8d9547dc0a511b6b9e612f387155534f.jpg",revision:"f44d7c173c2000f7f64c06f3a2ecda39"},{url:"/gridsome-starter-wikidata/assets/static/La belle ferronnière,Leonardo da Vinci - Louvre.81b85c1.8d9547dc0a511b6b9e612f387155534f.jpg",revision:"e4711c7a36801db75fd69687c70aa77b"},{url:"/gridsome-starter-wikidata/assets/static/Lascapigliata.1b91758.068c67493d30ea3ec4cdcd1c9aff1897.jpg",revision:"19cebbba58fd6f60e995f25b36240744"},{url:"/gridsome-starter-wikidata/assets/static/Lascapigliata.3df3210.068c67493d30ea3ec4cdcd1c9aff1897.jpg",revision:"eca28815d7a7c875440757eaddc31016"},{url:"/gridsome-starter-wikidata/assets/static/Lascapigliata.444cfdd.068c67493d30ea3ec4cdcd1c9aff1897.jpg",revision:"3349dd918162442be7bafd7d8ba52e2e"},{url:"/gridsome-starter-wikidata/assets/static/Lascapigliata.81b85c1.068c67493d30ea3ec4cdcd1c9aff1897.jpg",revision:"f667678c97bbb93f9c8fd43e157c5163"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Adorazione dei Magi - Google Art Project.09b17d9.7d7dc8c217bd9056e98efae20d6cde1d.jpg",revision:"2c14a51ddfceebf9a8f06ecce178ef45"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Adorazione dei Magi - Google Art Project.0b85c65.7d7dc8c217bd9056e98efae20d6cde1d.jpg",revision:"6751d34962de2d0c896dad8b345d9ba0"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Adorazione dei Magi - Google Art Project.1b91758.7d7dc8c217bd9056e98efae20d6cde1d.jpg",revision:"2586bc716963fcc7f9578c4b6cbca353"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Adorazione dei Magi - Google Art Project.3df3210.7d7dc8c217bd9056e98efae20d6cde1d.jpg",revision:"45e73d726e061cc7edb273d66ececc88"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Adorazione dei Magi - Google Art Project.81b85c1.7d7dc8c217bd9056e98efae20d6cde1d.jpg",revision:"99fad71b2295f86b6f7786750e8224b9"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Portrait of a Musician - Pinacoteca Ambrosiana.09b17d9.273565de2131115f6603f2d6e2739c70.jpg",revision:"36005015c78157cd35c685bb32e8b73c"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Portrait of a Musician - Pinacoteca Ambrosiana.0b85c65.273565de2131115f6603f2d6e2739c70.jpg",revision:"cf6cba4e6f1ed31e83912d170818809c"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Portrait of a Musician - Pinacoteca Ambrosiana.1b91758.273565de2131115f6603f2d6e2739c70.jpg",revision:"75a24611cebaceb9f0a4c8da636706f7"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Portrait of a Musician - Pinacoteca Ambrosiana.3df3210.273565de2131115f6603f2d6e2739c70.jpg",revision:"350848ff06f9cc293742309d1ca82887"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Portrait of a Musician - Pinacoteca Ambrosiana.81b85c1.273565de2131115f6603f2d6e2739c70.jpg",revision:"9e6dfdb11acd7c0c20d86d2cd5dfbe20"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Saint Jerome.0b85c65.f1f11c742e11885540db02ddc9c4294b.jpg",revision:"10b4a641b4e28253f25745dcb60af642"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Saint Jerome.1b91758.f1f11c742e11885540db02ddc9c4294b.jpg",revision:"417c84a67db07828e0286d8d1d5c4f0a"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Saint Jerome.3df3210.f1f11c742e11885540db02ddc9c4294b.jpg",revision:"f2084b5d76edbd57c11494f7481a8f89"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Saint Jerome.81b85c1.f1f11c742e11885540db02ddc9c4294b.jpg",revision:"8d049a837b87bb7700a56b5108e0edca"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Saint John the Baptist C2RMF retouched.09b17d9.280bb281cb36581ba072e791c27f17ad.jpg",revision:"81bd0af7da96a85eff7e94e08a9eada0"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Saint John the Baptist C2RMF retouched.0b85c65.280bb281cb36581ba072e791c27f17ad.jpg",revision:"7685ed90c35cb23e439b7fdda85b9b9b"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Saint John the Baptist C2RMF retouched.1b91758.280bb281cb36581ba072e791c27f17ad.jpg",revision:"cb918ae13a7ba7475d57090b9d45a53f"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Saint John the Baptist C2RMF retouched.3df3210.280bb281cb36581ba072e791c27f17ad.jpg",revision:"ea774ac8d78c245f63b016efe2ad9c1a"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Saint John the Baptist C2RMF retouched.81b85c1.280bb281cb36581ba072e791c27f17ad.jpg",revision:"ee8570d119f099850a13c4ca944d0abf"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo Da Vinci - Vergine delle Rocce (Louvre).09b17d9.2cc4912e0e0fa9129d8ec8d7061871b9.jpg",revision:"c71259918d1b81558509c29d97dd9fa3"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo Da Vinci - Vergine delle Rocce (Louvre).0b85c65.2cc4912e0e0fa9129d8ec8d7061871b9.jpg",revision:"56e8c8363e98a2cc9fe6741bd8eafebb"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo Da Vinci - Vergine delle Rocce (Louvre).1b91758.2cc4912e0e0fa9129d8ec8d7061871b9.jpg",revision:"f7713530eed9d44a489c1643a529884d"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo Da Vinci - Vergine delle Rocce (Louvre).3df3210.2cc4912e0e0fa9129d8ec8d7061871b9.jpg",revision:"da907cb5290697cb8c9096b5fd74de9e"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo Da Vinci - Vergine delle Rocce (Louvre).81b85c1.2cc4912e0e0fa9129d8ec8d7061871b9.jpg",revision:"61e78561724cccd76fca70ca892ed6fa"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Virgin and Child with St Anne C2RMF retouched.09b17d9.f2d261a25aca1b12365df9a7195b0cde.jpg",revision:"5531d13806ab43ac110dd149dd9c50fe"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Virgin and Child with St Anne C2RMF retouched.0b85c65.f2d261a25aca1b12365df9a7195b0cde.jpg",revision:"9f90d3c0f209ebd6a5b8c19d2b46520d"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Virgin and Child with St Anne C2RMF retouched.1b91758.f2d261a25aca1b12365df9a7195b0cde.jpg",revision:"7dc269e56cfa11c2c9a7fd8d6cb91dff"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Virgin and Child with St Anne C2RMF retouched.3df3210.f2d261a25aca1b12365df9a7195b0cde.jpg",revision:"7fc8589f44dced8952388481c797e7da"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Virgin and Child with St Anne C2RMF retouched.81b85c1.f2d261a25aca1b12365df9a7195b0cde.jpg",revision:"002a59ab0c73bb41ff2a078d8637f3a7"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Wreath of Laurel, Palm, and Juniper with a Scroll inscribed Virtutem Forum Decorat (reverse) - Google Art Project.09b17d9.0a1dca4232893705273286a9fb714d22.jpg",revision:"f7a16575b8c4c8b6f4eb9f6a5ca34f83"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Wreath of Laurel, Palm, and Juniper with a Scroll inscribed Virtutem Forum Decorat (reverse) - Google Art Project.0b85c65.0a1dca4232893705273286a9fb714d22.jpg",revision:"ae6bcb3e1fbc83188bded926f11f2b38"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Wreath of Laurel, Palm, and Juniper with a Scroll inscribed Virtutem Forum Decorat (reverse) - Google Art Project.1b91758.0a1dca4232893705273286a9fb714d22.jpg",revision:"7c922060e22054895e3c5cd5addb1013"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Wreath of Laurel, Palm, and Juniper with a Scroll inscribed Virtutem Forum Decorat (reverse) - Google Art Project.3df3210.0a1dca4232893705273286a9fb714d22.jpg",revision:"d88da422871777061a1b9373cbb3c52e"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci - Wreath of Laurel, Palm, and Juniper with a Scroll inscribed Virtutem Forum Decorat (reverse) - Google Art Project.81b85c1.0a1dca4232893705273286a9fb714d22.jpg",revision:"c632361d61009a79a77ec014041584b6"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci (attrib) - The Holy Infants.1b91758.56eabf68f70403eabec477a049dab936.jpg",revision:"ca41b9a5767ad33b3171762ff4adc64e"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci (attrib) - The Holy Infants.52c055d.56eabf68f70403eabec477a049dab936.jpg",revision:"1b9afd23f96411eeb85b320d92db7bf0"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci (attrib) - The Holy Infants.81b85c1.56eabf68f70403eabec477a049dab936.jpg",revision:"7212a1142282dc92be9ffa39f0e632ca"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci attributed - Madonna Litta.09b17d9.d3699f37d095c9cd4164ae867a53c931.jpg",revision:"6c28d1748ce1f3fc406e6eb0cb2b1039"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci attributed - Madonna Litta.0b85c65.d3699f37d095c9cd4164ae867a53c931.jpg",revision:"4fe3d7bba1f1e74da3b0ceb0bf27fed3"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci attributed - Madonna Litta.1b91758.d3699f37d095c9cd4164ae867a53c931.jpg",revision:"af1f8d43356d750fbc4155f55fc4d040"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci attributed - Madonna Litta.3df3210.d3699f37d095c9cd4164ae867a53c931.jpg",revision:"100c1fa516ad3342e4131629176f1760"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci attributed - Madonna Litta.81b85c1.d3699f37d095c9cd4164ae867a53c931.jpg",revision:"e9cee76ba439bc0b29ac65676ece3893"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci Virgin of the Rocks (National Gallery London).09b17d9.883bf0aff174de674e1be6c3ee2ec228.jpg",revision:"66a683f893361d151402813886dea152"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci Virgin of the Rocks (National Gallery London).0b85c65.883bf0aff174de674e1be6c3ee2ec228.jpg",revision:"24a36549e462f45cd461b1dea160abe3"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci Virgin of the Rocks (National Gallery London).1b91758.883bf0aff174de674e1be6c3ee2ec228.jpg",revision:"c2a81ac60a65722135da39e11c451d1f"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci Virgin of the Rocks (National Gallery London).3df3210.883bf0aff174de674e1be6c3ee2ec228.jpg",revision:"338b2c993f392bb9f539a52421bae176"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci Virgin of the Rocks (National Gallery London).81b85c1.883bf0aff174de674e1be6c3ee2ec228.jpg",revision:"4006e8578c1afc2b63b4b1edb0b84ef8"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci, Madonna of the Yarnwinder, Buccleuch version.1b91758.74df8bdc5ce4258b23b1e54b9895fdb4.jpg",revision:"718b998dd0e613852da09153a3659807"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci, Madonna of the Yarnwinder, Buccleuch version.62a498d.74df8bdc5ce4258b23b1e54b9895fdb4.jpg",revision:"44d282ad5966471161d8cefbb105bfc1"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci, Madonna of the Yarnwinder, Buccleuch version.81b85c1.74df8bdc5ce4258b23b1e54b9895fdb4.jpg",revision:"87014bf14d401c59f883181af4c5bcf4"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da vinci, Ritratti dei duchi di Milano con i figli.81b85c1.d61cff9c85f59646665812af5b2483fa.jpg",revision:"85f3605177993f54a65c06b3d24cc1b2"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da vinci, Ritratti dei duchi di Milano con i figli.f62e88f.d61cff9c85f59646665812af5b2483fa.jpg",revision:"85f3605177993f54a65c06b3d24cc1b2"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci, Salvator Mundi, c.1500, oil on walnut, 45.4 × 65.6 cm.09b17d9.66a3354023c3ccc276f136a0235d9bcb.jpg",revision:"8553fe3846aa446a2607fd8c3148a93b"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci, Salvator Mundi, c.1500, oil on walnut, 45.4 × 65.6 cm.0b85c65.66a3354023c3ccc276f136a0235d9bcb.jpg",revision:"f189dc8698541b90b150f79a01e3a96f"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci, Salvator Mundi, c.1500, oil on walnut, 45.4 × 65.6 cm.1b91758.66a3354023c3ccc276f136a0235d9bcb.jpg",revision:"5ed9cb4c4bd02da24bc52946df36169b"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci, Salvator Mundi, c.1500, oil on walnut, 45.4 × 65.6 cm.3df3210.66a3354023c3ccc276f136a0235d9bcb.jpg",revision:"08bb962af7aa4795c19969a030d31a44"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo da Vinci, Salvator Mundi, c.1500, oil on walnut, 45.4 × 65.6 cm.81b85c1.66a3354023c3ccc276f136a0235d9bcb.jpg",revision:"c3f845196798694f2cf087c5bf3d0eb3"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo, testa di cristo, 1494 circa, pinacoteca di brera.1b91758.c724eafe7a9de64d93b4a56068e28115.jpg",revision:"1666dfc77da95a48a17880eff5ee05a0"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo, testa di cristo, 1494 circa, pinacoteca di brera.3df3210.c724eafe7a9de64d93b4a56068e28115.jpg",revision:"c60d077ab66a7db6cfcf17660445ae98"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo, testa di cristo, 1494 circa, pinacoteca di brera.4ead34e.c724eafe7a9de64d93b4a56068e28115.jpg",revision:"4acfbff1c14a115addc4a70b0cebcdab"},{url:"/gridsome-starter-wikidata/assets/static/Leonardo, testa di cristo, 1494 circa, pinacoteca di brera.81b85c1.c724eafe7a9de64d93b4a56068e28115.jpg",revision:"09f0dc7caa538f404ebb4447d1676de9"},{url:"/gridsome-starter-wikidata/assets/static/Madonna benois 01.1b91758.2c7e5efa3eb0ca6d202bd2eb004bf169.jpg",revision:"84b65ad8054733b98c96dae2451f2d69"},{url:"/gridsome-starter-wikidata/assets/static/Madonna benois 01.4ec9cc7.2c7e5efa3eb0ca6d202bd2eb004bf169.jpg",revision:"bb0a36ecc1bd667f8d495c275058ad5a"},{url:"/gridsome-starter-wikidata/assets/static/Madonna benois 01.81b85c1.2c7e5efa3eb0ca6d202bd2eb004bf169.jpg",revision:"ea702bff1979b0197bfcb9d44e838463"},{url:"/gridsome-starter-wikidata/assets/static/Madonna of the Carnation Leonardo da Vinci.0b85c65.e959adfa7bface504209fb46c055b4e8.jpg",revision:"388f8f93d51340492516cc8a8c7873d2"},{url:"/gridsome-starter-wikidata/assets/static/Madonna of the Carnation Leonardo da Vinci.1b91758.e959adfa7bface504209fb46c055b4e8.jpg",revision:"cffa7bb52fdb4dedc4d05a6cc3b0d30a"},{url:"/gridsome-starter-wikidata/assets/static/Madonna of the Carnation Leonardo da Vinci.3df3210.e959adfa7bface504209fb46c055b4e8.jpg",revision:"5f39db79447c9fd0beed882d5186dee0"},{url:"/gridsome-starter-wikidata/assets/static/Madonna of the Carnation Leonardo da Vinci.81b85c1.e959adfa7bface504209fb46c055b4e8.jpg",revision:"cfce99f9953ea9f4ca1069d624ec776c"},{url:"/gridsome-starter-wikidata/assets/static/Madonna of the Carnation Leonardo da Vinci.c830c23.e959adfa7bface504209fb46c055b4e8.jpg",revision:"f88c872d8007399e14df769ae7c0ab3d"},{url:"/gridsome-starter-wikidata/assets/static/Madonna of the Yarnwinder.1b91758.68f37b44f511db7778f27a2ea9ffe8a7.jpg",revision:"414a3cf6345a417535d2119cbffeb5dc"},{url:"/gridsome-starter-wikidata/assets/static/Madonna of the Yarnwinder.3df3210.68f37b44f511db7778f27a2ea9ffe8a7.jpg",revision:"229c9f70c789ca8a8b8709f37dd3d4e5"},{url:"/gridsome-starter-wikidata/assets/static/Madonna of the Yarnwinder.81b85c1.68f37b44f511db7778f27a2ea9ffe8a7.jpg",revision:"836aa2c1a6836eeea0f5417cb52af99f"},{url:"/gridsome-starter-wikidata/assets/static/Madonna of the Yarnwinder.9e8309c.68f37b44f511db7778f27a2ea9ffe8a7.jpg",revision:"517ecdb67562889b48d23d8ecec32602"},{url:"/gridsome-starter-wikidata/assets/static/Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.09b17d9.7ad864fb2d2bc8bcd2cec9bec094e0fe.jpg",revision:"b0d6da5dd369a17773913cc6622d4329"},{url:"/gridsome-starter-wikidata/assets/static/Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.0b85c65.7ad864fb2d2bc8bcd2cec9bec094e0fe.jpg",revision:"84c6fcc3915e21e78a8b7157905cac7a"},{url:"/gridsome-starter-wikidata/assets/static/Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.1b91758.7ad864fb2d2bc8bcd2cec9bec094e0fe.jpg",revision:"135854b2ecb06a983fb0fb78908e8467"},{url:"/gridsome-starter-wikidata/assets/static/Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.3df3210.7ad864fb2d2bc8bcd2cec9bec094e0fe.jpg",revision:"c94b8d8e57881b3aa41de8d53b0a9e0d"},{url:"/gridsome-starter-wikidata/assets/static/Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.81b85c1.7ad864fb2d2bc8bcd2cec9bec094e0fe.jpg",revision:"7bc3a771ffdeeb9c12d5fccd14bfed29"},{url:"/gridsome-starter-wikidata/assets/static/Peter Paul Ruben's copy of the lost Battle of Anghiari.1b91758.bf68edcbaf03aff44fa0f0622bf07c30.jpg",revision:"e96a7b4d2ac815e4f1a7b72d0b27f531"},{url:"/gridsome-starter-wikidata/assets/static/Peter Paul Ruben's copy of the lost Battle of Anghiari.37b8093.bf68edcbaf03aff44fa0f0622bf07c30.jpg",revision:"8cadd17e51a49ab26c45507845f474a4"},{url:"/gridsome-starter-wikidata/assets/static/Peter Paul Ruben's copy of the lost Battle of Anghiari.81b85c1.bf68edcbaf03aff44fa0f0622bf07c30.jpg",revision:"af0a86ae4f49618299cee8f3bc8d5198"},{url:"/gridsome-starter-wikidata/assets/static/Profile of a Young Fiancee - da Vinci.09b17d9.ed46bdaa2441d4857534d3ebdca82225.jpg",revision:"013d6ba6353294e0c89ae61add09e0b3"},{url:"/gridsome-starter-wikidata/assets/static/Profile of a Young Fiancee - da Vinci.0b85c65.ed46bdaa2441d4857534d3ebdca82225.jpg",revision:"07262cf3fa505c93d2bf0e1e31604930"},{url:"/gridsome-starter-wikidata/assets/static/Profile of a Young Fiancee - da Vinci.1b91758.ed46bdaa2441d4857534d3ebdca82225.jpg",revision:"a2631be9991d3a9ce51350304c9bb721"},{url:"/gridsome-starter-wikidata/assets/static/Profile of a Young Fiancee - da Vinci.3df3210.ed46bdaa2441d4857534d3ebdca82225.jpg",revision:"9320da597cdf6d68be3aa5d2eeb87735"},{url:"/gridsome-starter-wikidata/assets/static/Profile of a Young Fiancee - da Vinci.81b85c1.ed46bdaa2441d4857534d3ebdca82225.jpg",revision:"e95b67c1b1f576c97d7d838ec477eb93"},{url:"/gridsome-starter-wikidata/assets/static/Study for the Kneeling Leda.81b85c1.4e8b5f2c391d06c05a83d80406ec883d.jpg",revision:"8441eb5c5f6767f31b326f6dde3df0b3"},{url:"/gridsome-starter-wikidata/assets/static/Study for the Kneeling Leda.d12e930.4e8b5f2c391d06c05a83d80406ec883d.jpg",revision:"8552f58dc510cc67a059a98c39a3ea97"},{url:"/gridsome-starter-wikidata/assets/static/The Baptism of Christ (Verrocchio %26 Leonardo).09b17d9.10f1a9606dc42beaae868befb2d90b7a.jpg",revision:"13dca3c8f0a29094811e0215b92bfe7f"},{url:"/gridsome-starter-wikidata/assets/static/The Baptism of Christ (Verrocchio %26 Leonardo).0b85c65.10f1a9606dc42beaae868befb2d90b7a.jpg",revision:"55543d9f4375db7b6a194f14c2154026"},{url:"/gridsome-starter-wikidata/assets/static/The Baptism of Christ (Verrocchio %26 Leonardo).1b91758.10f1a9606dc42beaae868befb2d90b7a.jpg",revision:"3f97a3ea500b95380b1877004138573e"},{url:"/gridsome-starter-wikidata/assets/static/The Baptism of Christ (Verrocchio %26 Leonardo).3df3210.10f1a9606dc42beaae868befb2d90b7a.jpg",revision:"9165320020c05f7c5d583dfd468e02a7"},{url:"/gridsome-starter-wikidata/assets/static/The Baptism of Christ (Verrocchio %26 Leonardo).81b85c1.10f1a9606dc42beaae868befb2d90b7a.jpg",revision:"2de5a490e538e7f3df40f36ef1843366"},{url:"/gridsome-starter-wikidata/assets/static/The Isleworth Mona Lisa.1b91758.70fcc8c149b80b529361ad9fb84e33e9.jpg",revision:"a3fad15c7f34473311783764a3dc11d7"},{url:"/gridsome-starter-wikidata/assets/static/The Isleworth Mona Lisa.7e28f63.70fcc8c149b80b529361ad9fb84e33e9.jpg",revision:"695ae609265af4076cc364f3f2084ff9"},{url:"/gridsome-starter-wikidata/assets/static/The Isleworth Mona Lisa.81b85c1.70fcc8c149b80b529361ad9fb84e33e9.jpg",revision:"2c287a49ad6a5a689c31984d9639da36"},{url:"/gridsome-starter-wikidata/assets/static/The Last Supper - Leonardo Da Vinci - High Resolution 32x16.09b17d9.9d50cac7f71e90d10c94ea49605e2cde.jpg",revision:"6a4d1e713224fca97aaf1d29b344b0de"},{url:"/gridsome-starter-wikidata/assets/static/The Last Supper - Leonardo Da Vinci - High Resolution 32x16.0b85c65.9d50cac7f71e90d10c94ea49605e2cde.jpg",revision:"1df44526aa820d125e148395da421774"},{url:"/gridsome-starter-wikidata/assets/static/The Last Supper - Leonardo Da Vinci - High Resolution 32x16.1b91758.9d50cac7f71e90d10c94ea49605e2cde.jpg",revision:"6c3759561248b9443759c917314cf15b"},{url:"/gridsome-starter-wikidata/assets/static/The Last Supper - Leonardo Da Vinci - High Resolution 32x16.3df3210.9d50cac7f71e90d10c94ea49605e2cde.jpg",revision:"a5e49f382c69a7ac537b90b1de0b85fe"},{url:"/gridsome-starter-wikidata/assets/static/The Last Supper - Leonardo Da Vinci - High Resolution 32x16.81b85c1.9d50cac7f71e90d10c94ea49605e2cde.jpg",revision:"7c65b8cd735113ce1fb1b07e21b68433"},{url:"/gridsome-starter-wikidata/assets/static/website-icon-120x120.png",revision:"e9827caf305bd9ffe76828d805f6acbd"},{url:"/gridsome-starter-wikidata/assets/static/website-icon-128x128.png",revision:"bdf793ffa42183f7a006c3c54be48908"},{url:"/gridsome-starter-wikidata/assets/static/website-icon-144x144.png",revision:"487dbaac01887a7417e78feb69996f63"},{url:"/gridsome-starter-wikidata/assets/static/website-icon-152x152.png",revision:"07d836cbd65c56019737b779f062ab09"},{url:"/gridsome-starter-wikidata/assets/static/website-icon-16x16.png",revision:"1cd77bf398d103523a6726260e0b2f0e"},{url:"/gridsome-starter-wikidata/assets/static/website-icon-180x180.png",revision:"0f4d1230532d617e57d23307c3b2574e"},{url:"/gridsome-starter-wikidata/assets/static/website-icon-192x192.png",revision:"6426272b5e8dccf62b6d5746c2a727dd"},{url:"/gridsome-starter-wikidata/assets/static/website-icon-384x384.png",revision:"f07c7ac59102134c22b8ddc86117f8e3"},{url:"/gridsome-starter-wikidata/assets/static/website-icon-48x48.png",revision:"b9207a93bf85496b04026318d3723116"},{url:"/gridsome-starter-wikidata/assets/static/website-icon-512x512.png",revision:"0340e22a661eb011f1fd26263b99e211"},{url:"/gridsome-starter-wikidata/assets/static/website-icon-72x72.png",revision:"aae3ff485bf5ce1a9ee03deb807f82bd"},{url:"/gridsome-starter-wikidata/assets/static/website-icon-96x96.png",revision:"b0dfd9d3fc1280855361922b43e8a6fd"},{url:"/gridsome-starter-wikidata/assets/static/達文西自畫像.81b85c1.9e5cc62614fbcc9f5d32b6d6f4362f53.jpg",revision:"4021dacdc9ab57e183b9814855e341e2"},{url:"/gridsome-starter-wikidata/assets/static/達文西自畫像.8aea94e.9e5cc62614fbcc9f5d32b6d6f4362f53.jpg",revision:"9db2965013c7b6d62a18bd0435c6d3d8"},{url:"/gridsome-starter-wikidata/index.html",revision:"fe837bf85767fd6a89181c64670e233b"},{url:"/gridsome-starter-wikidata/manifest.json",revision:"5743f03c0eea7bd1807bd2b34cb60b10"},{url:"/gridsome-starter-wikidata/q1059211/index.html",revision:"c8bd4dc75b86847f75c095a01b78d897"},{url:"/gridsome-starter-wikidata/q1142058/index.html",revision:"b778ea95e528fbc53561ae45c563b31a"},{url:"/gridsome-starter-wikidata/q11935346/index.html",revision:"6a2df142c9430b661bbe8eda873dfcd4"},{url:"/gridsome-starter-wikidata/q1217213/index.html",revision:"e94ff49f124caced2f7a7882429fd3b8"},{url:"/gridsome-starter-wikidata/q12418/index.html",revision:"e412ba01100624ed1a216d8dbea6095d"},{url:"/gridsome-starter-wikidata/q1267893/index.html",revision:"0bacba2588f843e41bcfb16477a3339e"},{url:"/gridsome-starter-wikidata/q128910/index.html",revision:"18ced40abfec44ab98f0eda9966ab808"},{url:"/gridsome-starter-wikidata/q1327676/index.html",revision:"37168a6fff68162da64230bb09a68b76"},{url:"/gridsome-starter-wikidata/q1638622/index.html",revision:"a849b99714c3b9ba940b5930164ea155"},{url:"/gridsome-starter-wikidata/q1892745/index.html",revision:"dd010260932ae1b1e91926890d56e34a"},{url:"/gridsome-starter-wikidata/q20174114/index.html",revision:"4ea876802cc90e12b76e440389253f18"},{url:"/gridsome-starter-wikidata/q2045726/index.html",revision:"6b421061438ef66fd67826dfe6734d92"},{url:"/gridsome-starter-wikidata/q2072801/index.html",revision:"95da3defd83a16f7eecad04ab08bd7b2"},{url:"/gridsome-starter-wikidata/q2308934/index.html",revision:"7e79bdce7ca1c5a871c968fa47cbde6a"},{url:"/gridsome-starter-wikidata/q2338404/index.html",revision:"0408281512b1afa65c4e71d448a2fd67"},{url:"/gridsome-starter-wikidata/q2397593/index.html",revision:"35b4b0277b6e82a235bc8ff5714c1888"},{url:"/gridsome-starter-wikidata/q27970282/index.html",revision:"1a52cc64b55b6a5a05b89b0087f9ad5b"},{url:"/gridsome-starter-wikidata/q3618186/index.html",revision:"7ea1ce3a56c54cf25a3b932d88fc3192"},{url:"/gridsome-starter-wikidata/q3800774/index.html",revision:"9b39e74be657fb60f43c3a8ce521ffa0"},{url:"/gridsome-starter-wikidata/q3937378/index.html",revision:"04289e369c97793da754a108af188f25"},{url:"/gridsome-starter-wikidata/q3985169/index.html",revision:"c40fdcedfbbd82a4f53c032e639b3c25"},{url:"/gridsome-starter-wikidata/q4009972/index.html",revision:"75b3d53e8df5384b5e89887ae9343ca4"},{url:"/gridsome-starter-wikidata/q4390923/index.html",revision:"8441c847c8e64f688365069c401534e3"},{url:"/gridsome-starter-wikidata/q474338/index.html",revision:"b7aea304465b529043f0a7800eeb0e53"},{url:"/gridsome-starter-wikidata/q5237905/index.html",revision:"bf14405103249dd729579c8a16e3751f"},{url:"/gridsome-starter-wikidata/q56280397/index.html",revision:"9e17a63c91509414f65c2d081db5585a"},{url:"/gridsome-starter-wikidata/q563727/index.html",revision:"3f3571845521c927a40b90702789fe54"},{url:"/gridsome-starter-wikidata/q656434/index.html",revision:"5d2c07a1a14734ee471733f73bedf941"},{url:"/gridsome-starter-wikidata/q6696013/index.html",revision:"654c0c828f5fd538ea48b98d19d925e3"},{url:"/gridsome-starter-wikidata/q698015/index.html",revision:"7068c7e1a6b58248f8456cac8ce5b8ca"},{url:"/gridsome-starter-wikidata/q783215/index.html",revision:"54ca47e0340c9141b61208dba13f7d30"},{url:"/gridsome-starter-wikidata/q797902/index.html",revision:"ad8275083e70f81cbffbc3f89f224783"},{url:"/gridsome-starter-wikidata/q798034/index.html",revision:"2af1a9e76535192ed61a93964793d1c1"},{url:"/gridsome-starter-wikidata/q972196/index.html",revision:"4657c510455d3818b860e26ef43195b6"},{url:"/gridsome-starter-wikidata/404",revision:"28f25f53f5ce5d7c39f9df9ad1964986"},{url:"/gridsome-starter-wikidata/q1059211",revision:"5d99b2d44a4de1969ffff94125567cf5"},{url:"/gridsome-starter-wikidata/q1217213",revision:"328b5cb2076ff5078af91e1b507bd988"},{url:"/gridsome-starter-wikidata/q1267893",revision:"6e93c670a34709ac579d8b2219968f71"},{url:"/gridsome-starter-wikidata/q20174114",revision:"b7fba519e2a0d960b43bcb9cee2a60a2"},{url:"/gridsome-starter-wikidata/q698015",revision:"0ee232afa94211ea95766d6e12ce86de"},{url:"/gridsome-starter-wikidata/q3618186",revision:"d3680962cc5a0a3a27f24a6e0568492f"},{url:"/gridsome-starter-wikidata/q1142058",revision:"4c50c91dc581d5df06e87f98ef0a6b27"},{url:"/gridsome-starter-wikidata/q1638622",revision:"9eac4e83cf0cbfb8505cafc3bab1483a"},{url:"/gridsome-starter-wikidata/q11935346",revision:"cd69bb8cf3cba2981df31bb2fd921b32"},{url:"/gridsome-starter-wikidata/q972196",revision:"587cb71bdfd0bd90fca4c0842d985cb5"},{url:"/gridsome-starter-wikidata/q2338404",revision:"b201cbb95f8aa739ee562dce31b5cd55"},{url:"/gridsome-starter-wikidata/q5237905",revision:"1259a7960f42aee0769dd4e70af1638f"},{url:"/gridsome-starter-wikidata/q128910",revision:"d63cdd3db35eae7890c24435d4a2bbd0"},{url:"/gridsome-starter-wikidata/q1327676",revision:"7c226ea1aea779f246c740161461807e"},{url:"/gridsome-starter-wikidata/q1892745",revision:"9f049e3e17f79d56cd0e7c60743ac854"},{url:"/gridsome-starter-wikidata/q474338",revision:"c7ce3b4eac6acb1622c972b26b96596f"},{url:"/gridsome-starter-wikidata/q656434",revision:"194e099b257765ea13fa7c6dc59a504b"},{url:"/gridsome-starter-wikidata/q3985169",revision:"2a01debba58fcae88aa675c37c2dcc76"},{url:"/gridsome-starter-wikidata/q4009972",revision:"cb8d455908504cffa0fae3754d237dc8"},{url:"/gridsome-starter-wikidata/q2072801",revision:"3547073f75c2d2b18b00347bbc4970cf"},{url:"/gridsome-starter-wikidata/q3937378",revision:"d934beb4c9b92eaba5dc102da61d32b5"},{url:"/gridsome-starter-wikidata/q3800774",revision:"dc4aafcb34a78d049cc3852041d5dbc3"},{url:"/gridsome-starter-wikidata/q27970282",revision:"1cf7f7bd18abb76bd53b3c8167012116"},{url:"/gridsome-starter-wikidata/q4390923",revision:"654946132f84cf2af28804fc8887e70d"},{url:"/gridsome-starter-wikidata/q2397593",revision:"54082bddaf866a72c6cb8ff4147311ef"},{url:"/gridsome-starter-wikidata/q563727",revision:"d9097dc764b342fbc3560e7f065c03c5"},{url:"/gridsome-starter-wikidata/q12418",revision:"9acdeb79612716f57e4590d2447c4911"},{url:"/gridsome-starter-wikidata/q2045726",revision:"9109c5e405e853dd80e2b931e967be69"},{url:"/gridsome-starter-wikidata/q6696013",revision:"c33c2b7a0d895a487085988f5e2b5709"},{url:"/gridsome-starter-wikidata/q797902",revision:"0721b2ce19b9692c88233b780fd48130"},{url:"/gridsome-starter-wikidata/q56280397",revision:"fc176f87f8d09fd845b116178569db11"},{url:"/gridsome-starter-wikidata/q783215",revision:"8bdf6360f8ab61de495885895b6a2ff0"},{url:"/gridsome-starter-wikidata/q798034",revision:"2f4b56199ee6b174a8ce37d09e09116d"},{url:"/gridsome-starter-wikidata/q2308934",revision:"559478e696dd19de2c08b8d5277633a0"}],{})}));
//# sourceMappingURL=service-worker.js.map

addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'SKIP_WAITING') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
