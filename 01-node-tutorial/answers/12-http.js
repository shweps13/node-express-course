const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (req.url === "/" || req.url === "/home") {
    res.statusCode = 200;
    res.end("<h1>Welcome to the home page!</h1><p>Try /about or /contact</p>");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("<h1>About</h1><p>This is Node.js server</p>");
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end("<h1>Contact</h1><p>This is a demo</p>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404</h1><p>Page not found.</p>");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});