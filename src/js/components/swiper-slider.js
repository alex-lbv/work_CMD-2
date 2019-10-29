$(document).ready(function () {

	var swiperTest = new Swiper('.test__container', {
		spaceBetween: 100,
		touchRatio: 0,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-next',
		},
	});
});