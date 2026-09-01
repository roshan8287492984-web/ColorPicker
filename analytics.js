/* =========================================================
   COLORPICK - GA4 ENGAGEMENT TRACKING
   Uses the existing GA4 property. No personal data or color
   values are sent; only anonymous interaction event names.
========================================================= */
(function () {
  "use strict";

  window.colorPickTrack = function (eventName, params) {
    try {
      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, params || {});
      }
    } catch (e) {
      // Analytics must never interfere with the website.
    }
  };
})();
