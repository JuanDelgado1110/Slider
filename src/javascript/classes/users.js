class User {
	constructor(name, profession, image, testimony) {
		(this.name = name), (this.profession = profession), (this.image = image), (this.testimony = testimony);
	}
}

export const users = [];

const user1 = new User(
	"Tanya Sinclair",
	"UX Engineer",
	"./src/assets/images/image-tanya.jpg",
	"“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"
);

users.push(user1);

const user2 = new User(
	"John Tarkpor",
	"Junior Front-end Developer",
	"./src/assets/images/image-john.jpg",
	"“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"
);

users.push(user2);
