$(document).ready(function() {
	
	var swiper = new Swiper('.news__container', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		}
	});

});