var targetYPos = 1000;

$(document).ready(function() {

    // $('html, body').animate({
    //     scrollTop: targetYPos
    // }, 2000);


	$('#list .left,#list .mid,#list .right:has(p)').hover(function() { 
	    $('p', this).stop().animate({"opacity": 0.8}); 
	},function() { 
	    $('p', this).stop().animate({"opacity": 0.5}); 
	});

});