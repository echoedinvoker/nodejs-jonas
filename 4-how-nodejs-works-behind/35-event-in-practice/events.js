const EventEmitter = require("events");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There is a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("This is another listener!");
});

myEmitter.on("newSale", (number) => {
  console.log(`There are ${number} items in the stock.`);
});

myEmitter.emit("newSale", 9);

// 44mins
