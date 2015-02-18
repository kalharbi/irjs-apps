var apps = require('../lib')

var host_name = 'localhost',
	port_number = 27017,
	db_name = 'play_apps',
	collection_name = 'listing',
	package_to_find = process.argv.slice(2)[0] || 'com.facebook.orca';

apps.find(host_name, port_number,
	db_name, collection_name, package_to_find, function(error, result) {
	})
