var http = require("http")
var url = require("url")

// Cria o servidor
var server = http.createServer();

// Escuta requisição
server.on("request", function(req, res) {
    
    // Obtém um objeto do tipo "url" através da propriedade url do objeto request
    var urlObject = url.parse(req.url, true);

    // Caso a rota contenha parâmetros previamente definidos
    if (urlObject.pathname == "/api/parsetime" || urlObject.pathname == "/api/unixtime") {

    	// Seta cabeçalho como JSON
	    res.writeHead(200, {"Content-Type": "application/json"});

	    // Obtém a data passada como param na URL
	    var dt = new Date(urlObject.query.iso);
		var objectResponse = {};

	    if (urlObject.pathname == "/api/parsetime" ) {
			// Caso a API exija data parseada por meio da rota
		    objectResponse.hour = dt.getHours();
		    objectResponse.minute = dt.getMinutes();
		    objectResponse.second = dt.getSeconds();
	    } else {
			// Caso a API exija data unixtime por meio da rota
	    	objectResponse.unixtime = dt.getTime();
	    }

	    //console.log(objectResponse);
	    res.write(JSON.stringify(objectResponse));
    	res.end();

    } else {
    	// Caso rota não seja válida, servidor retorna erro de página não encontrada
    	res.writeHead(404, {"Content-Type": "text/html"});
		res.write("<h1>Not found!</h1>");
		res.end();
    }

})

// Seta a porta para escuta, via primeiro argumento do terminal
server.listen(process.argv[2]);