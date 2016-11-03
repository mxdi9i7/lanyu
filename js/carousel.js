(function($) {

	$.fn.carousel = function(options) {
		if (!options)
			options = {};
		var TransitionDuration = (options.transitionDuration || 600)/1000, TransitionCss = '-webkit-transition: all '+TransitionDuration+'s;-moz-transition: all '+TransitionDuration+'s;-ms-transition: all '+TransitionDuration+'s;-o-transition: all '+TransitionDuration+'s;transition: all '+TransitionDuration+'s;';

		var Period = options.period || 3000;

		return this.each(function(i, el) {
			var $this = $(el), $Images = $this.find('.carousel-images'), $Headers = $this.find('.carousel-headers');

			$Headers.find('.carousel-head-container').each(function(index) {
				var $t = $(this);
				if (!index) {
					$t.addClass('active');
				};
				$t.attr('style', TransitionCss + ($t.attr('style') || ''));

			});

			var Count = $Images.find('img').each(function(index) {
				var $t = $(this);
				$Images.append('<div class="carousel-image'+(!index?' active': '')+'" data-carousel-index="'+$t.attr('data-carousel-index')+'" style="background-image: url(\''+this.src+'\');'+TransitionCss+'"></div>');
			}).length;

			var CurrentIndex = 1;
			setInterval(function() {
				var CurrentHeader = $Headers.find('.carousel-head-container[data-carousel-index="'+CurrentIndex+'"]'),
					CurrentImage = $Images.find('.carousel-image[data-carousel-index="'+CurrentIndex+'"]');

				CurrentIndex ++;
				if (CurrentIndex > Count) {
					CurrentIndex = 1;
				};

				var NextHeader = $Headers.find('.carousel-head-container[data-carousel-index="'+CurrentIndex+'"]'),
					NextImage = $Images.find('.carousel-image[data-carousel-index="'+CurrentIndex+'"]');


				CurrentHeader.removeClass('active');
				if (!options.delayHeaderFade) {
					NextHeader.addClass('active');
				};

				NextImage.addClass('active');
				setTimeout(function() { // we want to transition the image in when the other is quarter-way through fading out
					
					CurrentImage.removeClass('active');
					NextHeader.addClass('active');

				}, TransitionDuration*(options.crossFadeMultiplier || 0.25)*1000); // is currently in seconds; we want to make it in MS and only a fraction the time

			}, Period);

		});
	};

}(jQuery));