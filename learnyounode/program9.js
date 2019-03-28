var http = require("http");
var stStr = "", ndStr = "", rdStr = "";

// primeira requisição
http.get(process.argv[2], function(res) {
	
	res.on("data", function(data) {
		stStr += data.toString();		
	});

	res.on("end", function() {
		// imprime primeira requisição
		console.log(stStr);
		// segunda requisição
		http.get(process.argv[3], function(re) {
			
			re.on("data", function(dt) {
				ndStr +=  dt.toString();
			})
			re.on("end", function() {
				// imprime segunda requisição
				console.log(ndStr)
				// terceira requisição
				http.get(process.argv[4], function(r){
					r.on("data", function (ldt) {
						rdStr += ldt.toString();
					})
					r.on("end", function () {
						// imprime terceira requisição
						console.log(rdStr);
					})
				})
			})

		})

	})

})