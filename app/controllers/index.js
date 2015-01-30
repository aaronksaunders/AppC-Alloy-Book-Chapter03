//controllers/index.js

//defining the collection in the controller rather than the view
Alloy.Collections.instance("cars");

//create a new controller for the view-controller pair
//this will render the TableView
var carsController = Alloy.createController("cars");

// some special handling to make the window open
// with a title bar
// @see the xml for platform specific code
if (OS_IOS) {
	carsController.navWindow.open();
} else {
	carsController.mainWindow.open();
}


//add the data to the collection after the  view-controller pair is created
Alloy.Collections.cars.reset([{
	"make" : "Honda",
	"model" : "Civic"
}, {
	"make" : "Honda",
	"model" : "Accord"
}, {
	"make" : "Ford",
	"model" : "Escape"
}, {
	"make" : "Ford",
	"model" : "Mustang"
}, {
	"make" : "Nissan",
	"model" : "Altima"
}]);


