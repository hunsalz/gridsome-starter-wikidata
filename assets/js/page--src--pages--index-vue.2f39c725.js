(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+zB9":function(t,e,n){"use strict";var i=n("eUm+");n.n(i).a},"4l63":function(t,e,n){var i=n("I+eb"),r=n("wg0c");i({global:!0,forced:parseInt!=r},{parseInt:r})},"8YOa":function(t,e,n){var i=n("0BK2"),r=n("hh1v"),o=n("UTVS"),a=n("m/L8").f,s=n("kOOl"),c=n("uy83"),u=s("meta"),l=0,f=Object.isExtensible||function(){return!0},d=function(t){a(t,u,{value:{objectID:"O"+ ++l,weakData:{}}})},v=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,u)){if(!f(t))return"F";if(!e)return"E";d(t)}return t[u].objectID},getWeakData:function(t,e){if(!o(t,u)){if(!f(t))return!0;if(!e)return!1;d(t)}return t[u].weakData},onFreeze:function(t){return c&&v.REQUIRED&&f(t)&&!o(t,u)&&d(t),t}};i[u]=!0},"BWX/":function(t,e,n){"use strict";var i=n("v8ht");n.n(i).a},Iab2:function(t,e,n){(function(n){var i,r,o;r=[],void 0===(o="function"==typeof(i=function(){"use strict";function e(t,e,n){var i=new XMLHttpRequest;i.open("GET",t),i.responseType="blob",i.onload=function(){a(i.response,e,n)},i.onerror=function(){console.error("could not download file")},i.send()}function i(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function r(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,a=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype?function(t,n,a){var s=o.URL||o.webkitURL,c=document.createElement("a");n=n||t.name||"download",c.download=n,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?r(c):i(c.href)?e(t,n,a):r(c,c.target="_blank")):(c.href=s.createObjectURL(t),setTimeout((function(){s.revokeObjectURL(c.href)}),4e4),setTimeout((function(){r(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,o){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,o),n);else if(i(t))e(t,n,o);else{var a=document.createElement("a");a.href=t,a.target="_blank",setTimeout((function(){r(a)}))}}:function(t,n,i,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,i);var a="application/octet-stream"===t.type,s=/constructor/i.test(o.HTMLElement)||o.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||a&&s)&&"object"==typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=c?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location=t,r=null},u.readAsDataURL(t)}else{var l=o.URL||o.webkitURL,f=l.createObjectURL(t);r?r.location=f:location.href=f,r=null,setTimeout((function(){l.revokeObjectURL(f)}),4e4)}});o.saveAs=a.saveAs=a,t.exports=a})?i.apply(e,r):i)||(t.exports=o)}).call(this,n("yLpj"))},JTJg:function(t,e,n){"use strict";var i=n("I+eb"),r=n("WjRb"),o=n("HYAF");i({target:"String",proto:!0,forced:!n("qxPZ")("includes")},{includes:function(t){return!!~String(o(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},Swzc:function(t,e,n){"use strict";var i=n("snTr");n.n(i).a},TeQF:function(t,e,n){"use strict";var i=n("I+eb"),r=n("tycR").filter,o=n("Hd5f"),a=n("rkAj"),s=o("filter"),c=a("filter");i({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},YGK4:function(t,e,n){"use strict";var i=n("bWFh"),r=n("ZWaQ");t.exports=i("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},ZWaQ:function(t,e,n){"use strict";var i=n("m/L8").f,r=n("fHMY"),o=n("4syw"),a=n("A2ZE"),s=n("GarU"),c=n("ImZN"),u=n("fdAy"),l=n("JiZb"),f=n("g6v/"),d=n("8YOa").fastKey,v=n("afO8"),h=v.set,p=v.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,i){s(t,l,e),h(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),f||(t.size=0),null!=i&&c(i,t[u],t,n)})),v=p(e),g=function(t,e,n){var i,r,o=v(t),a=m(t,e);return a?a.value=n:(o.last=a={index:r=d(e,!0),key:e,value:n,previous:i=o.last,next:void 0,removed:!1},o.first||(o.first=a),i&&(i.next=a),f?o.size++:t.size++,"F"!==r&&(o.index[r]=a)),t},m=function(t,e){var n,i=v(t),r=d(e);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==e)return n};return o(l.prototype,{clear:function(){for(var t=v(this),e=t.index,n=t.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete e[n.index],n=n.next;t.first=t.last=void 0,f?t.size=0:this.size=0},delete:function(t){var e=v(this),n=m(this,t);if(n){var i=n.next,r=n.previous;delete e.index[n.index],n.removed=!0,r&&(r.next=i),i&&(i.previous=r),e.first==n&&(e.first=i),e.last==n&&(e.last=r),f?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=v(this),i=a(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(i(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!m(this,t)}}),o(l.prototype,n?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),f&&i(l.prototype,"size",{get:function(){return v(this).size}}),l},setStrong:function(t,e,n){var i=e+" Iterator",r=p(e),o=p(i);u(t,e,(function(t,e){h(this,{type:i,target:t,state:r(t),kind:e,last:void 0})}),(function(){for(var t=o(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},bWFh:function(t,e,n){"use strict";var i=n("I+eb"),r=n("2oRo"),o=n("lMq5"),a=n("busE"),s=n("8YOa"),c=n("ImZN"),u=n("GarU"),l=n("hh1v"),f=n("0Dky"),d=n("HH4o"),v=n("1E5z"),h=n("cVYH");t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),m=p?"set":"add",w=r[t],y=w&&w.prototype,b=w,x={},C=function(t){var e=y[t];a(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(o(t,"function"!=typeof w||!(g||y.forEach&&!f((function(){(new w).entries().next()})))))b=n.getConstructor(e,t,p,m),s.REQUIRED=!0;else if(o(t,!0)){var k=new b,E=k[m](g?{}:-0,1)!=k,T=f((function(){k.has(1)})),_=d((function(t){new w(t)})),O=!g&&f((function(){for(var t=new w,e=5;e--;)t[m](e,e);return!t.has(-0)}));_||((b=e((function(e,n){u(e,b,t);var i=h(new w,e,b);return null!=n&&c(n,i[m],i,p),i}))).prototype=y,y.constructor=b),(T||O)&&(C("delete"),C("has"),p&&C("get")),(O||E)&&C(m),g&&y.clear&&delete y.clear}return x[t]=b,i({global:!0,forced:b!=w},x),v(b,t),g||n.setStrong(b,t,p),b}},"eUm+":function(t,e,n){},iyQ6:function(t,e,n){"use strict";n.r(e);n("ma9I"),n("TeQF"),n("QWBl"),n("yq1k"),n("yXV3"),n("pDQq"),n("07d7"),n("4l63"),n("rB9j"),n("YGK4"),n("JTJg"),n("PKPk"),n("EnZy"),n("FZtP"),n("3bBZ");var i=n("a3WO");var r=n("BsWD");function o(t){return function(t){if(Array.isArray(t))return Object(i.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n("UxlC");var a=n("Iab2"),s=n.n(a),c=n("JPo+"),u={props:{painting:{type:Object,required:!0}},data:function(){return{isFavorite:!1}},computed:{computeWikidataLink:function(){return"https://www.wikidata.org/wiki/"+this.painting.item}},methods:{toggleFavorite:function(t){this.isFavorite=!this.isFavorite,this.$eventBus.$emit(c.c,t)},download:function(){var t=this.painting.image.src,e=t.split("/").pop().split("?")[0];e=decodeURI(e).replace(/%2C/g,","),s.a.saveAs(t,e)}}},l=(n("Swzc"),n("KHd+")),f=Object(l.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"action-bar"},[n("button",{staticClass:"action-button",attrs:{role:"button","aria-label":"Toggle favorite","is-favorite":t.isFavorite},on:{click:function(e){return e.preventDefault(),t.toggleFavorite(t.painting.item)}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}})])]),n("g-link",{staticClass:"action-button",attrs:{to:t.computeWikidataLink}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}})])]),n("button",{staticClass:"action-button",attrs:{role:"button","aria-label":"Download image"},on:{click:function(e){return e.preventDefault(),t.download()}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}})])])],1)}),[],!1,null,null,null).exports,d={props:{event:{type:String,required:!0},tags:{type:Array,required:!0}},methods:{emitEvent:function(t){this.$eventBus.$emit(this.event,t)}}},v=(n("+zB9"),Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tag-filter"},t._l(t.tags,(function(e,i){return n("button",{key:i,staticClass:"action-button",attrs:{role:"button","aria-label":"Tag"},on:{click:function(n){return n.preventDefault(),t.emitEvent(e)}}},[n("span",[t._v("# "+t._s(e))])])})),0)}),[],!1,null,null,null).exports),h={components:{ActionBar:f,TagCloud:v},props:{painting:{type:Object,required:!0}},methods:{addTag:function(){return c.a},getTags:function(){return this.painting.tags?this.painting.tags:[]}}},p=(n("lPXX"),Object(l.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-layout"},[n("div",{staticClass:"card-layout__header"},[t.painting.cover_image?n("g-image",{attrs:{src:t.painting.cover_image,alt:"Cover image"}}):t._e()],1),n("div",{staticClass:"card-layout__content"},[n("h2",{staticClass:"card-layout__title"},[t._v(t._s(t.painting.title))]),n("div",[t._v("Year: "+t._s(t.painting.year))]),n("div",[t._v("Collection: "+t._s(t.painting.location))]),n("div",[t._v("Material: "+t._s(t.painting.materials))]),n("TagCloud",{staticClass:"card-layout__tags",attrs:{event:t.addTag(),tags:t.getTags()}}),n("ActionBar",{staticClass:"card-layout__actions",attrs:{painting:t.painting}})],1),n("g-link",{staticClass:"card-layout__link_to_painting",attrs:{to:t.painting.path}})],1)}),[],!1,null,null,null).exports),g=n("b1t6"),m={components:{CardLayout:p,TagCloud:v},data:function(){return{view:g.a,filter:[],favorites:[]}},metaInfo:function(){return{title:this.$page.metadata.siteName,meta:[{name:"description",content:this.$page.metadata.siteDescription}]}},created:function(){this.$eventBus.$on(c.a,this.onAddTag),this.$eventBus.$on(c.b,this.onRemoveTag),this.$eventBus.$on(c.c,this.onChangeFavorite),this.$eventBus.$on(c.d,this.onToggleView);var t=this;["load","resize"].forEach((function(e){window.addEventListener(e,t.resizeAllCards)})),this.$page.paintings.edges.forEach((function(t){t.node.tags=[t.node.year,t.node.location],t.node.tags=t.node.tags.concat(t.node.depicts.split(",")),t.node.tags=t.node.tags.filter((function(t){return t})),t.node.tags=o(new Set(t.node.tags))}))},mounted:function(){var t=this;this.$nextTick((function(){t.resizeAllCards()}))},watch:{view:function(){var t=this;this.$nextTick((function(){t.resizeAllCards()}))},filter:function(){var t=this;this.$nextTick((function(){t.resizeAllCards()}))}},beforeDestroy:function(){this.$eventBus.$off();var t=this;["load","resize"].forEach((function(e){window.removeEventListener(e,t.resizeAllCards)}))},computed:{computeCards:function(){var t=this;return this.view===g.b&&this.favorites.length>0?this.$page.paintings.edges.filter((function(e){return t.favorites.indexOf(e.node.item)>-1})):this.$page.paintings.edges.filter((function(e){return e.node.tags.filter((function(e){return t.filter.includes(e)})).length===t.filter.length}))}},methods:{onAddTag:function(t){this.filter.push(t),this.filter=o(new Set(this.filter))},onRemoveTag:function(t){var e=this.filter.indexOf(t);this.filter.splice(e,1)},onChangeFavorite:function(t){var e=this.favorites.indexOf(t);-1!=e?(this.favorites.splice(e,1),0===this.favorites.length&&(this.view=g.a)):this.favorites.push(t)},onToggleView:function(t){this.view=t},showToggleView:function(){return this.favorites.length>0},removeTag:function(){return c.b},resizeCard:function(t){var e=document.getElementsByClassName("masonry")[0],n=parseInt(window.getComputedStyle(e).getPropertyValue("grid-row-gap")),i=parseInt(window.getComputedStyle(e).getPropertyValue("grid-auto-rows")),r=Math.ceil((t.querySelector(".card-layout").getBoundingClientRect().height+n)/(i+n));t.style.gridRowEnd="span "+r},resizeAllCards:function(){var t=this;document.getElementsByClassName("cards").forEach((function(e){return t.resizeCard(e)}))}}},w=(n("BWX/"),null),y=Object(l.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",{attrs:{"show-back-link":!1,"toggle-view":this.showToggleView()}},[e("div",[e("TagCloud",{attrs:{event:this.removeTag(),tags:this.filter}}),e("div",{staticClass:"masonry"},this._l(this.computeCards,(function(t){return e("div",{key:t.node.id,staticClass:"cards"},[e("CardLayout",{staticClass:"card-layout",attrs:{painting:t.node}})],1)})),0)],1)])}),[],!1,null,null,null);"function"==typeof w&&w(y);e.default=y.exports},lPXX:function(t,e,n){"use strict";var i=n("nBM+");n.n(i).a},"nBM+":function(t,e,n){},pDQq:function(t,e,n){"use strict";var i=n("I+eb"),r=n("I8vh"),o=n("ppGB"),a=n("UMSQ"),s=n("ewvW"),c=n("ZfDv"),u=n("hBjN"),l=n("Hd5f"),f=n("rkAj"),d=l("splice"),v=f("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,p=Math.min;i({target:"Array",proto:!0,forced:!d||!v},{splice:function(t,e){var n,i,l,f,d,v,g=s(this),m=a(g.length),w=r(t,m),y=arguments.length;if(0===y?n=i=0:1===y?(n=0,i=m-w):(n=y-2,i=p(h(o(e),0),m-w)),m+n-i>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(l=c(g,i),f=0;f<i;f++)(d=w+f)in g&&u(l,f,g[d]);if(l.length=i,n<i){for(f=w;f<m-i;f++)v=f+n,(d=f+i)in g?g[v]=g[d]:delete g[v];for(f=m;f>m-i+n;f--)delete g[f-1]}else if(n>i)for(f=m-i;f>w;f--)v=f+n-1,(d=f+i-1)in g?g[v]=g[d]:delete g[v];for(f=0;f<n;f++)g[f+w]=arguments[f+2];return g.length=m-i+n,l}})},snTr:function(t,e,n){},uy83:function(t,e,n){var i=n("0Dky");t.exports=!i((function(){return Object.isExtensible(Object.preventExtensions({}))}))},v8ht:function(t,e,n){},wg0c:function(t,e,n){var i=n("2oRo"),r=n("WKiH").trim,o=n("WJkJ"),a=i.parseInt,s=/^[+-]?0[Xx]/,c=8!==a(o+"08")||22!==a(o+"0x16");t.exports=c?function(t,e){var n=r(String(t));return a(n,e>>>0||(s.test(n)?16:10))}:a},yq1k:function(t,e,n){"use strict";var i=n("I+eb"),r=n("TWQb").includes,o=n("RNIs");i({target:"Array",proto:!0,forced:!n("rkAj")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")}}]);