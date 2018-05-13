$(document).on('ready', function () {
	// initialization of go to
	$.HSCore.components.HSGoTo.init('.js-go-to');

	// initialization of HSScrollNav component
	$.HSCore.components.HSScrollNav.init($('.js-scroll-nav'), {
		duration: 700
	});

	// initialization of popups
	$.HSCore.components.HSPopup.init('.js-fancybox-media', {
		transitionEffect: false
	});
});

$(window).on('load', function () {
	// initialization of header
	$.HSCore.components.HSHeader.init($('#js-header'));
	$.HSCore.helpers.HSHamburgers.init('.hamburger');
});
