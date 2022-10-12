const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request recieved!");
  console.log(req.url);
  res.end("Request recieved~~");
});

server.on("close", () => {
  console.log("Server close!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server start!");
});
