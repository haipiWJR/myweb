var mySwiper = new Swiper('.swiper', {
	loop: true, // 循环模式选项
	autoplay: true, //自动切换
	slidesPerView: 5,
	slidesPerGroup: 5,
	loopFillGroupWithBlank: true,
	// 如果需要分页器
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
