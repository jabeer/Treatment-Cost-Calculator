var args = arguments[0] || 0;

$.UrgentCareText.setText(args.centre.text);
$.UrgentCareAddress.setText(args.street.text);
$.UrgentCarePhone.setText(args.phone.text);

function showMap() {
	Alloy.createController('MapView').getView().open();
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
