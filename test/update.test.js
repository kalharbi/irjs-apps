var should = require('should')
var apps = require('../lib')

var host_name = 'localhost',
	port_number = 27017,
	db_name = 'play_apps',
	collection_name = 'listing',
	package_name = 'com.evernote',
	field_to_update = 'package',
	update_value = 'com.EVERNOTE'


describe('update', function() {

	it('should update a field in MongoDB document(s)', function() {
		apps.update(host_name, port_number, db_name, collection_name,
			package_name, field_to_update, update_value, function(result) {
				should.exist(result)
			});
	})
})
