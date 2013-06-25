var CustomData = [
{ tlogo:'/images/phy.png', title:"Find an in-network", item:'Urgent Care Centers',hasChild:true },
{ tlogo:'/images/phy.png', title:"Estimates and provides for", item:'Medical Procedures', hasChild:true },
{ tlogo:'/images/phy.png', title:"Find an in-network", item:'Physician Finder', hasChild:true },


];
var rdata=[];
for (var i = 0 ; i< CustomData.length; i++) {
var row = Titanium.UI.createTableViewRow({height:70});
if(Ti.Platform.osname=="android")
{
	row.height="100"
}
var tlogo =  Titanium.UI.createImageView({
image:CustomData[i].tlogo,
width:50,
height:60,
left:8,
top:6
});
 if(Ti.Platform.osname=="android")
{
	tlogo.width="70";
	tlogo.height="90";
}
var title = Titanium.UI.createLabel({
text:CustomData[i].title,
font:{fontSize:12,fontWeight:'normal',fontStyle:'italic'},
color:'#B2AEAE',
width:'auto',
textAlign:'left',
top:12,
left:70,
//height:16,
});
 if(Ti.Platform.osname=="android")
{
	title.left="100";
	title.top="20";
	title.font={fontSize:18};
	//title.height="16"
}
var item =  Titanium.UI.createLabel({
text:CustomData[i].item,
font:{fontSize:14,fontWeight:'bold'},
color:'black',
width:'auto',
textAlign:'left',
top:30,
left:70,
//height:16
});
 if(Ti.Platform.osname=="android")
{
	item.left="100";
	item.top="50";
	item.font={fontSize:22};
	//item.height="25"
}
row.add(tlogo);
row.add(title);
row.add(item);
row.hasChild=CustomData[i].hasChild;
 
row.className = 'search_row';
 Ti.API.info(row);
rdata.push(row);
};
Ti.API.info(rdata);
var theTable = Titanium.UI.createTableView({
	 backgroundColor:'white',
	 width:'90%',
	 left:'5%',
	 top:'8%',
	 borderRadius:'6px',
	 borderColor:'black',
	 borderWidth: '3px',
	  data:rdata,
	 height: Ti.UI.SIZE,
	 //	  footerTitle:''
});
if(Ti.Platform.osname=="android")
{
	//theTable.height="305";
	theTable.top='10%';
}

$.searchView.add(theTable);

theTable.addEventListener('click',function(e){
	if(e.index==0){
Alloy.Globals.searchTap=true;
//Alloy.Globals.tabSearch.close(Alloy.Globals.winSearch);
Alloy.Globals.UrgentCareList=Alloy.createController('UrgentCareList').getView();
if(OS_ANDROID)
		Alloy.Globals.tabSearch.open(Alloy.Globals.UrgentCareList);
if(OS_IOS)		
Alloy.Globals.tabSearch.open(Alloy.Globals.UrgentCareList,{animated:true});
    	
          }
          else{
          	alert("No Data");
                    }
});
