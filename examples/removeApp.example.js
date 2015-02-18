var apps = require('../lib')

var host_name = 'localhost',
	port_number = 27017,
	db_name = 'play_apps',
	collection_name = 'listing',
	package_to_remove = process.argv.slice(2)[0] || 'com.evernote';

apps.removeApp(host_name, port_number,
	db_name, collection_name, package_to_remove, function(error, result) {
	})
