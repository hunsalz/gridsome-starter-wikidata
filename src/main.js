import "~/assets/style/index.scss";

import DefaultLayout from "~/layouts/Default.vue";
import { initWebVitals } from "~/utils/web-vitals";

export default function (Vue, { isClient }) {
  // set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  // set global event bus
  Vue.prototype.$eventBus = new Vue();

  // Defer Web Vitals tracking until after page load
  // This reduces initial JavaScript execution time and improves TTI
  if (isClient) {
    // Use requestIdleCallback if available, otherwise setTimeout
    if (window.requestIdleCallback) {
      requestIdleCallback(
        () => {
          initWebVitals();
        },
        { timeout: 2000 }
      );
    } else {
      // Fallback: wait for page to be interactive
      setTimeout(() => {
        initWebVitals();
      }, 0);
    }
  }
}
