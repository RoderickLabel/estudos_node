const MongoClient = require("mongodb").MongoClient
const size = process.argv[2];
const url = "mongodb://localhost:27017/learnyoumongo"

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
	if (err) throw err;
	db.db("learnyoumongo")
		.collection("prices")
		.aggregate([
			{$match : { size: size }},
			{$group : {
				_id : 'average',
				average: {$avg : '$price'}
			}}
		]).toArray(function(error, results) {
			if (error) throw error;
			console.log(Number(results[0].average).toFixed(2));
			db.close();
		});
});