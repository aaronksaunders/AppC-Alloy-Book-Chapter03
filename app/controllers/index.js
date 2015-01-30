//controllers/index.js

//defining the collection in the controller rather than the view
Alloy.Collections.instance("cars");

//create a new controller for the view-controller pair
//this will render the TableView
var carsController = Alloy.createController("cars");

//add the data to the collection after the  view-controller pair is created
Alloy.Collections.cars.reset([{
	"id" : 1,
	"make" : "Honda",
	"model" : "Civic"
}, {
	"id" : 2,
	"make" : "Honda",
	"model" : "Accord"
}, {
	"id" : 3,
	"make" : "Ford",
	"model" : "Escape"
}, {
	"id" : 4,
	"make" : "Ford",
	"model" : "Mustang"
}, {
	"id" : 5,
	"make" : "Nissan",
	"model" : "Altima"
}]);

carsController.mainWindow.open();
