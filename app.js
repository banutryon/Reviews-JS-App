const reviews = [
	{
		id: 1,
		name: "Banu Tryon",
		job: "web developer",
		img: "./Banu.png",
		text:
			"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		name: "Evan Epperson",
		job: "web designer",
		img: "/addImage.jpeg",
		text:
			"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
	},
	{
		id: 3,
		name: "Brandon Mazikowski",
		job: "intern",
		img: "/addImage.jpeg",
		text:
			"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
	},
	{
		id: 3,
		name: "Bob Ross",
		job: "Painter",
		img: "/addImage.jpeg",
		text: "I paint happy trees",
	},
];

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load intial item
window.addEventListener("DOMContentLoaded", function () {
	showPerson();
});

//  show person based on item

function showPerson() {
	const item = reviews[currentItem];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function () {
	currentItem++;
	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson();
});
// show prev person
prevBtn.addEventListener("click", function () {
	currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson();
});
// show random person
randomBtn.addEventListener("click", function () {
	currentItem = Math.floor(Math.random() * reviews.length);
	showPerson();
});
