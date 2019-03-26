var ls = require("./ls");
var path = require("path");
var argPath = path.normalize(process.argv[2]);
var extension = "." + process.argv[3];

ls(argPath, extension, function(err, list) {
    if (err) { console.log(err); }
    for(file in list) {
    	var fileName = list[file];
        if(path.extname(fileName) == extension) {
        	console.log(fileName);
        }
    }
});