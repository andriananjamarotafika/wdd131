const hambutton = document.querySelector("#menu");
const headernav = document.querySelectorAll("nav a");
const main = document.querySelector("main");
const home = document.querySelector("#home");
const older = document.querySelector("#old");
const newer = document.querySelector("#new");
const larger = document.querySelector("#large");
const smaller = document.querySelector("#small");
const h1 = document.querySelector("main h1");
const date = new Date();
const year = date.getFullYear();

hambutton.addEventListener("click", () => {
	hambutton.classList.toggle("show");
	headernav.forEach((link) => link.classList.toggle("show"));
});

document.getElementById("current-year").textContent = year;
document.getElementById("lastModified").textContent = document.lastModified;

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
	},
	{
		templeName: "Accra Ghana",
		location: "Accra, Ghana",
		dedicated: "2004, January, 11",
		area: 17500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-detail-249022-2400x1200.jpg",
	},
	{
		templeName: "London England",
		location: "London, England",
		dedicated: "1992, October, 18",
		area: 42652,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/320x200/london-england-temple-lds-919365-wallpaper.jpg",
	},
	{
		templeName: "Salt Lake City Utah",
		location: "Salt Lake City, Utah, United States",
		dedicated: "1893, April, 6",
		area: 382207,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg",
	},
];

document.addEventListener("DOMContentLoaded", () => {
	showTemples(temples, "Home");
});

function extractYear(dedicatedDate) {
	const splitDate = dedicatedDate.split(", ");
	const year = parseInt(splitDate[0], 10);
	return year;
}

function showTemples(templeArray, title) {
	h1.textContent = title;
	main.querySelectorAll(".place-card").forEach((card) => card.remove());

	const cards = templeArray
		.map(
			(temple) => `
        <article class="place-card">
            <h2>${temple.templeName}</h2>
            <div class="details">
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Size: ${temple.area} sq ft</p>
            </div>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" width="400" height="250" fetchpriority="high">
        </article>
    `,
		)
		.join("");

	main.insertAdjacentHTML("beforeend", cards);
}

const templeLarger = temples.filter((temple) => temple.area > 90000);
const templeSmaller = temples.filter((temple) => temple.area > 10000);
const templeNewer = temples.filter(
	(temple) => extractYear(temple.dedicated) > 2000,
);
const templeOlder = temples.filter(
	(temple) => extractYear(temple.dedicated) < 1900,
);

home.addEventListener("click", () => showTemples(temples, "Home"));
older.addEventListener("click", () => showTemples(templeOlder, "Old"));
newer.addEventListener("click", () => showTemples(templeNewer, "New"));
larger.addEventListener("click", () => showTemples(templeLarger, "Large"));
smaller.addEventListener("click", () => showTemples(templeSmaller, "Small"));
