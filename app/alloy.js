// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};


Alloy.Collections.favouritesUCC =  Alloy.Collections.instance('FavouritesUCC') ;

Alloy.Globals.getFavouritesUCCData = function() {

	favouritesUCC_Data = [
	 		{
	 	        "center_name": "Urgent Care of Polymouth ",
	            "center_address": "10 main Street of Polymouth",
	            "center_phone":"(555) 555-8121",
	       },
	       {
	 	        "center_name": "First Urgent Care  ",
	            "center_address": "10 main Street of Polymouth",
	            "center_phone":"(555) 555-2121",
	       },
	       {
	 	        "center_name": "Urgent Care Centers ",
	            "center_address": "10 main Street of Polymouth",
	            "center_phone":"(555) 555-9931",
	       },
	       {
	 	        "center_name": "Urgent Care of Polymouth ",
	            "center_address": "10 main Street of Polymouth",
	            "center_phone":"(555) 555-8121",
	       },
	       {
	 	        "center_name": "First Urgent Care  ",
	            "center_address": "10 main Street of Polymouth",
	            "center_phone":"(555) 555-2121",
	       },
	       {
	 	        "center_name": "Urgent Care Centers ",
	            "center_address": "10 main Street of Polymouth",
	            "center_phone":"(555) 555-9931",
	        }
	
	
	   ];
	
	return favouritesUCC_Data
	
}

Alloy.Collections.favouritesUCC.add(Alloy.Globals.getFavouritesUCCData());
console.log(Alloy.Collections.favouritesUCC.models.length);

