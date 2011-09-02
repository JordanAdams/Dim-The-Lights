(function($) {

	var screen_width = $(window).width();
	var screen_height = $(window).height();
	var o_left;
	var o_top;
	var clone;
	var settings;
	var target;

	var defaults = {	
		opacity    		: 0.85,
		classes    		: [],
		softBg     		: false,
		hideTarget 		: true,
		closeOnClick	: false,
	};

	var methods = {
		
		destroy	: function() {
			
			$('#dtl_overlay').fadeOut(200, function() {

				target.css('visibility', 'visible');
				$(this).detach();
				clone.remove();

			});

		}

	};


	/*******************/
	/** MAIN FUNCTION **/
	/*******************/
	$.fn.dimTheLights = function(argument) {
		
		// handle argument
		if (!argument) {

			settings = $.extend({}, defaults);

		} else if (typeof(argument)) {

			settings = $.extend({}, defaults, argument);

		} else {
			
			console.error()

		}

		// reference target (jquery fucks with 'this')
		target = this;

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
		clone.addClass('dtl_clone');

		// set clone dimensions
		var t_width = this.width();
		var t_height = this.height();

		clone.width(t_width);
		clone.height(t_height);

		// set clone bg
		if(settings.background) {
			clone.css('background-color', settings.background);
		}

		// apply soft bg if true
		if(settings.softBg) {
		
			clone.css('box-shadow', '0px 0px 10px 5px ' + settings.background);
			clone.css('-webkit-box-shadow', '0px 0px 10px 5px ' + settings.background);
			clone.css('-moz-box-shadow', '0px 0px 10px 5px ' + settings.background);
			clone.css('border-radius', '3px');
			clone.css('-webkit-border-radius', '3px');
			clone.css('-moz-border-radius', '3px');
		
		}

		// add clone classes
		for(c in settings.classes) {
			clone.addClass(settings.classes[c]);
		}

		// hide target?
		settings.hideTarget ? target.css('visibility', 'hidden') : false;


		/** EVENTS **/
		if (settings.closeOnClick) {

			$('.dtl_clone').click(function() {	
				methods.destroy();
			});

		}

		$('#dtl_overlay').live('click', function() {	
			methods.destroy();
		});

		$(window).bind('resize', function() {

			screen_width = $(window).width();
			screen_height = $(window).height();

			$('#dtl_overlay').width(screen_width);
			$('#dtl_overlay').height(screen_height);

		});

	};

})(jQuery);