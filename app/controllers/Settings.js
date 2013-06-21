
var toggleTemplate=
{
	childTemplates: [
        
        {                            
            type: 'Ti.UI.Label',     
            bindId: 'title',          
            properties: { 
                      
                color: 'black',
                font: { fontFamily:'Arial', fontSize: '18dp', fontWeight:'bold' },
                left: '10', top: '10',
            }
            
        },
        {                            
            type: 'Ti.UI.Label',     
            bindId: 'infoText',       
            properties: {           
                color: 'gray',
                font: { fontFamily:'Arial', fontSize: '12dp'},
                left: '10', top: '30',
            },
            
         },
         {                            
            type: 'Ti.UI.Switch',     
            bindId: 'right',       
            properties: {           
                 right: '10', top: '10',
            },
            
         }            
        ],
        properties : {height:"50",accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE }
       
};
 
 if(Ti.Platform.osname=="android")
{
	 toggleTemplate.properties.height="70";
 toggleTemplate.childTemplates[2].properties.right = '28';
 toggleTemplate.childTemplates[2].properties.top = '5';
 toggleTemplate.childTemplates[2].properties.font={fontSize:'12dp'};
toggleTemplate.childTemplates[1].properties.top = '35';
toggleTemplate.childTemplates[1].properties.font={fontSize:'14dp'};
toggleTemplate.childTemplates[0].properties.font={fontSize:'14dp'};

} 
var listTemplate={
	childTemplates: [
        
        {                            
            type: 'Ti.UI.Label',     
            bindId: 'title',          
            properties: { 
                      
                color: 'black',
                font: { fontFamily:'Arial', fontSize: '18dp', fontWeight:'bold' },
                left: '10', top: '10',
            }
            
        },
        {                            
            type: 'Ti.UI.Label',     
            bindId: 'infoText',       
            properties: {           
                color: 'gray',
                font: { fontFamily:'Arial', fontSize: '12dp'},
                left: '10', top: '30',
            },
            
         },
         {                            
            type: 'Ti.UI.Label',     
            bindId: 'rightText',       
            properties: {           
                color: 'blue',
                font: { fontFamily:'Arial', fontSize: '12dp'},
                right: '10', top: '20',
            },
            
         }            
        ],
        properties : {height:"50",accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE }
       
};
if(Ti.Platform.osname=="android")
{
listTemplate.properties.height="70";
listTemplate.childTemplates[2].properties.right = '28';
listTemplate.childTemplates[2].properties.top = '10';
listTemplate.childTemplates[2].properties.font={fontSize:'12dp'};
listTemplate.childTemplates[1].properties.font={fontSize:'14dp'};
listTemplate.childTemplates[1].properties.top = '35';
listTemplate.childTemplates[0].properties.font={fontSize:'14dp'};

}

var searchListView=Ti.UI.createListView({templates: { 'template': listTemplate,'toggleSwitch': toggleTemplate},defaultItemTemplate: 'template',
width:"90%",
left:"5%",
borderRadius:"6px",
borderWidth:"3px",
borderColor:'black',
top:"10%",
 height:"250"
});

if(Ti.Platform.osname=="android")
{
	searchListView.height="360";
}
var searchSection = Ti.UI.createListSection();

searchSection.setItems([
  {
    template: 'template',
   
    title: { text: 'Profiles' },
     infoText: { text: 'Family Members' },
     rightText: { text: 'chuck' },
  
  },
  {
    template: 'toggleSwitch',
   
    title: { text: 'Locations' },
     infoText: { text: 'Enable GPS' },
       right: { value:true },
  },
  {
    template: 'template',
    title: { text: 'Radius' },
     infoText: { text: 'Select your search Parameter'},
       rightText: { text: '50 miles' },
  },
  {
    template: "template",
   
     title: { text: 'Sort Result By'},
       infoText: { text: 'Select default preferences'},
      rightText: { text: 'Distance' },
	
  },
  {
    template: "template",
   
     title: { text: 'Result Returned'},
       infoText: { text: 'Select number'},
      rightText: { text: '20' },
	
  }
]);
searchListView.sections = [searchSection];


searchListView.addEventListener('itemclick', function(e){
	
	var item = e.section.getItemAt(e.itemIndex);
	if(item.title.text=='Profiles')
	{

			Alloy.Globals.profileList=Alloy.createController('ProfileList').getView();
			if(OS_ANDROID)
		Alloy.Globals.tabSettings.open(Alloy.Globals.profileList);
				if(OS_IOS)
		Alloy.Globals.tabSettings.open(Alloy.Globals.profileList,{animated:true});

	}
	
});


$.settingsView.add(searchListView);

