var fs = require("fs");
var result = fs.readFile(process.argv[2], function(err, data) {
    if (err) throw err;
    var buf = new Buffer(data);
    console.log(Number(buf.toString().split("\n").length) - 1);
});
