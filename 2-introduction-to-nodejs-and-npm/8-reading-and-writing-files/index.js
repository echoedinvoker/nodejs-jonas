const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${new Intl.DateTimeFormat(
  "zh-TW"
).format(new Date())}`;

fs.writeFileSync("./txt/output.txt", textOut);
