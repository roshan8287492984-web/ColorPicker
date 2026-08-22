const CACHE_NAME = "colorpick-error-shell-v3";

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key.startsWith("colorpick-error-shell-") && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || request.mode !== "navigate") return;

  event.respondWith((async () => {
    try {
      const response = await fetch(request);

      // Live Server returns a normal HTTP 404 response containing
      // "Cannot GET ...". That is still a successful fetch promise,
      // so we must explicitly replace non-2xx navigation responses.
      if (response.ok) return response;

      if (response.status >= 400 && response.status < 600) {
        const errorUrl = new URL("404.html", self.registration.scope);
        const errorResponse = await fetch(errorUrl, { cache: "no-store" });
        const html = await errorResponse.text();
        return new Response(html, {
          status: response.status === 404 ? 404 : response.status,
          statusText: response.status === 404 ? "Not Found" : "Error",
          headers: { "Content-Type": "text/html; charset=utf-8" }
        });
      }

      return response;
    } catch (error) {
      const errorUrl = new URL("404.html", self.registration.scope);
      const errorResponse = await fetch(errorUrl, { cache: "no-store" });
      const html = await errorResponse.text();
      return new Response(html, {
        status: 404,
        statusText: "Not Found",
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }
  })());
});
