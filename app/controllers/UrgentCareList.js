
/*
 * name:onWhyUseCareBtn
 * purpose:to show why use urgent care view on button click
 */
function onWhyUseCareBtn(e)
{
	
	Alloy.Globals.UrgentCareGridView=Alloy.createController('UrgentCareGridView').getView();
	if(OS_ANDROID)
	Alloy.Globals.tabHome.open(Alloy.Globals.UrgentCareGridView);	
	if(OS_IOS)
	Alloy.Globals.tabHome.open(Alloy.Globals.UrgentCareGridView,{animated:true});	
	
}

var ucModelData=Alloy.Collections.favouritesUCC.toJSON();

/*
 * To create list with templates
 */
var lstUrgentCareCentres = {
    childTemplates: [
        {                            // Image justified left
            type: 'Ti.UI.Label', // Use an image view for the image
            bindId: 'centre',           // Maps to a custom pic property of the item data
           properties: {            // Sets the label properties
                color: 'black',
                font: { fontFamily:'Arial', fontSize: '16dp', fontWeight:'bold' },
                left: '5dp', top: 0,
               
            }
        },
        {                            // Title 
            type: 'Ti.UI.Label',     // Use a label for the title 
            bindId: 'street',          // Maps to a custom info property of the item data
            properties: {            // Sets the label properties
                color: 'black',
                font: { fontFamily:'Arial', fontSize: '16dp'},
                left: '5dp', top: 20,
                
            }
        },
        {                            // Subtitle
            type: 'Ti.UI.Label',     // Use a label for the subtitle
            bindId: 'phone',       // Maps to a custom es_info property of the item data
            properties: {            // Sets the label properties
                color: '#BF3554',
                font: { fontFamily:'Arial', fontSize: '14dp' },
                left: '5dp', top: 40,
            }
        },
        {                            // Subtitle
            type: 'Ti.UI.Label',     // Use a label for the subtitle
            bindId: 'distance',       // Maps to a custom es_info property of the item data
            properties: {            // Sets the label properties
                color: '#666666',
                font: { fontFamily:'Arial', fontSize: '12dp' },
                right: '10dp', top: 0,
            }
        },
         {                            // Subtitle
            type: 'Ti.UI.ImageView',     // Use a label for the subtitle
            bindId: 'favorite',       // Maps to a custom es_info property of the item data
            properties: {            // Sets the label properties
                             right: '50dp', top: 0,
            }
        }
    ],
    
    properties:{height: 60, accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE},
    
};

if(OS_ANDROID)
{
	lstUrgentCareCentres.properties.height = 95;
	lstUrgentCareCentres.childTemplates[4].properties.right = '60dp';
	lstUrgentCareCentres.childTemplates[3].properties.right = '20dp';
	lstUrgentCareCentres.childTemplates[1].properties.top = '22dp';
	lstUrgentCareCentres.childTemplates[2].properties.top = '44dp';
}

var listView = Ti.UI.createListView({
    // Maps myTemplate dictionary to 'template' string
    templates: { 'template': lstUrgentCareCentres },
    // Use 'template', that is, the myTemplate dict created earlier
    // for all items as long as the template property is not defined for an item.
    defaultItemTemplate: 'template'
});
var sections = [];

var ucSection = Ti.UI.createListSection({});
var ucDataSet = [];

for(var i=0; i<ucModelData.length;i++){
	console.log(ucModelData[i].center_name);
	if(ucModelData[i].ifFav=="Yes")
ucDataSet.push({centre: {text:ucModelData[i].center_name},street: {text:ucModelData[i].center_address}, phone: {text:ucModelData[i].center_phone}, distance:{text:ucModelData[i].center_distance},favorite:{image:'/images/smallHeart.png',text:'Yes',index:i}});	
	if(ucModelData[i].ifFav=="No")
	{
		ucDataSet.push({centre: {text:ucModelData[i].center_name},street: {text:ucModelData[i].center_address}, phone: {text:ucModelData[i].center_phone}, distance:{text:ucModelData[i].center_distance},favorite:{text:'No',index:i}});	

	}
}
ucSection.setItems(ucDataSet);
sections.push(ucSection);

listView.setSections(sections);






listView.addEventListener('itemclick', function(e)
{
	
	var item = e.section.getItemAt(e.itemIndex)


	Alloy.Globals.UrgentCareDetail=Alloy.createController('UrgentCareDetail',item).getView();
	if(Alloy.Globals.searchTap)
	{
		if(OS_ANDROID)
		Alloy.Globals.tabSearch.open(Alloy.Globals.UrgentCareDetail);	
		
		if(OS_IOS)
Alloy.Globals.tabSearch.open(Alloy.Globals.UrgentCareDetail,{animated:true});	

			}
	else{
		if(OS_ANDROID)
		Alloy.Globals.tabHome.open(Alloy.Globals.UrgentCareDetail);	
	
		if(OS_IOS)
Alloy.Globals.tabHome.open(Alloy.Globals.UrgentCareDetail,{animated:true});	

		
	}

	
});
$.viewUrgentCare.add(listView);

