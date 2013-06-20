
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
	
	// //var win3 = Alloy.createController('UrgentCareList').getView();
   // // Alloy.Globals.navBar.open(win3, {animated : true});
	// Alloy.Globals.mainWin.add(Alloy.createController('UrgentCareList').getView());

Alloy.Globals.searchTap=false;
Alloy.Globals.favTap=false;

//Alloy.Globals.tabHome.close(Alloy.Globals.mainWin);
Alloy.Globals.UrgentCareList=Alloy.createController('UrgentCareList').getView();
if(OS_ANDROID){
	//Alloy.Globals.tabHome.close();
	Alloy.Globals.tabHome.open(Alloy.Globals.UrgentCareList);

}
if(OS_IOS)	
Alloy.Globals.tabHome.open(Alloy.Globals.UrgentCareList,{animated:true});


}
