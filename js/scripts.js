$(document).ready(function() {
	$("#trigger").click(function() {
	   $('html, body').animate({scrollTop:$(window).height()}, 1000);
    return false;
	});
});