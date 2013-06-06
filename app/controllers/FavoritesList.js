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
                left: '10', top: '10',
            }
            
        },
        {                            
            type: 'Ti.UI.Label',     
            bindId: 'es_info',       
            properties: {           
                color: 'grey',
                font: { fontFamily:'Arial', fontSize: '12dp',fontWeight:'bold' },
                right: '10', top: '2',
            },
            
         }       
        ],
        properties : {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE }
       
};
var redTemplate = JSON.parse(JSON.stringify(myTemplate));
//redTemplate.events.click = iSelect;
redTemplate.childTemplates[0].properties.color = '#A4A3A3';
redTemplate.childTemplates[1].properties.color = '#A4A3A3';
redTemplate.childTemplates[1].properties.right = '25';
redTemplate.childTemplates[1].properties.top = '10';
redTemplate.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
var listView = Ti.UI.createListView({templates: { 'template': myTemplate,'bdgZero': redTemplate},defaultItemTemplate: 'template',
borderColor:'black',
borderRadius:'6px',
borderWidth:'3px',
width:'90%',
left:'5%',
top:"10",
height:"179"
});

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
	
	var item=fruitSection.getItemAt(e.itemIndex);
		
	if (item.es_info.text == "0") {
		
        
        alert("No data");
    }
    else{
    	alert( item.es_info.text+" "+"number of data");
    }
    
   
	
});
$.viewBadge.add(listView);

doUpdateList(listView);


