/**
 * Web Vitals tracking utility
 * Measures and reports Core Web Vitals metrics
 * @see https://web.dev/vitals/
 */

/**
 * Reports Web Vitals metrics to console (can be extended to send to analytics)
 * @param {Object} metric - The Web Vitals metric object
 */
function reportWebVital(metric) {
  // Log to console in development
  if (process.isClient && window.location.hostname === "localhost") {
    console.log("[Web Vitals]", metric.name, metric.value, metric.id);
  }

  // TODO: Send to analytics service (e.g., Google Analytics, custom endpoint)
  // Example:
  // if (window.gtag) {
  //   window.gtag('event', metric.name, {
  //     value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
  //     event_label: metric.id,
  //     non_interaction: true,
  //   });
  // }
}

/**
 * Initializes Web Vitals tracking
 * Should be called in main.js or App.vue
 */
export function initWebVitals() {
  if (!process.isClient) return;

  // Dynamically import web-vitals library
  import("web-vitals")
    .then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(reportWebVital);
      onFID(reportWebVital);
      onFCP(reportWebVital);
      onLCP(reportWebVital);
      onTTFB(reportWebVital);
    })
    .catch(err => {
      console.warn("Failed to load web-vitals:", err);
    });
}
