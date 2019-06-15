console.log("a starting");
exports.done = false;
const b = require("./b.js");
console.log(`In a, b.done = ${b.done}`);
exports.done = true;
console.log("a done");