const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

fs.readFile("test-file.txt", () => {
  setTimeout(() => console.log("Timeout 2 finished"), 0);
  setImmediate(() => {
    setImmediate(() => {
      setImmediate(() => console.log("Immediat 4 finished"));
      console.log("Immediat 3 finished");

      process.nextTick(() => console.log("Nexttick 1 finished"));

      crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
      console.log(Date.now() - start, "password encrypted");

      crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
      console.log(Date.now() - start, "password encrypted");

      crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
      console.log(Date.now() - start, "password encrypted");

      crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
      console.log(Date.now() - start, "password encrypted");
    });
    setTimeout(() => console.log("Timeout 3 finished"), 0);
    console.log("Immediat 2 finished");
  });
  console.log("I/O finished");
});
setImmediate(() => console.log("Immediat 1 finished"));
setTimeout(() => console.log("Timeout 1 finished"), 0);

console.log("Hello from top-level code!");
