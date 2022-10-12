const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  const readeble = fs.createReadStream("test-file.txt");
  //   readeble.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readeble.on("end", () => {
  //     res.end();
  //   });
  readeble.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...");
});
