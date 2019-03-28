var ls = require("./ls");
var argPath = process.argv[2];
var extension = process.argv[3];

ls(argPath, extension, function(err, list) {
    if (err) { console.log(err); }
    for(file in list) {
        console.log(list[file]);
    }
});