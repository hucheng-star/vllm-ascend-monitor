import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { HOST, LOG_PATH, PID_PATH, PORT, PUBLIC_DIR, REFRESH_MS, ROOT } from "./config.js";
import { readState, refresh, refreshInFlight } from "./refresh.js";

fs.mkdirSync(path.dirname(LOG_PATH), { recursive: true });
const logStream = fs.createWriteStream(LOG_PATH, { flags: "a" });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  logStream.write(`${line}\n`);
}

const clients = new Set();

function broadcast(generatedAt) {
  const payload = `data: ${JSON.stringify({ type: "update", generatedAt })}\n\n`;
  for (const client of clients) client.write(payload);
}

function contentType(filePath) {
  if (filePath.endsWith(".css")) return "text/css; charset=utf-8";
  if (filePath.endsWith(".js")) return "text/javascript; charset=utf-8";
  if (filePath.endsWith(".svg")) return "image/svg+xml";
  return "text/html; charset=utf-8";
}

function sendJson(response, status, body) {
  const payload = JSON.stringify(body);
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(payload);
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://${HOST}:${PORT}`);

  if (url.pathname === "/api/state") {
    const state = (await readState()) || {
      generatedAt: null,
      warnings: [],
      models: [],
      items: [],
      today: { day: "", groups: [] },
      stats: {},
      sources: {},
      pending: refreshInFlight(),
    };
    state.pending = refreshInFlight();
    sendJson(response, 200, state);
    return;
  }

  if (url.pathname === "/api/refresh" && request.method === "POST") {
    refresh()
      .then((state) => broadcast(state.generatedAt))
      .catch((error) => log(`refresh failed: ${error.stack || error.message}`));
    sendJson(response, 202, { ok: true, pending: true });
    return;
  }

  if (url.pathname === "/api/events") {
    response.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });
    response.write("data: {\"type\":\"hello\"}\n\n");
    clients.add(response);
    request.on("close", () => clients.delete(response));
    return;
  }

  const relative = url.pathname === "/" ? "index.html" : url.pathname.replace(/^\/+/, "");
  const filePath = path.normalize(path.join(PUBLIC_DIR, relative));
  if (!filePath.startsWith(PUBLIC_DIR)) {
    response.writeHead(403).end();
    return;
  }
  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }
    response.writeHead(200, { "Content-Type": contentType(filePath), "Cache-Control": "no-store" });
    response.end(data);
  });
});

async function tick() {
  try {
    const state = await refresh();
    broadcast(state.generatedAt);
    log(`refreshed versions=${state.stats.versionCount} today=${state.stats.todayCount} warnings=${state.warnings.length}`);
  } catch (error) {
    log(`refresh failed: ${error.stack || error.message}`);
  }
}

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    log(`already listening on ${HOST}:${PORT}`);
    process.exit(0);
  }
  throw error;
});

server.listen(PORT, HOST, () => {
  fs.writeFileSync(PID_PATH, String(process.pid));
  log(`monitor ready at http://${HOST}:${PORT} root=${ROOT}`);
  tick();
  setInterval(tick, REFRESH_MS);
});
