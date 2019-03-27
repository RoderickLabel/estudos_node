var net = require("net")

var tDs = function (n) {
    if (n.toString().length == 1) {
    	return "0" + n.toString();
    }
    return n.toString();
};

var server = net.createServer(function(socket) {
    var dt = new Date();
    var out = tDs(dt.getFullYear()) + "-";
    out += tDs(dt.getMonth() + 1) + "-";
    out += tDs(dt.getDate()) + " ";
    out += tDs(dt.getHours()) + ":" 
    out += tDs(dt.getMinutes());
    socket.end(out + "\n"); 
})
server.listen(process.argv[2])
