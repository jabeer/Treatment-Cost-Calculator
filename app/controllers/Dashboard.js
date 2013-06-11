
if (OS_IOS) 
{
 $.dashboardView.setEditable(false);
}

/*
 * MethodName: showMap
 * Description: Shows Map View
 *  
 */




function showMap()
{
	Alloy.createController('MapView').getView().open();
}
