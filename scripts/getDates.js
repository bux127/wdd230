let currentDate = new Date();
let currentYear = currentDate.getFullYear();

document.querySelector('.year').innerHTML = currentYear;


var latesDate = document.lastModified;
document.querySelector('#lastModified').innerHTML = latesDate;

const mainnav = document.querySelector('nav');
const hambutton = document.querySelector('.menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
`hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});`

const modeButton = document.querySelector("#mode");
const header = document.querySelector('header');
const h1 = document.querySelector('h1');

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		header.style.background = "#000";
		h1.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		header.style.background = "#D62828";
		h1.style.color = "#001d4a";
        header.style.background = "linear-gradient(to left, yellowgreen, white) ;"
		modeButton.textContent = "🕶️";
	}
});


//page visits
const visitsDisplay = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

//form

const lock = document.querySelector("security");
const key = document.querySelector("secure");

const message = document.querySelector("formMsg");

//key.addEventListener("same", checkSame);


const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#password2");
const messages = document.querySelector("#message");

//kp2.addEventListener("focusout", checkSame);
function checkSame() {
	if (kp1.value !== kp2.value) {
		messages.textContent = "Passwords DO NOT MATCH!";
		messages.style.color = "red";
		messages.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		messages.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}

//form range

const rangeValue = document.getElementById("calibration");
const range = document.getElementById("values");

//range.addEventListener('change', displayRatingValue);
//range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

//range.addEventListener('change', displaySelection);
//range.addEventListener('input', displaySelection);

function displaySelection() {
	rangeValue.innerHTML = range.value;
}

//weather


// Get weather
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#wicon');
const climate = document.querySelector('#climate');


const url = `https://api.openweathermap.org/data/2.5/weather?lat=-26.40&lon=31.17&units=metric&appid=4d7e5824d50954c80fb74fd719d28184`;
const focs = `api.openweathermap.org/data/2.5/forecast?lat=-26.40&lon=31.17&appid=4d7e5824d50954c80fb74fd719d28184`

async function fetchWeatherApi() {
	try {
	  const response = await fetch(url);
	  if (response.ok) {
		const data = await response.json();
		displayResults(data);
		console.log(data);
	  } else {
		  throw Error(await response.text());
	  }
	} catch (error) {
		console.log(error);
	}
  }

const displayResults = (weather) => {
	currentTemp.textContent = `${weather.main.temp}`
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
	climate.textContent = `${weather.weather[0].description}`;
   
};

fetchWeatherApi();

