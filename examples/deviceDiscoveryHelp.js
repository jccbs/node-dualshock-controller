(function () {
	var HID = require('node-hid');
	console.log(HID.devices());

	var controller = new HID.HID(1356, 616);

	function processData(err, data) {
		for (var key in data) {
			console.log(key + " " + data[key]);
		}
		controller.read(processData);
	}
	controller.read(processData);

}());
