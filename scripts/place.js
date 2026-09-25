let temperature = 10;
let wind = 5.0;
let windChill = "N/A";

const calculateWindChill = (temperature, wind) =>
	(
		13.12 +
		0.6215 * temperature -
		11.37 * Math.pow(wind, 0.16) +
		0.3965 * temperature * Math.pow(wind, 0.16)
	).toFixed(1);

if (temperature <= 10 && wind > 4.8) {
	windChill = calculateWindChill(temperature, wind).toString();
}

const idTemp = document.querySelector("#temp");
const idWind = document.querySelector("#wind");
const idWindChill = document.querySelector("#windChill");

idTemp.textContent = `${temperature} °C`;
idWind.textContent = `${wind} km/h`;
idWindChill.textContent = `${windChill} °C`;
