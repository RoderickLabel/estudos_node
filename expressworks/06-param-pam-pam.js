const express = require("express")
const app = express()
const crypto = require("crypto")

app.put('/message/:id', function (req, res, next) {

	let id = req.params.id	
	let hash = crypto
		.createHash('sha1')
		.update(new Date().toDateString().toString() + id)
		.digest('hex');

	res.send(hash)
});

app.listen(process.argv[2])