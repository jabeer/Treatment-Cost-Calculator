var lstProfiles = {
    childTemplates: [
        {                            // Image justified left
            type: 'Ti.UI.Label', // Use an image view for the image
            bindId: 'name',           // Maps to a custom pic property of the item data
          	 properties: {            // Sets the label properties
                color: 'black',
                font: { fontFamily:'Arial', fontSize: '20dp', fontWeight: 'bold' },
                left: '10dp', top: 15,
               
            }
        },
         {                            // Image justified left
            type: 'Ti.UI.Label', // Use an image view for the image
            bindId: 'active',           // Maps to a custom pic property of the item data
          	 properties: {            // Sets the label properties
                color: '#AAAAAA',
                font: { fontFamily:'Arial', fontSize: '14dp',  },
                right: '15dp', top: 15,
               
            }
        },
       
    ],
    
    properties:{height: 50, accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE},
    
};


if(OS_ANDROID)
{
	
	lstProfiles.properties.height = 80;
	
	lstProfiles.childTemplates[1].properties.right = '30dp';
	lstProfiles.childTemplates[0].properties.top = '5dp';
	lstProfiles.childTemplates[1].properties.top = '5dp';
}



var listView = Ti.UI.createListView({
    // Maps myTemplate dictionary to 'template' string
    templates: { 'template': lstProfiles },
    // Use 'template', that is, the myTemplate dict created earlier
    // for all items as long as the template property is not defined for an item.
    defaultItemTemplate: 'template',
    height:'180',
    width:"90%",
	left:"5%",
	borderRadius:"6px",
	borderWidth:"3px",
	borderColor:'black',
	top:"10",
});

if(OS_ANDROID)
{
	listView.height= 250;
}

var sections = [];

var profileSection = Ti.UI.createListSection({});

/*var profileDataSet = [
    // the text property of info maps to the text property of the title label
    // the text property of es_info maps to text property of the subtitle label
    // the image property of pic maps to the image property of the image view
    { name: {text: 'Chuck'} ,active: {text: 'Active'}, },
    { name: {text: 'Mary'} },
    { name: {text: 'Kevin'} },
    
];*/
//alert(profileDataSet);
var profileDataSet =[], isActive;
_.each(Alloy.Collections.ProfileModel.toJSON(), function(rec, stats)
{ 
	rec.active = (rec.active=="true") ? true : false;
	isActive = rec.active ? 'Active' :''
	
	profileDataSet.push({name:{text :rec.FirstName},
		 active :{text:isActive },
		 FirstName:rec.FirstName,
		 LastName:rec.LastName,
		 Gender:rec.Gender,
		 Age:rec.Age,
		 Email:rec.Email,
		 Address:rec.Address,
		 SchoolAddress:rec.SchoolAddress});
});


profileSection.setItems(profileDataSet);
sections.push(profileSection);

listView.setSections(sections);


var btnAddProfile = Ti.UI.createButton({
	top:10,
	title : 'Add Profile',
	width:'90%'
});
$.viewProfiles.add(listView);
$.viewProfiles.add(btnAddProfile);



listView.addEventListener('itemclick', function(e)
{
	var item = e.section.getItemAt(e.itemIndex);
	
	
	if(OS_ANDROID)
		{Alloy.Globals.tabSettings.open(Alloy.createController('ViewProfile', item).getView());}


		if(OS_IOS)	
		{	
			Alloy.Globals.tabSettings.open(Alloy.createController('ViewProfile', item).getView(),{animated:true});}

	
	
	
});
