(function($) {

	var _carouselStates = {
		stateCounter: 0,
	};

	function changeSlide(changeTo, state, cb) {
		if (changeTo == 'next' || changeTo == 'previous') {
			var toggler = changeTo == 'next';
			return function() {
				var CurrentHeader = state.$Headers.find('.carousel-head-container[data-carousel-index="'+state.CurrentIndex+'"]'),
					CurrentImage = state.$Images.find('.carousel-image[data-carousel-index="'+state.CurrentIndex+'"]');

				state.CurrentIndex = toggler? state.CurrentIndex+1: state.CurrentIndex-1;
				if ((toggler && state.CurrentIndex > state.Count) || (!toggler && state.CurrentIndex < 1)) {
					state.CurrentIndex = toggler? 1: state.Count;
				};

				var NextHeader = state.$Headers.find('.carousel-head-container[data-carousel-index="'+state.CurrentIndex+'"]'),
					NextImage = state.$Images.find('.carousel-image[data-carousel-index="'+state.CurrentIndex+'"]');


				CurrentHeader.removeClass('active');
				if (!state.options.delayHeaderFade) {
					NextHeader.addClass('active');
				};

				NextImage.addClass('active');
				setTimeout(function() { // we want to transition the image in when the other is quarter-way through fading out
					
					CurrentImage.removeClass('active');
					NextHeader.addClass('active');

					if (cb) {
						cb();
					};

				}, state.TransitionDuration*(state.options.crossFadeMultiplier || 0.25)*1000); // is currently in seconds; we want to make it in MS and only a fraction the time
		
			}
		};
	}

	$.fn.carousel = function() {
		var $thisCaller = this;
		return  {
			change: function(direction) {
				if (direction != 'next' && direction != 'previous') { // if invalid direction
					return $thisCaller;
				}
				return $thisCaller.each(function() {
					var state = _carouselStates[$(this).attr('data-state-index')];
					if (state) {
						clearInterval(state.continuousInterval);
						changeSlide(direction, state, function() {
							state.continuousInterval = setInterval(changeSlide('next', state), state.Period);
						})();
					};
				});
			},
			start: function(options) {
				if (!options)
					options = {};

				var TransitionDuration = (options.transitionDuration || 600)/1000, TransitionCss = '-webkit-transition: all '+TransitionDuration+'s;-moz-transition: all '+TransitionDuration+'s;-ms-transition: all '+TransitionDuration+'s;-o-transition: all '+TransitionDuration+'s;transition: all '+TransitionDuration+'s;';

				var Period = options.period || 3000;

				return $thisCaller.each(function(i, el) {
					var $this = $(el), $Images = $this.find('.carousel-images'), $Headers = $this.find('.carousel-headers');
					var $thisHTML = $this.html();

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

					var ThisStateIndex = _carouselStates.stateCounter; //get unique state index for storing this state
					$this.attr('data-state-index', ThisStateIndex);

					_carouselStates[ThisStateIndex] = { //add state of this carousel to the state collection
						options: options,
						Count: Count,
						CurrentIndex: 1,
						Period: Period,
						TransitionDuration: TransitionDuration,
						$this: $this,
						$Images: $Images,
						$Headers: $Headers,
						_oldHTML: $thisHTML,
					};

					_carouselStates.stateCounter ++;

					_carouselStates[ThisStateIndex].continuousInterval = setInterval(changeSlide('next', _carouselStates[ThisStateIndex]), Period);

				});
			},
			destroy: function() {
				return $thisCaller.each(function(i, el) {
					var state = _carouselStates[$(el).attr('data-state-index')];
					if (state) {
						clearInterval(state.continuousInterval);
						$(el).html(state._oldHTML);
					};
				});
			}
		};
	};

}(jQuery));