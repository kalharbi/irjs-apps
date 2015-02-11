#!/usr/bin/env node

var apps = require('../lib'),
	program = require('commander'),
	host_name = 'localhost',
	port_number = 27017,
	db_name = 'play_apps',
	collection_name = 'listing'

program
	.version('0.0.1')
	.description('Scrape the Google Play Store listing details webpage' +
		' and store the details in MongoDB documents.')
    .option('-f, --find', 'package_name')
	.option('-i, --insert', 'package_name')
	.option('-u, --update', 'package_name field_to_update value_to_update')
    .option('-d, --delete', 'package_name')
	.parse(process.argv);

if (!program.args.length) {
	program.help();
} else {
	if (program.insert) console.log(' Insert');
	if (program.update) console.log(' Update');
	if (program.insert) console.log(' Delete');
}
