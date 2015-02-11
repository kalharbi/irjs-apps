var should = require('should')
var apps = require('../lib')


describe('title', function() {

	it('should return the app title from the Google Play store', function() {
		var title = apps.scrape('com.evernote', function(app_info) {
			app_info['title'].should.be.equal('Evernote')
		})
	})
})
