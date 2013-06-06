/*
 * Name:createNativeContact
 * Purpose:To add contacts to the native contact list
 */
var createNativeContact=function(fname,lname,street,city,country,zip,mobileNo,phoneNo) {
	var contact_type = "home";
	
	var contact = Titanium.Contacts.createPerson({
  firstName: fname,
  lastName: lname,
  address:{
    work:[
      {
         
        Street: street,
        City: city,
         Country: country,
        ZIP: zip
      }
    ]
  },
  
  phone:{
    mobile: [mobileNo],
    work: [phoneNo]
  },
 
});
};
/*
 * Name:addContacts
 * purpose:onclick method for add contacts button and to make a call to createNativeContact method
 */ 
function addContacts(){
	createNativeContact("h","i","north st","ch","in","600042","1231230","123123");
}
