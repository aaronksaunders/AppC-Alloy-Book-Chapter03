//controllers/cars.js
function transform(model){
	//convert the model to a JSON object
	var carObject = model.toJSON();
	var output = 	
	{
		"title" : carObject.model + " by " + carObject.make,
		"id" :model.cid
	};
	return output;
}

//show only cars made by Honda
function filter(collection)
{
	return collection.where(
		{
			make: "Honda"
		}
	);
}

//this is an event listener to ensure that the TalbleView bindings are cleaned up
//correctly and no memory leaks are left

//Free the model-view data binding resources when the view-controller closes
$.mainWindow.addEventListener("close", function()
{
	$.destroy();
});