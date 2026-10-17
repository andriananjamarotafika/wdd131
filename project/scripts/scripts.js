const hambutton = document.querySelector("#menu");
const mainnav = document.querySelector(".links");
let date = new Date();
let year = date.getFullYear();

hambutton.addEventListener("click", () => {
	const isOpen = mainnav.classList.toggle("show");
	hambutton.classList.toggle("show", isOpen);
	hambutton.setAttribute("aria-expanded", isOpen);
	hambutton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

document.getElementById("current-year").textContent = year;
document.getElementById("lastModified").textContent = document.lastModified;

const products = [
	{
		name: "Three-Color Raffia Basket",
		image: "3-colors-basket.webp",
		alt: "Handwoven basket with blue, rust, and natural raffia stripes",
		type: "Basket",
		description: "A handwoven raffia basket with three distinct colors.",
	},
	{
		name: "Decorative Raffia Bags",
		image: "baskets-img.webp",
		alt: "Two decorative raffia bags in striped and green designs",
		type: "Bags",
		description: "Handmade raffia bags with colorful decorative designs.",
	},
	{
		name: "Beige Raffia Bag",
		image: "beige-bag.webp",
		alt: "Round beige raffia bag with a dark strap",
		type: "Bag",
		description: "A compact woven bag in a natural beige tone.",
	},
	{
		name: "Beige Raffia Basket",
		image: "beige-basket.webp",
		alt: "Beige raffia basket with dark handles",
		type: "Basket",
		description: "A neutral-toned woven basket with sturdy handles.",
	},
	{
		name: "Green Raffia Basket",
		image: "green-basket.webp",
		alt: "Green raffia basket with colorful flower designs",
		type: "Basket",
		description: "A colorful woven basket decorated with floral details.",
	},
	{
		name: "Grey Raffia Bag",
		image: "grey-bag.webp",
		alt: "Grey raffia bag",
		type: "Bag",
		description: "A handmade raffia bag in a muted grey tone.",
	},
	{
		name: "Multicolor Raffia Basket",
		image: "multi-colors-basket.webp",
		alt: "Multicolor raffia basket",
		type: "Basket",
		description: "A handwoven basket combining multiple raffia colors.",
	},
	{
		name: "Red Raffia Basket",
		image: "red-basket.webp",
		alt: "Red raffia basket",
		type: "Basket",
		description: "A bold red-toned woven basket.",
	},
	{
		name: "Yellow Raffia Bag",
		image: "yellow-bag.webp",
		alt: "Handwoven yellow raffia bag",
		type: "Bag",
		description: "A warm yellow woven piece made to stand out.",
	},
];

const productGrid = document.querySelector("#product-grid");
const productCount = document.querySelector("#product-count");

if (productGrid)
	products.forEach((product) => {
		const card = document.createElement("article");
		card.className = "catalog-product";

		const image = document.createElement("img");
		image.src = `images/${product.image}`;
		image.alt = product.alt;
		image.width = 400;
		image.height = 300;
		image.loading = "lazy";

		const body = document.createElement("div");
		body.className = "catalog-product__body";

		const type = document.createElement("p");
		type.className = "catalog-product__type";
		type.textContent = product.type;

		const name = document.createElement("h2");
		name.textContent = product.name;

		const description = document.createElement("p");
		description.className = "catalog-product__description";
		description.textContent = product.description;

		body.append(type, name, description);
		card.append(image, body);
		productGrid.append(card);
	});

if (productCount) productCount.textContent = `${products.length} pieces`;

const form = document.querySelector(".contact-form");
if (form) {
	form.addEventListener("submit", () => {
		setNewCount((getCount() || 0) + 1);
	});
}

function setNewCount(index) {
	localStorage.setItem("count", JSON.stringify(index));
}

function getCount() {
	return JSON.parse(localStorage.getItem("count"));
}

const countDisplay = document.querySelector(".confirmation span");
if (countDisplay) {
	countDisplay.textContent = `${getCount() || 0}`;
}
