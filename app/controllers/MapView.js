
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

Ti.Geolocation.purpose = "For Treatment Test Calculator Application";
Ti.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
/*Titanium.Geolocation.addEventListener('location', function(e)
{
	 longitude = e.coords.longitude;
     latitude = e.coords.latitude;
     alert(longitude);
     alert(latitude);
	
});*/


/*if(OS_IOS)
{

 

	$.mountainView.latitude = latitude;
	$.mountainView.longitude = longitude;
	$.mapview.annotations = [$.mountainView];
	$.mapview.region = {latitude:latitude, longitude:longitude, latitudeDelta:0.01, longitudeDelta:0.01};
	

}*/

var mapview, MapModule;
if(OS_IOS)
{
	mapview =$.mapview;
	mountainView = $.mountainView;
}

if(OS_ANDROID)
{
	
	 MapModule = require('ti.map');
	
	
	var appc = MapModule.createAnnotation({
    latitude: latitude,
    longitude: longitude,
    pincolor: MapModule.ANNOTATION_GREEN,
   
	});
		
	
	 mapview= MapModule.createView({mapType:MapModule.NORMAL_TYPE,
	userLocation: true,
    mapType: MapModule.NORMAL_TYPE,
    animate: true,
    region: {latitude: latitude, longitude: longitude, latitudeDelta: 0.1, longitudeDelta: 0.1 },
    annotations: [appc]
    });

	$.viewMap.add(mapview);
	
	
	
	
}



function searchPlaceInMap(e)
	{
		
		Titanium.Geolocation.forwardGeocoder('Margao, Goa', function(e)
		{
			alert(e.latitude);
			alert(e.longitude);
			
			if(OS_IOS)
			{
			mountainView.latitude = e.latitude;
			mountainView.longitude = e.longitude;
			mapview.annotations = [mountainView];
			}
			
			mapview.region={latitude: e.latitude, longitude: e.longitude, latitudeDelta: 0.1, longitudeDelta: 0.1 };
			
			if(OS_ANDROID)
			{
			 appc = MapModule.createAnnotation({
  			  latitude: e.latitude,
   			 longitude: e.longitude,
  		 	 pincolor: MapModule.ANNOTATION_GREEN,
   
			});
			mapview.annotations=[appc];
			}
		
		});
		
	}
