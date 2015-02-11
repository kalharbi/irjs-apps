var apps = require('../lib')

apps.scrape('com.evernote', function(app_info){
	console.log(JSON.stringify(app_info))	
})