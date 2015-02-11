var apps = require('../lib')

var host_name = 'localhost',
	port_number = 27017,
	db_name = 'play_apps',
	collection_name = 'listing'

apps.scrape('com.evernote', function(app_info) {

	apps.insert(host_name, port_number,
		db_name, collection_name, app_info, function(doc_id) {
			console.log('Inserted a document into the listing collection, _id: ' + doc_id + '.')
		})
})
