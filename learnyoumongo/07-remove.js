const MongoClient = require("mongodb").MongoClient
const dataBaseName = process.argv[2]
const collection = process.argv[3]
const idWillRemove = process.argv[4]
const url = "mongodb://localhost:27017/" + dataBaseName

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
	if (err) throw err;

	db.db(dataBaseName)
		.collection(collection)
		.deleteOne({
			"_id" : idWillRemove
		}, function(error) {
			if (error) throw error;
			console.log("1 document deleted");
			db.close();
		});

});