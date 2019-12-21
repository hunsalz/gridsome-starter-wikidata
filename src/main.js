import "~/assets/style/index.scss";

import DefaultLayout from "~/layouts/Default.vue";

import VueLodash from "vue-lodash";

export default function(Vue, { router, head, isClient }) {
  // set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  // set global event bus
  Vue.prototype.$eventBus = new Vue(); 
  // set global lodash
  const options = { name: "lodash" };
  Vue.use(VueLodash, options);
}
