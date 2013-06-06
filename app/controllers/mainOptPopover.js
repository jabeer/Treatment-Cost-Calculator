function goToDashBoard() {

	$.mainOptPopoverWin.close();
}

function signOutofApp() {

	Alloy.createController('Login').getView().open();
}

$.mainOptPopoverPointer.setTransform(Ti.UI.create2DMatrix({
		rotate : 45
}));

