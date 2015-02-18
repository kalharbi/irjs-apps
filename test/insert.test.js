var should = require('should')
var apps = require('../lib')

var host_name = 'localhost',
	port_number = 27017,
	db_name = 'play_apps',
	collection_name = 'listing',
	package_to_insert = 'com.google.android.apps.maps';

describe('insert', function() {
	it('should insert a document into mongodb', function(done) {
		apps.insert(host_name, port_number,
			db_name, collection_name, package_to_insert, function(error, doc_id) {
				should.exist(doc_id);
				done();
			});
	})
})
