import "~/assets/style/index.scss";

import DefaultLayout from "~/layouts/Default.vue";

import VueLodash from "vue-lodash";

export default function(Vue) {
  // set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  // set global lodash
  Vue.use(VueLodash, { name: "lodash" });
  // set global event bus
  Vue.prototype.$eventBus = new Vue();
}
