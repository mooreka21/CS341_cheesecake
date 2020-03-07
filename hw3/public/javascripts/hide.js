
// Kayla Moore

//script to hide content and show message when order button is clicked
$(document).ready(function(){
	$("h2").hide();
	$("#button").click(function(){
		$("p").hide();
		$("table").hide();
		$("h2").show();
	});
});
