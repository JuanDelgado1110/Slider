import { changeSlider, nextSlide, prevSlide } from "./functions/slider-functions.js";
import { starInterval, stopInterval } from "./functions/interval-functions.js";

const buttomLeft = document.querySelector(".slider__controller--left");
const buttomRight = document.querySelector(".slider__controller--right");

window.addEventListener("load", () => {
	changeSlider();
	starInterval();
});

buttomRight.addEventListener("click", () => {
	nextSlide();
	changeSlider();

	stopInterval();
	starInterval();
});

buttomLeft.addEventListener("click", () => {
	prevSlide();
	changeSlider();

	stopInterval();
	starInterval();
});
