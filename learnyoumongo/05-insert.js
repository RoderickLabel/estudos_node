
const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017/learnyoumongo"
const firstName = process.argv[2]
const lastName = process.argv[3]
const doc = {
	firstName: firstName,
	lastName : lastName
}

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(error, db) {
	
	if (error) throw error;

	db.db("learnyoumongo")
		.collection("users")
		.insertOne(doc, {}, function(err, data) {
			if (err) throw err;
			console.log(JSON.stringify(doc));
			db.close();
		});

});
