const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/overview") {
    res.end("This is OVERVIEW!");
  } else if (req.url === "/product") {
    res.end("This is PRODUCT!");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "Hello World",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
