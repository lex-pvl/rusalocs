$(document).ready(function() {
	$(".power-slider").ionRangeSlider({
		type: "double",
        min: 0,
        max: 100,
        from: 20,
        to: 60,
        grid: false
	});

	$(".light-slider").ionRangeSlider({
		type: "double",
        min: 0,
        max: 5000,
        from: 600,
        to: 3000,
        grid: false
	});
});