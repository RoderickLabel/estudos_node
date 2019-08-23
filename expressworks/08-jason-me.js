const express = require("express");
const fs = require("fs");
const app = express();
const filePath = process.argv[3];

app.get("/books", function(req, res) {
	fs.readFile(filePath, function (error, fileContent) {
		if (error) throw error;		
		res.send(JSON.parse(fileContent));
	});	
});

app.listen(process.argv[2]);