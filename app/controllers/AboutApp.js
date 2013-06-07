//var calc = require('com.andorid.sample');
// 
// var nativeView=calc.createExample({message: "hello world"});
// 
// $.AboutApp.add(nativeView);
// 




function closeModelWindow(event){
	$.AboutApp.close();
}


var closeButton=Ti.UI.createButton({
	systemButton:Ti.UI.iPhone.SystemButton.DONE
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
}

/*
 * function showAbout() {
	var aboutApp = Alloy.createController('AboutApp').getView();
	
	aboutApp.open({
		modal : true,
		modalTransitionStyle : Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
		modalStyle : Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET,
	});
	
}

* <Button id="showAbout" onClick="showAbout">About</Button>
* */

 
