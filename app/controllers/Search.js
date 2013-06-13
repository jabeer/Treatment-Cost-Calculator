var CustomData = [
{ tlogo:'/images/phy.png', title:"Find an in-network", item:'Urgent care Centers',hasChild:true },
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
height:16
});
 if(Ti.Platform.osname=="android")
{
	title.left="100";
	title.top="20";
	title.font={fontSize:14};
	title.height="16"
}
var item =  Titanium.UI.createLabel({
text:CustomData[i].item,
font:{fontSize:14,fontWeight:'bold'},
color:'black',
width:'auto',
textAlign:'left',
top:30,
left:70,
height:16
});
 if(Ti.Platform.osname=="android")
{
	item.left="100";
	item.top="40";
	item.font={fontSize:16};
	item.height="25"
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
	 height: '214px',
	 data:rdata
});
if(Ti.Platform.osname=="android")
{
	theTable.height="305";
	theTable.top='10%';
}

$.searchView.add(theTable);
