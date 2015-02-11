var should = require('should')
var apps = require('../lib')

var host_name = 'localhost',
	port_number = 27017,
	db_name = 'play_apps',
	collection_name = 'listing'

describe('insert', function() {
	it('should insert a document into mongodb', function(done) {
		apps.insert(host_name, port_number,
			db_name, collection_name, 'com.google.android.apps.maps', function(error, doc_id) {
				console.log(doc_id)
				should.exist(doc_id)
				done()
			});
	})
})
