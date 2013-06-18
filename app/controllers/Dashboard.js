
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


function showUrgentCare()
{
	
	//var win3 = Alloy.createController('UrgentCareList').getView();
   // Alloy.Globals.navBar.open(win3, {animated : true});
	Alloy.Globals.mainWin.add(Alloy.createController('UrgentCareList').getView());
}
