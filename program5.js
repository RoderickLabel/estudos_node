var fs = require("fs");
var path = require("path");
var argPath = path.normalize(process.argv[2]);
var ext = "." + process.argv[3];

fs.readdir(argPath, function(err, list) {
    if (err) { console.log(err); }
    for(file in list) {
    	var fileName = list[file];
        if(path.extname(fileName) == ext) {
        	console.log(fileName);
        }
    }
});
