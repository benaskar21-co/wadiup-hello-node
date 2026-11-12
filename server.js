const http = require("http");
const port = process.env.PORT || 8080;
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1>Hello, world</h1><p>Deployed on Wadiup with: a public Git address (Node.js detected, no Dockerfile)</p>");
}).listen(port, () => console.log("hello listening on " + port));
