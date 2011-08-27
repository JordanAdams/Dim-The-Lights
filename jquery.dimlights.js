(function($) {

	var defaults = {	
		opacity : 0.85,
		// background: '',
		classes : [],
	}

	var screen_width = $(window).width();
	var screen_height = $(window).height();

	var o_left;
	var o_top;

	var clone;
	var settings;

	$.fn.dimTheLights = function(options) {
		
		// merge options into settings
		settings = $.extend({}, defaults, options);

		console.log(settings);

		// add overlay to DOM
		$('body').append('<div id="dtl_overlay"></div>');

		// resize overlay
		$('#dtl_overlay').width(screen_width);
		$('#dtl_overlay').height(screen_height);

		// fade in overlay
		$('#dtl_overlay').fadeTo(200, settings.opacity);

		// get element position
		o_left = this.offset().left;
		o_top = this.offset().top;

		target = this;

		$(window).bind('resize', function() {
			
			o_left = target.offset().left;
			o_top = target.offset().top;
			
			clone.css('top', o_top);
			clone.css('left', o_left);		

		});

		// clone the target element
		clone = this.clone();
		clone.appendTo('body');

		// position clone
		clone.css('top', o_top);
		clone.css('left', o_left);
		clone.addClass('dtl_target');

		// set clone dimensions
		var t_width = this.width();
		var t_height = this.height();

		clone.width(t_width);
		clone.height(t_height);

		// set clone bg
		if(settings.background) {
			clone.css('background', settings.background);
		}

		// add clone classes
		/*for(c in settings.classes) {
			clone.addClass(settings.classes[c]);
		}*/

	};

	// Bind 'close on click' to overlay
	$('#dtl_overlay').live('click', function() {
		
		$(this).fadeOut(200, function() {
			$(this).detach();
			clone.detach();
		});

	});

	// Keep overlay size correct
	$(window).bind('resize', function() {

		screen_width = $(window).width();
		screen_height = $(window).height();

		$('#dtl_overlay').width(screen_width);
		$('#dtl_overlay').height(screen_height);

	});

})(jQuery);