var express = require('express');
var router = express.Router();

/* GET order listing. */
router.post('/', function(req, res, next) {
	var arr1 = { 
		"data" : [ 
			{ "toppings":"cherry",  "quantity":2 },
			{ "toppings":"plain",  "quantity":6 },
            { "toppings":"chocolate",  "quantity":3 },
            	]
	};
	// turn arr1 into a string
	var myJSON1 = JSON.stringify(arr1);
	res.send(myJSON1);
});

module.exports = router;