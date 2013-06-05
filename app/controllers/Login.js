/*
 * Description:Goes to homescreen on clicking Go
 *  
 */

$.btnGo.addEventListener("click", function()
{
	Alloy.createController('tabBar').getView().open();
});
