$(document).ready(function() {
	var similarSlider = new Swiper('.similar-container', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.similar-pagination',
			type: 'bullets',
			clickable: true
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},
	});
});