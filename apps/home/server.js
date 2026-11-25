// prae-home: the page judges see. no keys here, ever.
const http = require("http");

const PORT = process.env.PORT || 8080;
const started = new Date().toISOString();

const page = () => `<!doctype html>
<html><head><meta charset="utf-8"><title>prae</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  body{font-family:system-ui,sans-serif;max-width:640px;margin:60px auto;padding:0 20px;background:#0b0b0c;color:#eee}
  h1{font-size:28px;margin:0 0 8px} p{color:#aaa;line-height:1.5} code{color:#9fe870}
</style></head>
<body>
  <h1>prae is awake</h1>
  <p>short for <i>praegustator</i>, the emperor's food taster. it tastes sketchy crypto links so you don't.</p>
  <p>server time: <code>${new Date().toISOString()}</code><br>running since: <code>${started}</code></p>
</body></html>`;

http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "content-type": "application/json" });
    return res.end(JSON.stringify({ ok: true, time: new Date().toISOString() }));
  }
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  res.end(page());
}).listen(PORT, () => console.log(`prae-home listening on ${PORT}`));
