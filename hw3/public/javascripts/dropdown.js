// Kayla Moore

$(document).ready(function(){
	//submit order button
	$("#button").click(function() {
		//hide and show certain elements once an order is placed
		$("p").hide();
		$("table").hide();
		$("h2").show();
		//get values
		var notes = $("#text").val();
	    var qauntity = $("option").filter(':selected').text();
	    var topping = $('input[name="type"]:checked').val();
	    //POST
		$.post("/neworders", {'quantity': quantity, 'topping': topping, 'notes': notes},
			(resp) => {$("#"+new Date().toLocaleString('default', { month: 'short' })).click();});
	});

	//hover dropdown menu
	$(".dropdown-content > a").click(function() {
		var month = $(this).text();
		$('.dropbtn').text(month);
		//POST
		$.post("/orders",{'month': month}, (data) => {
			let numCherry = numPlain = numChoco = 0;
			//loop through data to update the quanities for each topping
			for (let i = 0; i < data.length; i++) {
				switch (data[i].TOPPING) {
					case 'plain':
						numPlain += data[i].QUANTITY;
						break;
					case 'cherry':
						numCherry += data[i].QUANTITY;
						break;
					case 'chocolate':
						numChoco += data[i].QUANTITY;
						break;
					
					default:
						console.log(err);
				}
			}
			//returning the correct quantities
			$('#plainID').text(numPlain + ' Plain');
			$('#cherryID').text(numCherry + ' Cherry');
			$('#chocolateID').text(numChoco + ' Chocolate');
			
	  	});
	});

	// call the onclick function for the current month , so the orders are updated on refresh
	$("#"+new Date().toLocaleString('default', { month: 'short' })).click(); 
});