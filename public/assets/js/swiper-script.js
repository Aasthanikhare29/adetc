function initSwiperPartner() {
	var swiperPartnerEl = document.querySelector(".swiperpartner");
	if (!swiperPartnerEl) return;

	if (swiperPartnerEl.classList.contains("partner-marquee")) return;

	new Swiper(".swiperpartner", {
		slidesPerView: 2,
		spaceBetween: 100,
		loop: true,
		loopedSlides: 5,
		grabCursor: false,
		observer: true,
		observeParents: true,
		speed: 1000,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 100
			},
			992: {
				slidesPerView: 5
			},
		},
	});
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initSwiperPartner);
} else {
	initSwiperPartner();
}
