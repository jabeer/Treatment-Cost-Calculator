function doGoToFav(){
		$.AddToFav.close();
}
function doCloseModal()
{
	
	$.AddToFav.close();
}
function doUndo(){
	
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
