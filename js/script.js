$(document).ready(function() {
 //
 // add your jQuery code here
$("button").mouseenter(function() {
		$(this).removeClass("makeRed").addClass("makeBorder");
	});

	$("button").mouseleave(function() {
		$("button").removeClass("makeBorder").addClass("makeRed");
	});

	$("button").on("click" , function() {
		$("p").slideToggle(2000);
	
  

	});
}); 