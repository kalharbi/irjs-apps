var mongodb = require('mongodb')

module.exports = function(host_name, port_number, db_name,
	collection_name, json_doc, callback) {
	var mongoClient = mongodb.MongoClient;
	// Connect to the db
	mongoClient.connect("mongodb://" + host_name +
		":" + port_number.toString() + "/" + db_name, function(err, db) {
			if (err) {
				console.error(err);
				callback(null);
			} else {
				var collection = db.collection(collection_name);
				collection.insert(json_doc, function(err, result) {
					db.close()
					callback(result[0]._id)
				});
			}
		});
}
