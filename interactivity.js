$(document).ready(function() {
	// Variables
	var conFin = 0;
	var aboFin = 0;
	wHeight = $( window ).height();
	$(".inner").height(wHeight - 40);

	// Check size of inner content
	$( window ).resize(function(){
		wHeight = $( window ).height();
		$(".inner").height(wHeight - 40);
	});

	// Mouse Scroll Off
	$(window).bind("mousewheel", function() {
		return false;
	});

	//Mobile Scroll Off
	//target the entire page, and listen for touch events
	// $('html, body').on('touchmove', function(e){ 
	//      //prevent native touch activity like scrolling
	//      e.preventDefault(); 
	// });

	// Arrow Scroll Off - Up and Down
	window.addEventListener("keydown", function(e) {
	    // space and arrow keys
	    if([38, 40].indexOf(e.keyCode) > -1) {
	    	e.preventDefault();
	    }
	}, false);

	// Drop Down Menu
	$("#dropdown").click(function(){
		$('#links').addClass('toggled');
		$('#links').slideToggle("1000");
	});

	// Blocks Fade In
	$(".title").delay(500).animate({top: "+=10", opacity: "toggle"},"slow");

	 // Image Animations
	 $(window).scroll(function(){
	 	var wTop = $(window).scrollTop();
	 	var conTop = $('#contact').offset().top;
	 	var aboTop = $("#about").offset().top;

	 	//Top
	 	if(wTop > 0)
	 	{
	 		if($(window).width() > 840){
	 			$("#quote").fadeOut("slow", function(){$("#toTop").fadeIn("slow");});
	 		}
	 		else{$("#toTop").fadeIn("slow");}
	 	}
	 	else
	 	{
	 		if($(window).width() > 840){
	 			$("#toTop").fadeOut("slow", function(){$("#quote").fadeIn("slow");});
	 		}
	 		else{$("#toTop").fadeOut("slow");}

	 		$('nav a').find("li").removeClass('active');
	 	}

	 	//Self
	 	if(wTop >= aboTop && aboFin == 0 && $(window).width() > 840)
	 	{
	 		$("#me").show("drop", {direction:"right"}, 1000);
	 		aboFin++;
	 	}

		// Triangles
		if(wTop >= conTop && conFin == 0)
		{
			$("#trianglesRight").animate({
				bottom: "+=50",
				opacity: 1
			}, 1500, function(){});
			$("#trianglesLeft").animate({
				bottom: "+=25",
				opacity: 1
			}, 1000, function(){});
			conFin++;
		}
	});


	 $("#workBox a").bind("click",function(event){
	 	event.preventDefault();
	 	var target = $(this).attr("href");
	 	$(target).show('slide', {direction: 'right'}, 1000);
	 });


	 var slideAway = function(){
	 	$(this).hide('slide', {direction: 'right'}, 1000);
	 };

	// Inner Click
	$(".side .away .middle").bind("click",function(event){
		$(".side").hide('slide', {direction: 'right'}, 1000);
	});

	// Click
	$("nav a").bind("click",function(event){

		//Adding active class
		$(this).find("li").addClass("active");
		$('nav a').not(this).find("li").removeClass('active');

		// For Mobile
		if($('#links').hasClass('toggled')){
			$('#links').removeClass('toggled');
			$('#links').slideToggle("1000");
		}

		//Scroll
		event.preventDefault();
		var target = $(this).attr("href");
		$("html, body").stop().animate({
			scrollLeft: $(target).offset().left,
			scrollTop: $(target).offset().top
		}, 1200);
	});

	// Fancy Box
	$(".fancybox").fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'elastic',
		helpers : {
			title : {
				type : 'inside'
			}
		}
	});
});