/* =================================
------------------------------------
	WebUni - Education Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");


	/*------------------
		Gallery item
	--------------------*/
	if($('.course-items-area').length > 0 ) {
		var containerEl = document.querySelector('.course-items-area');
		var mixer = mixitup(containerEl);
	}

});

(function($) {


    /*------------------
		Accordions
	--------------------*/
	$('[name="course"]').on('change', function(e) { 
    var selector = '.' + $(this).val();
    var chosenItems = $(selector).closest('.mix');

    // Сокрытие всех блоков
    $('.mix').hide();

    // Показ выбранных блоков
    chosenItems.show(800);
    e.preventDefault();
});



	/*------------------
		Circle progress
	--------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cptitle = $(this).data("cptitle");
		var cpid 	= $(this).data("cpid");

		$(this).append('<div class="'+ cpid +'"></div><div class="progress-info"><h2>'+ cpvalue +'%</h2><p>'+ cptitle +'</p></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 176,
				thickness: 9,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 176,
				thickness: 9,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}

	});
	/*------------------
		Photo-gallery
	--------------------*/

	$('.photo-gallery').slick({
		autoplay: true,
		autoplaySpeed: 2800,
  		dots: false,
  		infinite: true,
  		speed: 600,
  		fade: true,
  		cssEase: 'linear',
  		nextArrow: false,
  		prevArrow: false
	});



	$('.carousel2').owlCarousel({
    	loop:true,
    	margin:10,
    	nav:true,
    	navText: ["<div class='left'></div>", "<div class='right'></div>"],
    	responsive:{
        	0:{
            	items:1
        	}
        }
	});

	$('.carousel1').owlCarousel({
    	loop:true,
    	margin:10,
    	nav:true,
    	navText: ["<div class='left'></div>", "<div class='right'></div>"],
    	responsive:{
        	0:{
            	items:1
        	},
        	520:{
        		items:2
        	},
        	991:{
        		items:4
        	}
        }
	});


	$(".next-course").click(function() {
		let activeblock = $(".active-course")
		let activeblockIndex = $(".block-course").index(activeblock);
		let nextblockIndex = activeblockIndex + 1;
		let nextblock = $(".block-course").eq(nextblockIndex)
		activeblock.fadeOut(1000);
		activeblock.removeClass("active-course");
		if(nextblockIndex == ($(".block-course:last")).index() + 1) {
			$(".block-course").eq(0).fadeIn(1000);
			$(".block-course").eq(0).addClass("active-course");
		}
		else {
			nextblock.fadeIn(1000);
			nextblock.addClass("active-course");
		}
	});

	$(".prev-course").click(function() {
		let activeblock = $(".active-course");
		let activeblockIndex = $(".block-course").index(activeblock);
		let prevblockIndex = activeblockIndex - 1;
		let prevblock = $(".block-course").eq(prevblockIndex)

		activeblock.fadeOut(1000);
		activeblock.removeClass("active-course");
		prevblock.fadeIn(1000);
		prevblock.addClass('active-course')
	});

	$("#menu").mmenu({
         "extensions": [
                          "position-right",
                          "pagedim-black"
                       ],
                       navbar: {
    					title: '<h3 style="text-align: center;">Робин</h3>'
  						}
    });

    var wow = new WOW(
  		{
    		boxClass:     'wow',      // animated element css class (default is wow)
    		animateClass: 'animated', // animation css class (default is animated)
    		offset:       0,          // distance to the element when triggering the animation (default is 0)
    		mobile:       true,       // trigger animations on mobile devices (default is true)
    		live:         true,       // act on asynchronously loaded content (default is true)
    		callback:     function(box) {
    		  // the callback is fired every time an animation is started
    		  // the argument that is passed in is the DOM node being animated
    		},
    		scrollContainer: null // optional scroll container selector, otherwise use window
  		}
  	);
	wow.init();

})(jQuery);


