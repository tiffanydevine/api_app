//anonymous functions. easier to debug if you name, less typing otherwise. 

$(“#button”).on(“click”, function() {
	$(this).css(“color”, “red”);
});

or 

$(“#button”).on(“click”, function my func() {
	$(this).css(“color”, “red”);
});