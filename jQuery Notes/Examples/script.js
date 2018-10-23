$(document).ready(function() {
	
	//Hiding a paragraph
	$(".InputButton").click(function() {
		$("p").hide();
	});


	//changing color of paragraph on events
	$("p").on({
		mouseenter: function() {
			$(this).css("background-color", "red");
		},

		mouseleave: function() {
			$(this).css("background-color", "blue");
		},

		click: function() {
			$(this).css("background-color", "yellow");
		}
	});
});

