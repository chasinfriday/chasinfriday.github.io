/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

/*----------------------------------------------------*/
	/* ImageLightbox
	 /*----------------------------------------------------*/
	/*
	var activityIndicatorOn = function () {
			$('<div id="imagelightbox-loading"><div></div></div>').appendTo('body');
		},
		activityIndicatorOff = function () {
			$('#imagelightbox-loading').remove();
		},

		overlayOn = function () {
			$('<div id="imagelightbox-overlay"></div>').appendTo('body');
		},
		overlayOff = function () {
			$('#imagelightbox-overlay').remove();
		},

		closeButtonOn = function (instance) {
			$('<a href="#" id="imagelightbox-close" title="close"><i class="fa fa fa-times"></i></a>').appendTo('body').on('click touchend', function () {
				$(this).remove();
				instance.quitImageLightbox();
				return false;
			});
		},
		closeButtonOff = function () {
			$('#imagelightbox-close').remove();
		},

		captionOn = function () {
			var description = $('a[href="' + $('#imagelightbox').attr('src') + '"] img').attr('alt');
			if (description.length > 0)
				$('<div id="imagelightbox-caption">' + description + '</div>').appendTo('body');
		},
		captionOff = function () {
			$('#imagelightbox-caption').remove();
		};

	var instanceA = $('a[data-imagelightbox="a"]').imageLightbox(
		{
			onStart: function () {
				overlayOn();
				closeButtonOn(instanceA);
			},
			onEnd: function () {
				overlayOff();
				captionOff();
				closeButtonOff();
				activityIndicatorOff();
			},
			onLoadStart: function () {
				captionOff();
				activityIndicatorOn();
			},
			onLoadEnd: function () {
				captionOn();
				activityIndicatorOff();
			}

		});
		*/
