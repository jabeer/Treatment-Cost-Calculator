

function closeModelWindow(event){
	$.AboutApp.close();
}
var closeButton=Ti.UI.createButton({
	title:"close"
});


// $.AboutApp.size=Titanium.UI.SIZE;

$.AboutApp.rightNavButton=closeButton;

closeButton.addEventListener("click",function(e){
	$.AboutApp.close();
});


if(Ti.Platform.osname=="iphone")
{
	$.AboutApp.size=Ti.UI.SIZE;
	$.AboutApp.backgroundColor="FFFFFF";
}else
{

alert($.AboutApp.getHeight());

// alert($.AboutApp.width);
	
}
