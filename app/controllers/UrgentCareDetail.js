
var args = arguments[0] || 0;

$.UrgentCareText.setText(args.centre.text);
$.UrgentCareAddress.setText(args.street.text);
$.UrgentCarePhone.setText(args.phone.text);
$.UrgentCareDistance.setText(args.distance.text);
  $.addToFavBtn.index=args.favorite.index;
if(args.favorite.text=="Yes")
{
		$.FavInDetailImage.visible=true;
		$.addToFavBtn.title="Remove from Favorites";
		  $.addToFavBtn.image="";
		 
}
else if(args.favorite.text=="No")
{
		$.FavInDetailImage.visible=false;
        $.addToFavBtn.title="Add to Favorites";
        $.addToFavBtn.image="/images/smallFav.png";
     
}
function showMap() {
	
		if(OS_ANDROID)
		{Alloy.Globals.tabHome.open(Alloy.createController('MapView', args).getView());}


		if(OS_IOS)	
		{	
			Alloy.Globals.tabHome.open(Alloy.createController('MapView', args).getView(),{animated:true});}

	
	//Alloy.createController('MapView',args).getView().open();
}

function authorizeAndAddContacts() {
	if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_AUTHORIZED) {
		addToContacts();
	} else if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_UNKNOWN) {
		Ti.Contacts.requestAuthorization(function(e) {
			if (e.success) {
				addToContacts();

			} else {

				alert("error in addr");
			}
		});
	} else {
		addToContacts();

	}
}

function addToContacts() {
	var contact = Titanium.Contacts.createPerson({
		firstName : args.centre.text,
		phone : {
			"mobile" : [args.phone.text]
		},
	});
	
	Titanium.Contacts.save(contact);
	alert('adding');

}

function doAddToFav(e){
	
if(args.favorite.text=="Yes")
{
	 args.newFavorite="No";
Alloy.Collections.favouritesUCC.models[args.favorite.index].set({'ifFav':'No'});
Alloy.Collections.favouritesUCC.trigger('change');
}
if(args.favorite.text=="No")
{
	 args.newFavorite="Yes";
Alloy.Collections.favouritesUCC.models[args.favorite.index].set({'ifFav':'Yes'});
Alloy.Collections.favouritesUCC.trigger('change');
}
Alloy.createController('AddToFavoritesModal',args).getView().open();
	
}

function doGoToInfo(e)
{
	if(e.index==0)
	{
		Alloy.Globals.UrgentCareGridView=Alloy.createController('UrgentCareGridView').getView();
		if(Alloy.Globals.searchTap)
	{
	
	//Alloy.Globals.tabSearch.close(Alloy.Globals.UrgentCareDetail);
	if(OS_ANDROID)
	Alloy.Globals.tabSearch.open(Alloy.Globals.UrgentCareGridView);	
	if(OS_IOS)
Alloy.Globals.tabSearch.open(Alloy.Globals.UrgentCareGridView,{animated:true});	
	}
	else{
		
	//Alloy.Globals.tabHome.close(Alloy.Globals.UrgentCareDetail);
		if(OS_ANDROID)
		Alloy.Globals.tabHome.open(Alloy.Globals.UrgentCareGridView);
		if(OS_IOS)
Alloy.Globals.tabHome.open(Alloy.Globals.UrgentCareGridView,{animated:true});	
	}
		
	}
	
	if(e.index==1)
	{
		Alloy.Globals.WhenToUseUrgentCare=Alloy.createController('WhenToUseUrgentcare').getView();
			if(Alloy.Globals.searchTap)
	{
			
	//Alloy.Globals.tabSearch.close(Alloy.Globals.UrgentCareDetail);
	if(OS_ANDROID)
		Alloy.Globals.tabSearch.open(Alloy.Globals.WhenToUseUrgentCare);
		if(OS_IOS)
Alloy.Globals.tabSearch.open(Alloy.Globals.WhenToUseUrgentCare,{animated:true});
	}
	else{
		
	//Alloy.Globals.tabHome.close(Alloy.Globals.UrgentCareDetail);
	if(OS_ANDROID)
		Alloy.Globals.tabHome.open(Alloy.Globals.WhenToUseUrgentCare);
		if(OS_IOS)
Alloy.Globals.tabHome.open(Alloy.Globals.WhenToUseUrgentCare,{animated:true});	
	}
	}
	
	if(e.index==2)
	{
		Alloy.Globals.WhenToUseUrgentCare=Alloy.createController('WhenToUseUrgentcare').getView();
	if(Alloy.Globals.searchTap)
	{
		

	if(OS_ANDROID)
		Alloy.Globals.tabSearch.open(Alloy.Globals.WhenToUseUrgentCare);
		if(OS_IOS)
Alloy.Globals.tabSearch.open(Alloy.Globals.WhenToUseUrgentCare,{animated:true});
	}
	else{
	
		if(OS_ANDROID)
		Alloy.Globals.tabHome.open(Alloy.Globals.WhenToUseUrgentCare);
		if(OS_IOS)
Alloy.Globals.tabHome.open(Alloy.Globals.WhenToUseUrgentCare,{animated:true});	
	}
}
}