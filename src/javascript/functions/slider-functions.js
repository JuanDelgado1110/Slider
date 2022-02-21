import { users } from "../classes/users.js";

const userName = document.querySelector(".slider__userName");
const userProfession = document.querySelector(".slider__userProfession");
const userImage = document.querySelector(".slider__image");
const userTestimony = document.querySelector(".slider__testimony");

let sliderPosition = 0;

export function changeSlider() {
	userName.textContent = users[sliderPosition].name;
	userProfession.textContent = users[sliderPosition].profession;

	userImage.setAttribute("src", `${users[sliderPosition].image}`);

	userTestimony.textContent = users[sliderPosition].testimony;
}

export function nextSlide() {
	if (sliderPosition == users.length - 1) {
		sliderPosition = users.length - users.length - 1;
	}

	sliderPosition += 1;
}

export function prevSlide() {
	if (sliderPosition == 0) {
		sliderPosition = users.length;
	}

	sliderPosition -= 1;
}
