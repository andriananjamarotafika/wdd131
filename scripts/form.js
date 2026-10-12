let date = new Date();
let year = date.getFullYear();

document.getElementById("current-year").textContent = year;
document.getElementById("lastModified").textContent = document.lastModified;
const listProduct = document.getElementById("product");
const products = [
	{
		id: "fc-1888",
		name: "flux capacitor",
		averagerating: 4.5,
	},
	{
		id: "fc-2050",
		name: "power laces",
		averagerating: 4.7,
	},
	{
		id: "fs-1987",
		name: "time circuits",
		averagerating: 3.5,
	},
	{
		id: "ac-2000",
		name: "low voltage reactor",
		averagerating: 3.9,
	},
	{
		id: "jj-1969",
		name: "warp equalizer",
		averagerating: 5.0,
	},
];

if (listProduct) {
	let listOption = "";
	products.forEach(
		(product) =>
			(listOption += `<option value="${product.id}">${product.name}</option>`),
	);
	listProduct.insertAdjacentHTML("beforeend", listOption);
}

const form = document.querySelector("form");
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
