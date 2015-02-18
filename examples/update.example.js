var apps = require('../lib')

var host_name = 'localhost',
    port_number = 27017,
    db_name = 'play_apps',
    collection_name = 'listing',
    package_name = process.argv.slice(2)[0] || 'com.evernote',
    field_to_update = process.argv.slice(2)[1] || 'package',
    update_value = process.argv.slice(2)[2] || 'com.evernote';



apps.update(host_name, port_number, db_name,
    collection_name, package_name, field_to_update, update_value, function(result) {});