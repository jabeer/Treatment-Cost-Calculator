/*
 * Name:doUpdateList
 * Purpose:To change the items text color if they have zero badge value
 */
function doUpdateList(e){

	for(i=0;i<fruitDataSet.length;i++){
		Ti.API.log("list"+i);
	var item=fruitSection.getItemAt(i);
		
	if (item.es_info.text == "0") {
		
        
        item.template= 'bdgZero';
        fruitSection.updateItemAt(i, item);
    }
    
   }
}



var lsections = [];
var myTemplate = {
    childTemplates: [
        
        {                            
            type: 'Ti.UI.Label',     
            bindId: 'info',    
                   
            properties: { 
                 
                 	 color: 'black',
                 font: { fontFamily:'Arial', fontSize: '20dp', fontWeight:'bold' },
                left: '10', top: '10'
                 
               
            }
            
        },
        {                            
            type: 'Ti.UI.Label',     
            bindId: 'es_info',       
            properties: {   
            	    
                 color: 'black',
                 font: { fontFamily:'Arial', fontSize: '12dp',fontWeight:'bold' },
                 right: '10', top: '2'
            }
            
         }       
        ],
        properties : {height:'50',accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE }
       
};
if(Ti.Platform.osname=="android")
{
 myTemplate.childTemplates[1].properties.right = '28';
myTemplate.childTemplates[1].properties.top = '2';
myTemplate.childTemplates[1].properties.font={fontSize:'12dp'};
myTemplate.childTemplates[0].properties.font={fontSize:'14dp'};
myTemplate.properties.height="70";
}
var redTemplate,listView;
redTemplate = JSON.parse(JSON.stringify(myTemplate));
//redTemplate.events.click = iSelect;
redTemplate.childTemplates[0].properties.color = '#A4A3A3';
redTemplate.childTemplates[1].properties.color = '#A4A3A3';
redTemplate.childTemplates[1].properties.right = '30';
redTemplate.childTemplates[1].properties.top = '10';
redTemplate.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
if(Ti.Platform.osname=="android")
{
redTemplate.childTemplates[0].properties.font={fontSize:'14dp'};	
}

	


listView = Ti.UI.createListView({templates: { 'template': myTemplate,'bdgZero': redTemplate},defaultItemTemplate: 'template',
borderColor:'black',
borderRadius:'6px',
borderWidth:'3px',
width:'90%',
left:'5%',
top:"40",
height:"200"
});
if(Ti.Platform.osname=="android")
{
	listView.top="80";
listView.height="281";	
}
var fruitSection = Ti.UI.createListSection();
var fruitDataSet = [
   
    { info: {text: 'Locations'}, es_info: {text: '1'}},
    { info: {text: 'Physicians'}, es_info: {text: '0'}},
    {info: {text: 'Med.Procedure estimates'}, es_info: {text: '2'}},
    { info: {text: 'Urgent Care Centers'}, es_info: {text: '3'}}
];
fruitSection.setItems(fruitDataSet);

listView.sections = [fruitSection];
listView.addEventListener("itemclick",function(e){
		Alloy.Globals.favTap=true;	
	var item=fruitSection.getItemAt(e.itemIndex);
		
	if (item.es_info.text == "0") {
		
        
        alert("No data");
    }
    else{
    	if (item.info.text == "Urgent Care Centers") 
{
//Alloy.Globals.tabFav.close(Alloy.Globals.winFav);
Alloy.Globals.FavouritesUCC=Alloy.createController('FavouritesUCC').getView();
	if(OS_ANDROID)
		Alloy.Globals.tabFav.open(Alloy.Globals.FavouritesUCC);
		if(OS_IOS)
Alloy.Globals.tabFav.open(Alloy.Globals.FavouritesUCC,{animated:true});
    	}
    
    	
    }
    
   
	
});
$.viewBadge.add(listView);

doUpdateList(listView);


