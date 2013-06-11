
// These parameters can also be defined in the TSS file.



/*
 * MethodName: goToDashboard
 * Description: Opens Dashboard View
 *  
 */


function goToDashboard()
{
	Alloy.createController('tabBar').getView().open();
}




var latitude, longitude;
Titanium.Geolocation.getCurrentPosition(function(e)
{
    if (e.error)
    {
        alert('HFL cannot get your current location');
        return;
    }
 
     longitude = e.coords.longitude;
     latitude = e.coords.latitude;

});

Titanium.Geolocation.purpose = "For Treatment Test Calculator Application";
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
/*Titanium.Geolocation.addEventListener('location', function(e)
{
	 longitude = e.coords.longitude;
     latitude = e.coords.latitude;
     alert(longitude);
     alert(latitude);
	
});*/



if(OS_IOS)
{

 

	$.mountainView.latitude = latitude;
	$.mountainView.longitude = longitude;
	$.mapview.annotations = [$.mountainView];
	$.mapview.region = {latitude:latitude, longitude:longitude, latitudeDelta:0.01, longitudeDelta:0.01};
	

}


if(OS_ANDROID)
{
	
	var MapModule = require('ti.map');
	
	
	var appc = MapModule.createAnnotation({
    latitude: latitude,
    longitude: longitude,
    pincolor: MapModule.ANNOTATION_GREEN,
   
	});
		
	
	var mapview = MapModule.createView({mapType:MapModule.NORMAL_TYPE,
	userLocation: true,
    mapType: MapModule.NORMAL_TYPE,
    animate: true,
    region: {latitude: latitude, longitude: longitude, latitudeDelta: 0.1, longitudeDelta: 0.1 },
    annotations: [appc]
    });

	$.viewMap.add(mapview);
	
	
	
	function searchPlaceInMap(e)
	{
		
		Titanium.Geolocation.forwardGeocoder($.placeSearch.value, function(e)
		{
			
			mapview.region={latitude: e.latitude, longitude: e.longitude, latitudeDelta: 0.1, longitudeDelta: 0.1 };
			appc = MapModule.createAnnotation({
  			  latitude: e.latitude,
   			 longitude: e.longitude,
  		 	 pincolor: MapModule.ANNOTATION_GREEN,
   
			});
		mapview.annotations=[appc];
		});
		
	}
}
