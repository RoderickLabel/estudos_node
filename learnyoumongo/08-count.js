const MongoClient = require("mongodb").MongoClient
const age = process.argv[2]
const url = "mongodb://localhost:27017/learnyoumongo"

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
	if (err) throw err;

	db.db("learnyoumongo")
		.collection("parrots")
		.count({
			age : { $gt : +age }
		}, function(error, response) {
			if (error) throw error;
			console.log(response);
			db.close();
		})
});