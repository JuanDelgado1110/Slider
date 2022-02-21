import { changeSlider, nextSlide } from "./slider-functions.js";

let interval;

export function starInterval() {
	interval = setInterval(() => {
		nextSlide();
		changeSlider();
	}, 2000);
}

export function stopInterval() {
	clearInterval(interval);
}
