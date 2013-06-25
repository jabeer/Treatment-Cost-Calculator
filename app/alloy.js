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
Alloy.Collections.ProfileModel =  Alloy.Collections.instance('ProfileModel') ;

Alloy.Globals.getFavouritesUCCData = function() {

	favouritesUCC_Data = [
	 		{
	 	        "center_name": "Urgent Care of Polymouth ",
	            "center_address": "10 main Street of Polymouth",
	            "center_phone":"(555) 555-8121",
	            "center_distance":"5.5 mi",
	            "ifFav" : "Yes"
	       },
	       {
	 	        "center_name": "First Urgent Care  ",
	            "center_address": "10 main Street of Polymouth",
	            "center_phone":"(555) 555-2121",
	            "center_distance":"7.2 mi",
	            "ifFav" : "Yes"
	       },
	       {
	 	        "center_name": "Urgent Care Centers ",
	            "center_address": "10 main Street of Polymouth",
	            "center_phone":"(555) 555-9931",
	            "center_distance":"5.6 mi",
	            "ifFav" : "No"
	       },
	       {
	 	        "center_name": "Urgent Care of Polymouth 1",
	            "center_address": "10 main Street of Polymouth",
	            "center_phone":"(555) 555-8121",
	            "center_distance":"2.5 mi",
	              "ifFav" : "No"
	            
	       },
	       {
	 	        "center_name": "First choice Urgent Care  ",
	            "center_address": "10 main Street of Polymouth",
	            "center_phone":"(555) 555-2121",
	            "center_distance":"5.5 mi",
	              "ifFav" : "No"
	       },
	       {
	 	        "center_name": "Urgent Care Centers 3",
	            "center_address": "10 main Street of Polymouth",
	            "center_phone":"(555) 555-9931",
	            "center_distance":"1.8 mi",
	             "ifFav" : "Yes"
	        }
	
	
	   ];
	
	return favouritesUCC_Data
	
}



Alloy.Globals.getProfileData = function() {

	profile_Data = [
	 		{
	 	        "FirstName": "Chuck",
	            "LastName": "Smith",
	            "Gender":"M",
	            "Age":"45",
	            "Email":"chuck@gmail.com",
	            "Address":"123 S.Main Sl,Aggg, 0030 New York,NY",
	            "SchoolAddress":"123 S.Main Sl,Aggg, 0030 New York,NY",
	            "active":"true"
	            
	            
	       },
	       {
	 	        "FirstName": "Mary",
	            "LastName": "Smith",
	            "Gender":"F",
	            "Age":"42",
	            "Email":"mary@gmail.com",
	            "Address":"123 S.Main Sl,Aggg, 0030 New York,NY",
	            "SchoolAddress":"123 S.Main Sl,Aggg, 0030 New York,NY",
	            "active":"false"
	       },
	       {
	 	        "FirstName": "Kevin",
	            "LastName": "Smith",
	            "Gender":"M",
	            "Age":"18",
	            "Email":"kevin@gmail.com",
	            "Address":"123 S.Main Sl,Aggg, 0030 New York,NY",
	            "SchoolAddress":"123 S.Main Sl,Aggg, 0030 New York,NY",
	            "active":"false"
	       },
	      
	
	   ];
	
	return profile_Data
	
}




Alloy.Collections.favouritesUCC.add(Alloy.Globals.getFavouritesUCCData());
Alloy.Collections.ProfileModel.add(Alloy.Globals.getProfileData());
console.log(Alloy.Collections.favouritesUCC.models.length);


