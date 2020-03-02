import "~/assets/style/index.scss";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue) {
  // set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  // set global event bus
  Vue.prototype.$eventBus = new Vue();
}
