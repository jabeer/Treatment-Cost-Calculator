
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
                color: 'grey',
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
        properties : {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE }
       
};
  
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
                color: 'grey',
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
        properties : {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE }
       
};



var searchListView=Ti.UI.createListView({templates: { 'template': listTemplate,'toggleSwitch': toggleTemplate},defaultItemTemplate: 'template',
width:"90%",
left:"5%",
borderRadius:"6px",
borderWidth:"3px",
borderColor:'black',
top:"10%",
height: "222"
});


var searchSection = Ti.UI.createListSection();

searchSection.setItems([
  {
    template: 'template',
   
    title: { text: 'Profiles' },
     infoText: { text: 'Family Memebers' },
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

$.settingsView.add(searchListView);

