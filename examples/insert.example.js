var apps = require('../lib')

var host_name = 'localhost',
	port_number = 27017,
	db_name = 'play_apps',
	collection_name = 'listing'

apps.insert(host_name, port_number,
	db_name, collection_name, 'com.facebook.orca', function(error, doc_id) {
		if (doc_id) {
			console.log('Inserted a document into the listing collection, _id: ' + doc_id + '.')
		} else {
			console.error('Error: Failed to insert a document into the listing collection.')
		}
	})
