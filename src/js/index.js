//import * as bootstrap from 'bootstrap';
// import { $, jQuery } from "jquery";

let swiper = new Swiper(".mySwiper", {
	slidesPerView: 1.1,
	centeredSlides: true,
	spaceBetween: 10,
	slideToClickedSlide: true,

	loop: true,
	keyboard: {
		enabled: true,
	},
	// autoplay: {
	// delay: 2500,
	// disableOnInteraction: false,
	// },
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
	},
});
