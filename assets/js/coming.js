$(document).on('ready', function () {
	// initialization of countdowns
	var countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {
		yearsElSelector: '.js-cd-years',
		monthElSelector: '.js-cd-month',
		daysElSelector: '.js-cd-days',
		hoursElSelector: '.js-cd-hours',
		minutesElSelector: '.js-cd-minutes',
		secondsElSelector: '.js-cd-seconds'
	});
});
