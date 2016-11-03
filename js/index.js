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
	$('input#input_text, textarea#textarea1').characterCounter();
	// $(".owl-carousel").owlCarousel({
	// 	loop: true,
	// 	nav: false,
	// 	items:1,
	// 	autoplay: true,
	// 	autoplayTimeout: 5000,
	// 	autoplayHoverPause: false,
	// 	animateOut: 'fadeOut',
	// 	animateIn: 'fadeIn',
	// 	});


	$('.index-carousel').carousel({
		transitionDuration: 900, // fade animation duration
		period: 5000, // milliseconds until next item in carousel
		crossFadeMultiplier: 0.4, // once new item starts fading in, this decides how long to wait until old item can start fading out
		delayHeaderFade: false, // setting true makes it fade the header out, and then wait for cross-fade to start until new header animates in
								// 	^-> this is good if your headers and action button is different between headers
	});

	

})