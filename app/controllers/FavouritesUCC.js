// var v =$.favouritesUCCList
// alert(v.getChildren().length);

var editModeFlag = false;

function deleteRow(e) {
	// console.log(e);
	// console.log(e.source);

	// alert(e.source);
	//console.log($.favouritesUCCList);

	// $.favouritesUCCList.deleteRow(e.row);

	if (e.source.parent.children[3] === e.source) {

		if (e.row) {
			Alloy.Collections.favouritesUCC.models[e.index].destroy();
		} else {
			Alloy.Collections.favouritesUCC.models[0].destroy();
		}
		$.fauouriteUCCLabel.setText('Urgent Care Centers(' + Alloy.Collections.favouritesUCC.length + ')');

	}

	// window.ev = e;
	// alert(v.getChildren().length);
	// $.test1.setText(e.source.parent.children[3].getText());
	// ind =$.favouritesUCCList.childeren.indexOf(e.source.parent);
	// console.log(ind);
	//
	// Alloy.Collections.favouritesUCC.models[ind].destroy();
	// if(e.source.parent.children[3]===e.source)
	// {
	// Alloy.Collections.favouritesUCC.models[e.index].destroy();
	//
	// }

	//alert(e.row.children[3]===e.source);
	// alert(e.source.parent.destroy());
	// alert(e.source.parent.parent);
	// alert(e.source.parent.parent.parent);
	//

}

// function transformCustomerData(model){
// //alert(model);
// console.log(model);
// model.set('mIndex',Alloy.Collections.favouritesUCC.indexOf(model));
//
// return model;
//
// }

function changeMode() {

	if (editModeFlag) {
		_.each(Alloy.Collections.favouritesUCC.models, function(model) {
			model.set({
				'deleteFlag' : false,
				'childFlag' : true
			});
		});
		editModeFlag = false;
		$.changeModeBtn.setText('Edit');
		
	} else {

		_.each(Alloy.Collections.favouritesUCC.models, function(model) {
			model.set({
				'deleteFlag' : true,
				'childFlag' : false
			});
		});
		editModeFlag = true;
		$.changeModeBtn.setText('Done');
	}

	// Alloy.Collections.favouritesUCC.reset(Alloy.Collections.favouritesUCC.models);
	// Alloy.Collections.customer.at(2).set({'childState':true,'buttonState':'true'})

}

function setNormalMode() {
	_.each(Alloy.Collections.favouritesUCC.models, function(model) {
		model.set({
			'deleteFlag' : false,
			'childFlag' : true
		});
	});
	// Alloy.Collections.favouritesUCC.reset(Alloy.Collections.favouritesUCC.models);
}

Alloy.Collections.favouritesUCC.trigger('change');
$.fauouriteUCCLabel.setText('Urgent Care Centers(' + Alloy.Collections.favouritesUCC.length + ')'); 