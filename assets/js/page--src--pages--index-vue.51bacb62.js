(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{251:function(t,i,e){},252:function(t,i,e){},253:function(t,i,e){},254:function(t,i,e){},255:function(t,i){},263:function(t,i,e){"use strict";var n=e(251);e.n(n).a},264:function(t,i,e){"use strict";var n=e(252);e.n(n).a},265:function(t,i,e){"use strict";var n=e(253);e.n(n).a},266:function(t,i,e){"use strict";var n=e(254);e.n(n).a},267:function(t,i,e){"use strict";var n=e(255),a=e.n(n);i.default=a.a},268:function(t,i,e){"use strict";e.r(i);e(258),e(50),e(174),e(259),e(36),e(97),e(51);var n=e(260),a=e.n(n),s=(e(100),e(262)),o=e.n(s),r=e(96),c={props:{painting:{type:Object,required:!0}},data:function(){return{isFavorite:!1}},computed:{computeWikidataLink:function(){return"https://www.wikidata.org/wiki/"+this.painting.item}},methods:{toggleFavorite:function(t){this.isFavorite=!this.isFavorite,this.$eventBus.$emit(r.c,t)},download:function(){var t=this.painting.image.src,i=t.split("/").pop().split("?")[0];i=decodeURI(i).replace(/%2C/g,","),o.a.saveAs(t,i)}}},u=(e(263),e(15)),l=Object(u.a)(c,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"action-bar"},[e("button",{staticClass:"action-button",attrs:{role:"button","aria-label":"Toggle favorite","is-favorite":t.isFavorite},on:{click:function(i){return i.preventDefault(),t.toggleFavorite(t.painting.item)}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}})])]),e("g-link",{staticClass:"action-button",attrs:{to:t.computeWikidataLink}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}})])]),e("button",{staticClass:"action-button",attrs:{role:"button","aria-label":"Download image"},on:{click:function(i){return i.preventDefault(),t.download()}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}})])])],1)}),[],!1,null,null,null).exports,g={props:{event:{type:String,required:!0},tags:{type:Array,required:!0}},methods:{emitEvent:function(t){this.$eventBus.$emit(this.event,t)}}},h=(e(264),Object(u.a)(g,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"tag-filter"},t._l(t.tags,(function(i,n){return e("button",{key:n,staticClass:"action-button",attrs:{role:"button","aria-label":"Tag"},on:{click:function(e){return e.preventDefault(),t.emitEvent(i)}}},[e("span",[t._v("# "+t._s(i))])])})),0)}),[],!1,null,null,null).exports),d={components:{ActionBar:l,TagCloud:h},props:{painting:{type:Object,required:!0}},methods:{addTag:function(){return r.a},getTags:function(){return this.painting.tags?this.painting.tags:[]}}},v=(e(265),Object(u.a)(d,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"card-layout"},[e("div",{staticClass:"card-layout__header"},[t.painting.cover_image?e("g-image",{attrs:{src:t.painting.cover_image,alt:"Cover image"}}):t._e()],1),e("div",{staticClass:"card-layout__content"},[e("h2",{staticClass:"card-layout__title"},[t._v(t._s(t.painting.title))]),e("div",[t._v("Year: "+t._s(t.painting.year))]),e("div",[t._v("Collection: "+t._s(t.painting.location))]),e("div",[t._v("Material: "+t._s(t.painting.materials))]),e("TagCloud",{staticClass:"card-layout__tags",attrs:{event:t.addTag(),tags:t.getTags()}}),e("ActionBar",{staticClass:"card-layout__actions",attrs:{painting:t.painting}})],1),e("g-link",{staticClass:"card-layout__link_to_painting",attrs:{to:t.painting.path}})],1)}),[],!1,null,null,null).exports),f=e(95),p={components:{CardLayout:v,TagCloud:h},data:function(){return{view:f.a,filter:[],favorites:[]}},metaInfo:function(){return{title:this.$page.metadata.siteName,meta:[{name:"description",content:this.$page.metadata.siteDescription}]}},created:function(){this.$eventBus.$on(r.a,this.onAddTag),this.$eventBus.$on(r.b,this.onRemoveTag),this.$eventBus.$on(r.c,this.onChangeFavorite),this.$eventBus.$on(r.d,this.onToggleView),this.$page.paintings.edges.forEach((function(t){t.node.tags=a.a.union([t.node.year,t.node.location],t.node.depicts.split(",")),a.a.remove(t.node.tags,(function(t){return 0===t.length}))}))},beforeDestroy:function(){this.$eventBus.$off()},computed:{computeCards:function(){var t=this;return this.view===f.b&&this.favorites.length>0?this.$page.paintings.edges.filter((function(i){return a.a.indexOf(t.favorites,i.node.item)>-1})):this.$page.paintings.edges.filter((function(i){return a.a.intersection(i.node.tags,t.filter).length===t.filter.length}))}},methods:{onAddTag:function(t){this.filter=a.a.union(this.filter,[t])},onRemoveTag:function(t){this.filter=a.a.without(this.filter,t)},onChangeFavorite:function(t){var i=a.a.indexOf(this.favorites,t);-1!=i?(this.favorites.splice(i,1),0===this.favorites.length&&(this.view=f.a)):this.favorites.push(t)},onToggleView:function(t){this.view=t},showToggleView:function(){return this.favorites.length>0},getRemoveTag:function(){return r.b}}},m=(e(266),e(267)),w=Object(u.a)(p,(function(){var t=this.$createElement,i=this._self._c||t;return i("Layout",{attrs:{"show-back-link":!1,"toggle-view":this.showToggleView()}},[i("div",[i("TagCloud",{attrs:{event:this.getRemoveTag(),tags:this.filter}}),i("div",{staticClass:"grid"},this._l(this.computeCards,(function(t){return i("div",{key:t.node.id},[i("CardLayout",{attrs:{painting:t.node}})],1)})),0)],1)])}),[],!1,null,null,null);"function"==typeof m.default&&Object(m.default)(w);i.default=w.exports}}]);