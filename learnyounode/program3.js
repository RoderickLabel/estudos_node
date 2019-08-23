var fs = require("fs");
var result = fs.readFileSync(process.argv[2]);

var buffer = new Buffer(result);
console.log(Number(buffer.toString().split("\n").length) - 1);