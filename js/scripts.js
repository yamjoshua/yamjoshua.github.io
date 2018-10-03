$(document).ready(function() {
	$("#trigger").click(function() {
	   $('html, body').animate({scrollTop:$(window).height()}, 1000);
	});
	$(window).scroll(function() {
    var s = 2.0*($(window).scrollTop()),
    opacityVal = (s / 1000.0);
    $('.blur').css('opacity', opacityVal);
});
});
