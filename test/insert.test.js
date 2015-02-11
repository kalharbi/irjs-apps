var should = require('should')
var apps = require('../lib')

var host_name = 'localhost',
	port_number = 27017,
	db_name = 'play_apps',
	collection_name = 'listing'

describe('insert', function() {

	it('should insert a document into mongodb', function() {

		apps.scrape('com.evernote', function(app_info) {
			app_info['title'].should.be.equal('Evernote')

			apps.insert(host_name, port_number,
				db_name, collection_name, app_info, function(doc_id) {
					should.exist(doc_id)
				})
		})
	})
})
