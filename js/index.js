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
	$(".owl-carousel").owlCarousel({
		loop: true,
		nav: false,
		items:1,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn'
		});



})