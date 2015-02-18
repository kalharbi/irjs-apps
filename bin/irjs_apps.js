#!/usr/bin/env node

var apps = require('../lib'),
    program = require('commander'),
    hostName = 'localhost',
    portNumber = 27017,
    dbName = 'play_apps',
    collectionName = 'listing'

var setHost = function(host) {
    hostName = host
}
var setPort = function(port) {
    portNumber = port
}
var setDB = function(db) {
    dbName = db
}
var setCollection = function(collection) {
    collectionName = collection
}
program
    .version("0.0.1")
    .description("Scrape the Google Play Store listing details webpage" +
        " and store the details in MongoDB documents.");
program
    .option('-H, --host_name <arg>', "The host name that the mongod is connected to." +
        " Default host is " + hostName, setHost)
    .option('-b, --db_name <arg>', "The name of MongoDB database to store the listing" +
        " details. Default name is " + dbName, setDB)
    .option('-p, --port_number <arg>', "The port number that the mongod instance is" +
        " listening. Default number is " + portNumber, setPort)
    .option('-c, --collection <arg>', "The name of MongoDB database collection to" +
        " store the disting details. Default name is " + collectionName,
        setCollection);
program
    .command("scrape <package_name>")
    .description("Scrape the Google Play store webpage for the given package name." +
    	" and print the listing details information into STDOUT")
    .action(function(package_name) {
        apps.scrape(package_name, function(result, error) {
        if(result)
        	console.log(JSON.stringify(result))
        });
    });
program
    .command("insert <package_name>")
    .description("Insert an app's listing details by the given package name.")
    .action(function(package_name) {
        apps.insert(hostName, portNumber,
            dbName, collectionName, package_name, function(error, doc_id) {});
    });

program
    .command("find <package_name>")
    .description("Find the app's listing details by the given package name.")
    .action(function(package_name) {
        apps.find(hostName, portNumber,
            dbName, collectionName, package_name, function(error, result) {})
    });

program
    .command("remove <package_name>")
    .description("Remove an app's listing details for the given package name.")
    .action(function(package_name) {
        apps.removeApp(hostName, portNumber,
            dbName, collectionName, package_name, function(error, result) {})
    });

program
    .command("update <package_name> <field_to_update> <value_to_update>")
    .description("Update the given field in the app's listing details collection.")
    .action(function(package_name, field_to_update, value_to_update) {
        apps.update(hostName, portNumber, dbName, collectionName,
            package_name, field_to_update, value_to_update, function(error, result) {});

    });

program.parse(process.argv);

if (!program.args.length){
	program.help();
}