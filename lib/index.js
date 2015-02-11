var apps = {}
module.exports = apps

apps.scrape = require('./scrape.js')
apps.insert = require('./insert.js')
apps.delete = require('./delete.js')

