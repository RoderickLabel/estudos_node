
const MongoClient = require("mongodb").MongoClient;
const age = parseInt(process.argv[2]);
const url = "mongodb://localhost:27017/learnyoumongo";


MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {

	if (err) throw err;

	db.db("learnyoumongo")
		.collection('parrots')
		.find(
			{ 
				age : { $gt : +age } 
			}, 
			{
				projection : { name: 1, age: 1, _id: 0 } 
			}
		).toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			db.close();
		});

}); 

// query via client
// > printjson( db.getCollection('parrots').find({ age : { $gt : 10 } }, {projection : { name: 1, age: 1, _id: 0 }} ) )