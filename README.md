# irjs-apps
Searching Android Apps on the Google Play Store. It scrapes the Google Play 
Store listing details webpage and stores the listing details information 
(title, description, download count, etc.) in a MongoDB collection.


## Requirement
- A running MongoDB instance (mongod server).

## Installation
```npm install irjs-apps -g```


## CLI Usage
```
  Usage: irjs_apps [options] [command]


  Commands:

    scrape <package_name>                Scrape the Google Play store webpage 
                                         for the given package name. and print
					 the listing details information into 
					 STDOUT
    insert <package_name>                Insert an app's listing details by 
                                         the given package name.
    find <package_name>                  Find the app's listing details by the 
                                         given package name.
    remove <package_name>                Remove an app's listing details for 
                                         the given package name.
    update <package_name> <field_to_update> <value_to_update>  Update the given
                                         field in the app's listing details 
					 collection.


  Options:

    -h, --help               output usage information
    -V, --version            output the version number
    -H, --host_name <arg>    The host name that the mongod is connected to. 
                             Default host is localhost
    -b, --db_name <arg>      The name of MongoDB database to store the listing
                             details. Default name is play_apps
    -p, --port_number <arg>  The port number that the mongod instance is 
                             listening. Default number is 27017
    -c, --collection <arg>   The name of MongoDB database collection to store 
                             the disting details. Default name is listing
```

## CLI Examples


### Insert
``` irjs-apps insert com.evernote ```

### Find

``` irjs-apps find com.evernote ```

###Update
``` irjs-apps update com.evernote title "Evernote App"```

###Delete
``` irjs-apps remove com.evernote ```


##API Examples

### Insert

```
var apps = require('../lib')

var host_name = 'localhost',
	port_number = 27017,
	db_name = 'play_apps',
	collection_name = 'listing',
	package_to_insert = process.argv.slice(2)[0] || 'com.facebook.orca';

apps.insert(host_name, port_number,
	db_name, collection_name, package_to_insert, function(error, doc_id) {
		if (doc_id) {
			console.log('Inserted a document into the listing 
			    collection, _id: ' + doc_id + '.')
		} else {
			console.error('Error: Failed to insert a document into
			    the listing collection.')
		}
	})
```

### Find
```
var host_name = 'localhost',
	port_number = 27017,
	db_name = 'play_apps',
	collection_name = 'listing',
	package_to_find = process.argv.slice(2)[0] || 'com.facebook.orca';

apps.find(host_name, port_number,
	db_name, collection_name, package_to_find, function(error, result) {
	})
```

### Update
```
var host_name = 'localhost',
	port_number = 27017,
	db_name = 'play_apps',
	collection_name = 'listing',
    package_name = process.argv.slice(2)[0] || 'com.evernote' , 
	field_to_update = process.argv.slice(2)[1] || 'package',
	update_value = process.argv.slice(2)[2] || 'com.evernote';
    
apps.update(host_name, port_number, db_name,
	collection_name, package_name, field_to_update, update_value, 
	    function(result) {
	});
```

### Delete
```
var host_name = 'localhost',
	port_number = 27017,
	db_name = 'play_apps',
	collection_name = 'listing',
	package_to_remove = process.argv.slice(2)[0] || 'com.evernote';

apps.removeApp(host_name, port_number,
	db_name, collection_name, package_to_remove, function(error, result) {
	})
```


[You can run the examples in the examples directory](examples/) 
