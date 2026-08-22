const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = Number(process.env.PORT || 5500);
const MIME = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8", ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon",
  ".webmanifest": "application/manifest+json"
};

function safePath(urlPath) {
  const pathname = decodeURIComponent(urlPath.split("?")[0]);
  const clean = pathname.replace(/^\/+/, "");
  const file = path.resolve(ROOT, clean || "index.html");
  return file.startsWith(ROOT + path.sep) || file === ROOT ? file : null;
}

function sendFile(res, file, status = 200) {
  fs.readFile(file, (err, data) => {
    if (err) return sendError(res, 500);
    const ext = path.extname(file).toLowerCase();
    res.writeHead(status, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(data);
  });
}

function sendError(res, status) {
  const file = path.join(ROOT, `${status}.html`);
  if (fs.existsSync(file)) return sendFile(res, file, status);
  res.writeHead(status, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(`ColorPick error ${status}`);
}

const server = http.createServer((req, res) => {
  const file = safePath(req.url || "/");
  if (!file) return sendError(res, 400);
  fs.stat(file, (err, stat) => {
    if (!err && stat.isFile()) return sendFile(res, file);
    if (!err && stat.isDirectory()) return sendFile(res, path.join(file, "index.html"));
    sendError(res, 404);
  });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`ColorPick running at http://127.0.0.1:${PORT}/`);
  console.log("Custom error pages are enabled. Try /this-page-does-not-exist");
});
