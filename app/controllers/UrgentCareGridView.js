// to fit in a 320-wide space 
var cellWidth = 92;
var cellHeight = 60;

var tableData = [];
var data=[
    
    	{test:'scan',urgentcare:'$200',emergency:'$300'},
    	{test:'cardiac stress test',urgentcare:'$200',emergency:'$300'},
    	{test:'chest x-ray',urgentcare:'$200',emergency:'$300'},
    	{test:'ct-scan',urgentcare:'$200',emergency:'$300'},

    	
    
];
  Ti.API.info( data.length);
    Ti.API.info( data.valueOf());
var cellIndex = 1;
 
for (var y=0; y<4; y++){
	
    var thisRow = Ti.UI.createTableViewRow({
        className: "Grid",
        layout: "horizontal",
        height: cellHeight,
       
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
    });
    for (var x=0; x<3; x++){
        var thisView = Ti.UI.createView({
            objName:"grid-view",
            objIndex:cellIndex.toString(),
             left: 10,
            height: cellHeight,
            width: cellWidth,
            top:'0'
        });
 
 
        var thisLabel = Ti.UI.createLabel({
            color:"black",
            font:{fontSize:12,fontWeight:'bold'},
            text:"",
            touchEnabled:false
        });
        if(y==0){
     	
  thisLabel.font={fontStyle:"italic"};
  }
  if(x==0){
  	if(y==0){
  		thisLabel.text="";
  	}
  	else{
     	thisLabel.text=data[y].test;
     	}	
     	}
     	if(x==1){
     		if(y==0){
  		thisLabel.text="Urgentcare";
  	}else{
     		thisLabel.text=data[y].urgentcare;
     	}
     	}
     	if(x==2){
     		if(y==0){
  		thisLabel.text="Emergency";
  	}
  	else{
  		thisLabel.text=data[y].emergency;}
     		
     	}
        thisView.add(thisLabel);
        thisRow.add(thisView);
        cellIndex++;
        if(x==1)
  thisView.backgroundColor="pink";	
    }
     
    tableData.push(thisRow);
}
var tableview = Ti.UI.createTableView({
    data:tableData
});
 
tableview.addEventListener("click", function(e){
    if(e.source.objName){
        Ti.API.info( e.source.objName+e.source.objIndex + " was clicked!");
    }
});

$.gridViewWin.add(tableview);
