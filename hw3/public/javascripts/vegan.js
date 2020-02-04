//function that gives vegan alert and prints customers order
function myFunction() {
	var textarea = document.getElementById("text");
  	var textvalue = textarea.value;
  	var word = "vegan";
  	var topping = document.querySelector('input[name="type"]:checked');
  	var quantity = document.getElementById("num");
  	var msg = document.getElementById("message");
	if(textvalue.match(word) != null){ //vegan alert, then lets customer try again
		alert("Error! Cheesecakes contain dairy!");
			$(document).ready(function(){
			$("h2").hide();
			$("p").show();
			$("table").show();
			});
	}
	else{ //if order is not vegan, the order goes through and prints order
		document.getElementById("demo").innerHTML =quantity.value + " " + topping.value + " Cheesecake(s) " + textvalue;
	}
}