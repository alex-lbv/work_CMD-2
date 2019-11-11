$(document).ready(function () {

	var swiperTest = new Swiper('.test__container', {
		spaceBetween: 100,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		touchRatio: 0,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-next',
		},
	});
});