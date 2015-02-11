var mongodb = require('mongodb')
var apps = require('../lib')

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
				apps.scrape(package_name, function(app_info) {
					var collection = db.collection(collection_name);
					collection.insert(app_info, function(err, result) {
						if (err) {
							console.error('Error: Failed to update.' + err)
							db.close()
							callback(null)
						} else {
							db.close()
							console.log('A new document (Id # ' + result[0]._id + ') for ' +
								package_name +
								' has been inserted to ' + collection_name)
							callback(null, result[0]._id)
						}
					});
				});
			}
		});
}
