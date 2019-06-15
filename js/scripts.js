$(document).ready(function() {
	$("#trigger").click(function() {
	   $('html, body').animate({scrollTop:$(window).height()}, 1000);
	});

	$(window).scroll(function() {
    var s = 2.0*($(window).scrollTop())-400,
    opacityVal = (s / 500.0);
    $('.blur').css('opacity', opacityVal);
	});

   	$('html, body').delay(2000).animate({scrollTop:$(window).height()}, 1000);

});
