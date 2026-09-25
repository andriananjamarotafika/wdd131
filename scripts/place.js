let temperature = 10;
let wind = 5.0;

const calculateWindChill = (temperature, wind) =>
	(
		13.12 +
		0.6215 * temperature -
		11.37 * Math.pow(wind, 0.16) +
		0.3965 * temperature * Math.pow(wind, 0.16)
	).toFixed(1);

const idTemp = document.querySelector("#temp");
const idWind = document.querySelector("#wind");
const idWindChill = document.querySelector("#windChill");

idTemp.textContent = `${temperature} °C`;
idWind.textContent = `${wind} km/h`;
idWindChill.textContent = `${calculateWindChill(temperature, wind)} °C`;
