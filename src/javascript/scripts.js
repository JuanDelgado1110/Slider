import { users } from "./classes/users.js";

const userName = document.querySelector(".slider__userName");
const userProfession = document.querySelector(".slider__userProfession");
const userImage = document.querySelector(".slider__image");
const userTestimony = document.querySelector(".slider__testimony");

const buttomLeft = document.querySelector(".slider__controller--left");
const buttomRight = document.querySelector(".slider__controller--right");

let sliderPosition = 0;

function changeSlider() {
	userName.textContent = users[sliderPosition].name;
	userProfession.textContent = users[sliderPosition].profession;

	userImage.setAttribute("src", `${users[sliderPosition].image}`);

	userTestimony.textContent = users[sliderPosition].testimony;
}

function nextSlide() {
	if (sliderPosition == users.length - 1) {
		sliderPosition = users.length - users.length - 1;
	}

	sliderPosition += 1;
}

function prevSlide() {
	if (sliderPosition == 0) {
		sliderPosition = users.length;
	}

	sliderPosition -= 1;
}

addEventListener("load", () => {
	changeSlider();
});

// TODO cuando el usuario cambie el slide que se reinicie el setInterval

setInterval(() => {
	nextSlide();
	changeSlider();
}, 10000);

buttomRight.addEventListener("click", () => {
	nextSlide();
	changeSlider();
});

buttomLeft.addEventListener("click", () => {
	prevSlide();
	changeSlider();
});
