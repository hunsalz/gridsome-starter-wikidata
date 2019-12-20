import "~/assets/style/index.scss";

import DefaultLayout from "~/layouts/Default.vue";

import VueLodash from "vue-lodash";

export default function(Vue, { router, head, isClient }) {
  // set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.prototype.$eventBus = new Vue(); // global event bus

  const options = { name: "lodash" };
  Vue.use(VueLodash, options);
}
