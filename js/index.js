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


	$('.index-carousel').carousel({
		transitionDuration: 900, // fade animation duration
		period: 5000, // milliseconds until next item in carousel
		crossFadeMultiplier: 0.4, // once new item starts fading in, this decides how long to wait until old item can start fading out
		delayHeaderFade: false, // setting true makes it fade the header out, and then wait for cross-fade to start until new header animates in
								// 	^-> this is good if your headers and action button is different between headers
	});


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