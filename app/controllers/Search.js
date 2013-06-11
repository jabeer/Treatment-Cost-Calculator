var CustomData = [
{ tlogo:'images/phy.png', title:"Find an in-network", item:'Urgent care Centers',hasChild:true },
{ tlogo:'images/phy.png', title:"Estimates and provides for", item:'Medical Procedures', hasChild:true },
{ tlogo:'images/phy.png', title:"Find an in-network", item:'Physician Finder', hasChild:true },
{ tlogo:'images/phy.png', title:"Find an in-network", item:'Physician Finder', hasChild:true },
{ tlogo:'images/phy.png', title:"Find an in-network", item:'Physician Finder', hasChild:true },
{ tlogo:'images/phy.png', title:"Find an in-network", item:'Physician Finder', hasChild:true },
{ tlogo:'images/phy.png', title:"Find an in-network", item:'Physician Finder', hasChild:true },

];
var rdata=[];
for (var i = CustomData.length - 1; i >= 0; i--) {
var row = Titanium.UI.createTableViewRow({height:70});
 
var tlogo =  Titanium.UI.createImageView({
image:CustomData[i].tlogo,
width:50,
height:60,
left:8,
top:6
});
 
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
 
var item =  Titanium.UI.createLabel({
text:CustomData[i].item,
font:{fontSize:14,fontWeight:'bold'},
width:'auto',
textAlign:'left',
top:30,
left:70,
height:16
});

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
	 top:'4%',
	 borderRadius:'6px',
	 borderColor:'black',
	 borderWidth: '3px',
	 height: '214px',
	 data:rdata
});

$.searchView.add(theTable);
