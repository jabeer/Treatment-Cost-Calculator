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
var ucDataSet = [
    // the text property of info maps to the text property of the title label
    // the text property of es_info maps to text property of the subtitle label
    // the image property of pic maps to the image property of the image view
    { centre: {text: 'Urgent Care of Plymouth'}, street: {text: '10 Main Street, Plymouth'}, phone: {text: '(508) 555-1213'}, distance:{text: '5.5mi'} },
    { centre: {text: 'First Choice of Urgent Care'}, street: {text: '405, Ford Rd Canton'}, phone: {text: '(508) 555-1276'}, distance:{text: '7.2mi'}, favorite:{image:'/images/smallHeart.png'}},
    { centre: {text: 'Urgent Care Centres'}, street: {text: 'Manapakkam, Ramapuram'}, phone: {text: '(508) 555-9876'}, distance:{text: '11mi'} },
    { centre: {text: 'Emergency & Urgent Care'}, street: {text: 'Alkatraz'}, phone: {text: '(508) 555-1476'}, distance:{text: '11.2mi'}, favorite:{image:'/images/smallHeart.png'}}

];
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
