$(function () {
	
	initTopBanner();
	initGallerySlider();
	initReviewSlider();

});

function initTopBanner() {
	var sliderHomeTop = new Swiper('#topbanner', {
		autoplay: '30',
		effect: 'fade',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	})
}

function initReviewSlider() {
	var reviewSlider = new Swiper('.review-list', {
		spaceBetween: 35,
		slidesPerView: 3,
		freeMode: true,
		breakpoints: {
			992: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 1,
			}
		},
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },
	})
}

function initGallerySlider() {
	var galleryThumbs = new Swiper('.gallery-slider-thumbs .swiper-container', {
		spaceBetween: 20,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
			992: {
				slidesPerView: 3,
				spaceBetween: 5,
			}
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
	var galleryTop = new Swiper('.gallery-slider', {
		spaceBetween: 20,
		thumbs: {
			swiper: galleryThumbs
		}
	});
}