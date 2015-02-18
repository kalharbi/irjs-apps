var should = require('should')
var apps = require('../lib')

var host_name = 'localhost',
	port_number = 27017,
	db_name = 'play_apps',
	collection_name = 'listing',
	package_to_find = 'com.google.android.apps.maps';

describe('find', function() {
	it('should find a document in mongodb with the field package equal to ' +
		package_to_find, function(done) {
		apps.find(host_name, port_number,
			db_name, collection_name, package_to_find, function(error, result) {
				should.exist(result);
				done();
			});
	})
})
