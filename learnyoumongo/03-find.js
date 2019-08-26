
const MongoClient = require("mongodb").MongoClient;
const idade = parseInt(process.argv[2]);
const url = "mongodb://localhost:27017/learnyoumongo";


MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
	
	if (err) throw err;

	db.db("learnyoumongo")
		.collection("parrots")
		.find({
			age : { $gt : idade } 
		}).toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			db.close();
		});

});