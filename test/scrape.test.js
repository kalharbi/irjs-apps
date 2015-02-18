var should = require('should')
var apps = require('../lib')


describe('scrape', function() {

	it('should return the app title from the Google Play store', function() {
		apps.scrape('com.evernote', function(app_info) {
			app_info['title'].should.be.equal('Evernote')
		})
	})
})
