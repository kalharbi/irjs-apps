var apps = {}
module.exports = apps

apps.scrape = require('./scrape.js')
apps.insert = require('./insert.js')
apps.update = require('./update.js')
apps.find = require('./find.js')
apps.removeApp = require('./removeApp.js')

