const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017/" + process.argv[2]

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {

	if (err) throw err;

	db.db("learnyoumongo")
		.collection("users")
		.updateOne({
			"username": "tinatime"
		}, {
			$set : {"age" : 40}
		}, function(error) {
			if (error) throw error;
			db.close();
		})
});