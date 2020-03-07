// Kayla Moore
// got help on stackoverflow
var express = require('express');
var router = express.Router();
const db = require('./dbms');
const intl = require('intl');

router.post('/', function(req, res, next) {
	// query to get number of lines in table so orderid can be unique number
	let query = 'SELECT COUNT(*) FROM ORDERS'; 
	let orderid = 500;
	db.dbquery(query, (err, result) => {
		if (!err) {
			orderid = result[0]['COUNT(*)'];
		} 
		else {
			console.log(err);
		}
	});	

	// setting the date to current date
	let month =  new Intl.DateTimeFormat("en-US",{month: 'short'}).format(new Date()).toUpperCase();
	let day = new Intl.DateTimeFormat("en-US",{day: 'numeric'}).format(new Date());
	let quantity = req.body.quantity;
	let topping = req.body.topping;
	let notes = req.body.notes;

	// new query statement to add the new order to database
	query = "INSERT INTO ORDERS (ORDERID, MONTH, DAY, QUANTITY, TOPPING, NOTES) VALUES ('" + orderid + "', '" + month + "', '" + day + "', '" + quantity + "', '" + topping + "', '" + notes + "');";
	db.dbquery(query, (err, result) => {
		if (!err) {
			console.log("new orders success");
			res.send(result);	
		}
		else {
			console.log(err);
		}
	});			
});
module.exports = router;