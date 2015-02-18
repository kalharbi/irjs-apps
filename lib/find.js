var mongodb = require('mongodb')

module.exports = function(host_name, port_number, db_name,
	collection_name, package_name, callback) {
	var mongoClient = mongodb.MongoClient;
	// Connect to the db
	mongoClient.connect("mongodb://" + host_name +
		":" + port_number.toString() + "/" + db_name, function(err, db) {
			if (err) {
				console.error(err);
				callback(null);
			} else {
				var collection = db.collection(collection_name);
				collection.find({
					'package': package_name
				}).toArray(function(err, result) {
					if (err) {
						console.error('Error: Failed to find documents with'
							+ ' the field package equal to ' + package_name)
						db.close();
						callback(null);
					} else {
						if (result.length > 0){
							console.log('Found ' + result.length + ' documents with the'
								+ ' field package equal to ' + package_name);
							console.dir(result)
						}
						else{
							console.log('No documents are found with the'
								+ ' field package equal to ' + package_name);
						}

						db.close();
						callback(result, result);
					}
				});
			}
		});
}
