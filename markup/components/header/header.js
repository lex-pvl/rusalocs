$(document).ready(function() {
	
	var searchBtn = $('.header__search'),
	header = $('.header'),
	searchInput = $('.header__search-hidden'),
	cartBtn = $('.header__cart'),
	cart = $('.header__cart-hidden');

	searchBtn.on('click', function() {
		searchInput.slideToggle(400);
		header.toggleClass('header-changed');
		searchBtn.css('background', 'white');

		if ( header.hasClass('header-changed') ) {
			searchBtn.html('<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><g><g><path fill="#363636" d="M2.515 1.1L11 9.586 19.485 1.1A1 1 0 0 1 20.9 2.515L12.414 11l8.485 8.485a1 1 0 0 1-1.414 1.414L11 12.414 2.515 20.9A1 1 0 1 1 1.1 19.485L9.586 11 1.1 2.515A1 1 0 0 1 2.515 1.1z"/><path fill="#444f5c" d="M2.515 1.1L11 9.586 19.485 1.1A1 1 0 0 1 20.9 2.515L12.414 11l8.485 8.485a1 1 0 0 1-1.414 1.414L11 12.414 2.515 20.9A1 1 0 1 1 1.1 19.485L9.586 11 1.1 2.515A1 1 0 0 1 2.515 1.1z"/></g></g></svg>');
		} else {
			searchBtn.html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"><defs><linearGradient id="2weya" x1="5" x2="19" y1="25" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#48c1fb"/><stop offset=".99" stop-color="#2f89dc"/><stop offset="1" stop-color="#2f89dc"/></linearGradient></defs><g><g><path fill="#555" d="M23.704 24.704c-.4.4-1.05.4-1.45 0l-4.792-4.816A10.936 10.936 0 0 1 11 22C4.925 22 0 17.075 0 11S4.925 0 11 0s11 4.925 11 11c0 2.929-1.152 5.583-3.018 7.554l4.722 4.7c.4.4.4 1.05 0 1.45zM20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0z"/><path fill="url(#2weya)" d="M23.704 24.704c-.4.4-1.05.4-1.45 0l-4.792-4.816A10.936 10.936 0 0 1 11 22C4.925 22 0 17.075 0 11S4.925 0 11 0s11 4.925 11 11c0 2.929-1.152 5.583-3.018 7.554l4.722 4.7c.4.4.4 1.05 0 1.45zM20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0z"/></g></g></svg>');
		}
	});

	cartBtn.on('click', function() {
		cart.slideToggle(400);
		header.toggleClass('header-changed');
		cartBtn.css('background', 'white');
		searchBtn.css('background', 'transparent');
		if ( header.hasClass('header-changed') ) {
			cartBtn.find('svg').css('fill', '#48c1fb');
		} else {
			cartBtn.find('svg').css('fill', '#fff');
			cartBtn.css('background-image', 'linear-gradient(30deg, #48c1fb 0%, #2f89dc 99%, #2f89dc 100%)');
		}
	});

	function CartValue() {
		var cartValue = $('#value');
		cartValue.html($('.header__cart-item').length);
	}

	CartValue();

});