var apps = require('../lib'),
    package_to_scrape = process.argv.slice(2)[0] || 'com.evernote'
apps.scrape(package_to_scrape, function(app_info, err){
	if(app_info)
		console.log(JSON.stringify(app_info))
})