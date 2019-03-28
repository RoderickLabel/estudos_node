var http = require("http")
var url = process.argv[2]
var strTotal = ""

http.get(url, function(res) {
    res.setEncoding("utf8")
    res.on("data", function(data) {
        strTotal += data.toString()
    })
    res.on("end", function () {    	
	    console.log(strTotal.length);
	    console.log(strTotal)
    }) 
});
