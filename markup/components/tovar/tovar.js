$(document).ready(function() {
	$('.fotorama').fotorama({
		width: 477,
		nav: 'thumbs',
		navwidth: '400px',
		thumbwidth: 94,
		thumbheight: 94,
		thumbmargin: 10,
		thumbborderwidth: 1,
		allowfullscreen: false,
		fit: 'cover',
		arrows: true
	});

	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.tovar__tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});
});