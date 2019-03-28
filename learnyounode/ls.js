var fs = require("fs");
var path = require("path");

module.exports = function (dir, extension, callback) {
	fs.readdir(dir, function (err, data) {
	    var out = []
		if (err) { return callback(err) }
		for(file in data) {
	        if(path.extname(data[file]) == "." + extension) {
	        	out.push(data[file])
	        }
	    }
		callback(null, out)
	});
};
