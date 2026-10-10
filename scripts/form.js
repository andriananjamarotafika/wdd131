let date = new Date();
let year = date.getFullYear();

document.getElementById("current-year").textContent = year;
document.getElementById("lastModified").textContent = document.lastModified;
const listProduct = document.getElementById("product");
const submit = document.querySelector("input[type='submit']");
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

submit.addEventListener("submit", AddViewCount());

function AddViewCount() {
	let count = 0;
	if (getCount == 0) {
		setNewCount(1);
	} else {
		count = getCount();
		count += 1;
		setNewCount(count);
	}
}

function setNewCount(index) {
	localStorage.setItem("count", JSON.stringify(index));
}

function getCount() {
	return JSON.parse(localStorage.getItem("count"));
}
