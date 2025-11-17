const os = require("os");

console.log("Your system is:", os.arch())
console.log("Your free memory:", os.freemem())
console.log("Your network:", os.networkInterfaces())