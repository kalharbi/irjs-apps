var apps = require('../lib')

var title = apps.scrape('com.evernote', function(title){
	console.log(title)	
})