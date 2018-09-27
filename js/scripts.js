$(document).ready(function() {
	$("#trigger").click(function() {
	   $('html, body').animate({scrollTop:$(document).height()}, 'slow');
    return false;
	});
});
// $(document).ready(function() {
//     // all custom jQuery will go here

// 	$("span.textspan").click(function(){
// 	    var autoplay = true,
// 		root = $("html, body"),
// 		t = 1000, //overall duration for the animation, you can set this
// 		n = 0,
// 		d = 0;

// 		function scrollStart() {
// 		    n = Date.now();//get the current time in ms
// 		    t -= d;//the overall time minus the time already traverse
// 		    root.animate({scrollTop: $(document).height() }, t);       
// 		    autoplay = false;
// 		    console.log('startime', t);
// 		}

// 		function scrollStop() {
// 		    d = Date.now() - n;
// 		    root.stop(true);
// 		    autoplay = true;
// 		    console.log('stoptime', d);
// 		}

// 		window.setTimeout(function () {
// 		    scrollStart();
// 		}, 2000);

// 		$(document).ready(function () {
// 		    $(".scrollToggle").click(function () {
// 		        if (autoplay) {
// 		            scrollStart();
// 		        } else {
// 		            scrollStop();
// 		        }
// 		    });
		    
// 		    $(window).scroll(function () {
// 		        autoplay = false;
// 		    });
// 		});			
// 	});

// });