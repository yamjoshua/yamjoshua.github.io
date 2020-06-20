$(document).ready(function() {

	$("#trigger").click(function() {
	   $('html, body').animate({scrollTop:$(window).height()}, 1000);
	});
	$('html, body').delay(1000).animate({scrollTop:$(window).height()}, 1000);

	$(window).scroll(function() {
    var s = 2.0*($(window).scrollTop())-400,
    opacityVal = (s / 1000.0);
    $('.blur').css('opacity', opacityVal);
	});

<<<<<<< HEAD
   	
=======
   	$('html, body').delay(2000).animate({scrollTop:$(window).height()}, 1000);
>>>>>>> d0aa57ff229840c6841feab6fc799b2e1f49bd21

});
