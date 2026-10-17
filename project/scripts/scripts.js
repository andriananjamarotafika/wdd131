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
