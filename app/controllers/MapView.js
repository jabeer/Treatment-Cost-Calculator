var args = arguments[0] || 0;

// These parameters can also be defined in the TSS file.



/*
 * MethodName: goToDashboard
 * Description: Opens Dashboard View
 *  
 


function goToDashboard()
{
	Alloy.createController('tabBar').getView().open();
}

*/


var latitude, longitude;

Ti.Geolocation.purpose = "For Treatment Test Calculator Application";
Ti.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;


var mapview, MapModule;
if(OS_IOS)
{
	mapview =$.mapview;
	mountainView = $.mountainView;
}

if(OS_ANDROID)
{
	
	 MapModule = require('ti.map');
	mapview= MapModule.createView({mapType:MapModule.NORMAL_TYPE,
	userLocation: true,
    mapType: MapModule.NORMAL_TYPE,
    animate: true,
    
    });

	$.viewMap.add(mapview);

	
}



	
		Titanium.Geolocation.forwardGeocoder(args.street.text, function(e)
		{
			alert(e.success);
			
			
			if(OS_IOS)
			{
			mountainView.latitude = e.latitude;
			mountainView.longitude = e.longitude;
			mapview.annotations = [mountainView];
			}
			
			mapview.region={latitude: e.latitude, longitude: e.longitude, latitudeDelta: 0.1, longitudeDelta: 0.1 };
			
			if(OS_ANDROID)
			{
				alert('android');
			 appc = MapModule.createAnnotation({
  			  latitude: e.latitude,
   			 longitude: e.longitude,
  		 	 pincolor: MapModule.ANNOTATION_GREEN,
   
			});
			alert(appc);
			mapview.annotations=[appc];
			}
		
		});
		
	
