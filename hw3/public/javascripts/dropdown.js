$(document).ready(function(){
//hover dropdown menu
$(".dropdown-content a").click(function() {
	var month = $(this).text();
	$('.dropbtn').text(month);
	//return false;
	$.post("/orders",null, function(data, success, xhr){
  		var json = JSON.parse(data);
    	$("#cherryID").text(json.data[0].toppings + " " + json.data[0].quantity);
    	$("#plainID").text(json.data[1].toppings + " " + json.data[1].quantity);
    	$("#chocolateID").text(json.data[2].toppings + " " + json.data[2].quantity);
  	});

});
});