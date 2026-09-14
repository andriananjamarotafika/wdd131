const hambutton = document.querySelector("#menu");
const mainnav = document.querySelectorAll("nav a");
let date = new Date();
let year = date.getFullYear();

hambutton.addEventListener("click", () => {
	hambutton.classList.toggle("show");
	mainnav.forEach((link) => link.classList.toggle("show"));
});

document.getElementById("current-year").textContent = year;
document.getElementById("lastModified").textContent = document.lastModified;
