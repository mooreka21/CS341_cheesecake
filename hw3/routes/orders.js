// Kayla Moore

var express = require('express');
var router = express.Router();
const db = require('./dbms');

/* GET order listing. */
router.post('/', function(req, res, next) {
	let query = "SELECT * FROM ORDERS WHERE MONTH = '" + req.body.month + "';";
	// send query to database and retreve order data
	db.dbquery(query, (err, result) => {
		if (!err) {
			console.log("orders success");
			res.send(result);	
		}
		else {
			console.log(err);
		}
	});
});
module.exports = router;