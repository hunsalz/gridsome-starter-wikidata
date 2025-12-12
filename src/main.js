import "~/assets/style/index.scss";

import DefaultLayout from "~/layouts/Default.vue";
import { initWebVitals } from "~/utils/web-vitals";

export default function (Vue, { isClient }) {
  // set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  // set global event bus
  Vue.prototype.$eventBus = new Vue();

  // Initialize Web Vitals tracking
  if (isClient) {
    initWebVitals();
  }
}
