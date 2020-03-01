import "~/assets/style/index.scss";

import DefaultLayout from "~/layouts/Default.vue";

import lodash from "lodash";
import VueLodash from "vue-lodash";

export default function(Vue) {
  // set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  // set global lodash
  Vue.use(VueLodash, { lodash });
  // set global event bus
  Vue.prototype.$eventBus = new Vue();
}
