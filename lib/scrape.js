var request = require('request')
var cheerio = require('cheerio')

// Scrape the Google Play store
module.exports = function(package_name, callback) {

	var play_url = 'https://play.google.com/store/apps/details?id=' + package_name

	var req = request(play_url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var $ = cheerio.load(body)
			var title = $('div.document-title').text().trim()
			var description = $('div.show-more-content div.id-app-orig-desc').text()
			var rating = $('div.rating-box div.score-container div.score').text()
			var downloads_count = $('div.stars-count').text().replace(/\D/g, '')
			var app_info = {
				'package': package_name,
				'title': title,
				'description': description,
				'rating': rating,
				'downloads_count': downloads_count
			}
			//console.log(JSON.stringify(app_info))
			callback(app_info)
		} else {
			console.log(error)
		}
	});
	req.end()
}
