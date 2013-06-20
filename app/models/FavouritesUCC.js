exports.definition = {
	config : {
		//"URL" : "http://172.24.223.12:8000/Customers",
		//"debug": 1,
		"columns": {
            "center_name": "String",
            "center_address": "String",
            "center_phone":"String",
            "deleteFlag": "String",
		    "childFlag": "String",
		  
        },
        "defaults": {
            "childFlag": true,
            "deleteFlag": false,
          
        },
		"adapter" : {
			"type" : "properties",			
			"collection_name" : "FavouritesUCC"
		}
	},

	extendModel : function(Model) {
		
		
		_.extend(Model.prototype, {
			// extended functions and properties go here	
		// customProperty: 'book',
            // customFunction: function() {
                // Ti.API.info('I am a book model.');
            // },		
			// dfdf:'dfdf'
		
					
		});

		return Model;
	},
	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
				// will be used with the Rest API sertvice calls
			
			
		});
		return Collection;
	}
}

