var apps = require('../lib')

var host_name = 'localhost',
	port_number = 27017,
	db_name = 'play_apps',
	collection_name = 'listing',
    package_name = 'com.evernote',
	field_to_update = 'package',
	update_value = 'com.EVERNOTE'
    


apps.update(host_name, port_number, db_name,
	collection_name, package_name, field_to_update, update_value, function(result) {
		console.log(result)
	});
