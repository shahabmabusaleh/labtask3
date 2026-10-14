const os = require("os");
const util = require("util");

console.log("Temporary directory: " + os.tmpdir());
console.log("Hostname: " + os.hostname());
console.log("Operating system: " + os.platform());
console.log("OS release: " + os.release());
console.log("Uptime: " + (os.uptime() / 3600).toFixed(2) + " hours");
console.log("User information: " + util.inspect(os.userInfo()));
console.log("Total memory: " + (os.totalmem() / 1_000_000_000).toFixed(2) + " GB");
console.log("Free memory: " + (os.freemem() / 1_000_000_000).toFixed(2) + " GB");
console.log("CPU information: " + util.inspect(os.cpus()));
console.log("Network information: " + util.inspect(os.networkInterfaces()));
console.log("Program ended");