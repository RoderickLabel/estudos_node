var fs = require("fs");

module.exports = function (path, extension, callback) {
	fs.readdir(path, function (err, list) {
		if (err) { return callback(err); }
		return callback(err, list);			
	});
};
