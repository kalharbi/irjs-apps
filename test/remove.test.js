var should = require('should')
var apps = require('../lib')

var host_name = 'localhost',
	port_number = 27017,
	db_name = 'play_apps',
	collection_name = 'listing',
	package_to_remove = 'com.google.android.apps.maps';

describe('remove', function() {
	it('should remove a document from mongodb with the field package equal to ' +
		package_to_remove, function(done) {
		apps.removeApp(host_name, port_number,
			db_name, collection_name, package_to_remove, function(error, result) {
				should.exist(result);
				done();
			});
	})
})
