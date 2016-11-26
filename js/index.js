$(function() {
	NProgress.start();
	NProgress.configure({
		easing: 'ease',
		speed: 100,
		trickleRate: 0.3,
		trickleSpeed: 100,
		showSpinner: true
	});
	setTimeout(function() {
		NProgress.done()
	}, 1500);
	$(".button-collapse").sideNav();
    $('.parallax').parallax();
	$('.materialboxed').materialbox();
	$('input#input_text, textarea#textarea1').characterCounter();
	$('.tooltipped').click(function() {
		  Materialize.toast('Our online store is coming soon!', 4000) // 4000 is the duration of the toast
	});
	$('#coming-soon').click(function() {
		console.log('coming')
		  Materialize.toast('Our online store is coming soon!', 4000) // 4000 is the duration of the toast
	});

		$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:10,
		    center: true,
		    stagePadding: 50,
		    nav: false,
		    lazyLoad: true,
		    autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:5
		        },
		        1300:{
		        	items:6
		        },
		        1980:{
		        	items:7
		        }
		    }
		})

	$('.index-carousel').carousel().start({
		transitionDuration: 900, // fade animation duration
		period: 5000, // milliseconds until next item in carousel
		crossFadeMultiplier: 0.4, // once new item starts fading in, this decides how long to wait until old item can start fading out
		delayHeaderFade: false, // setting true makes it fade the header out, and then wait for cross-fade to start until new header animates in
								// 	^-> this is good if your headers and action button is different between headers
	});
	$('#backward-carousel').click(function() {
		$('.index-carousel').carousel().change('previous');
	})
	$('#forward-carousel').click(function() {
		$('.index-carousel').carousel().change('next');
	})



	/*
	 * call $('...').carousel().destroy() to destroy
	 * call $('...').carousel().change('next') to go to the next slide
	 * call $('...').carousel().change('previous') to go to the previous slide
	 */


	$(window).scroll(function() {
		if ($(window).scrollTop() > 15 && $(window).width() > 900) {
			$('#body nav').addClass('is-scrolled');
		} else {
			$('#body nav').removeClass('is-scrolled');
		};
	});

	$('.lanyu-story-container .open-overlay, .lanyu-story-bg').click(function() {
		$('.lanyu-story-overlay').fadeIn(900);
		$('body').css('overflow', 'hidden');
	});
	$('.lanyu-story-container .close-overlay').click(function() {
		$('.lanyu-story-overlay').fadeOut(900);
		$('body').css('overflow', 'visible');
	});

	$('.location-title').click(function() {
		$(this).siblings('.location-details').fadeIn(400);
	});
	$('.location-details .back-button').click(function() {
		$(this).parent().fadeOut(400);
	});

})