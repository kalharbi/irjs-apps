var mongodb = require('mongodb')

module.exports = function(host_name, port_number, db_name,
	collection_name, package_name, field_to_update, update_value, callback) {
	var mongoClient = mongodb.MongoClient;
	// Connect to the db
	mongoClient.connect("mongodb://" + host_name +
		":" + port_number.toString() + "/" + db_name, function(err, db) {
			if (err) {
				console.error(err);
				callback(null);
			} else {
				var collection = db.collection(collection_name);
				collection.update({
					'package': package_name
				}, {
					$set: {
						field_to_update: update_value
					}
				}, {
					w: 1
				}, function(err, result) {
					if (err) {
						console.error('Error: Failed to update.' + err)
						db.close()
						callback(null)
					} else {
						console.log('Field ' + field_to_update +
							' has been updated to ' + update_value +
					        ' for ' + package_name)
						db.close()
						callback(result)
					}
				});
			}
		});
}
