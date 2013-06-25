var args=arguments[0] || 0;
function doGoToFav(){
		$.AddToFav.close();
		if(OS_ANDROID){
	//Alloy.Globals.tabHome.close();
	// var win = Titanium.UI.currentWindow;
	// win.close();
	Alloy.createController('tabBar').getView().open();
}
		Alloy.Globals.tabGrp.setActiveTab(Alloy.Globals.tabFav);
		
	
}
function doCloseModal()
{
	
	$.AddToFav.close();
}
function doUndo(){
	if(args.newFavorite=="Yes")
{
Alloy.Collections.favouritesUCC.models[args.favorite.index].set({'ifFav':'No'});
Alloy.Collections.favouritesUCC.trigger('change');
}
if(args.newFavorite=="No")
{
Alloy.Collections.favouritesUCC.models[args.favorite.index].set({'ifFav':'Yes'});
Alloy.Collections.favouritesUCC.trigger('change');
}
	$.AddToFav.close();	
}
var closeButton=Ti.UI.createButton({
	systemButton:Ti.UI.iPhone.SystemButton.DONE
});


// $.AboutApp.size=Titanium.UI.SIZE;

$.AddToFav.rightNavButton=closeButton;

closeButton.addEventListener("click",function(e){
	$.AddToFav.close();
});



if(Ti.Platform.osname=="iphone")
{
	$.AddToFav.size=Ti.UI.SIZE;
	$.AddToFav.backgroundColor="FFFFFF";
}
