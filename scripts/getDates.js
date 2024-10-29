document.getElementById('date').innerHTML = new Date(document.lastModified);


const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav_menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
})

document.querySelectorAll('.nav_link').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('active')
    nav.classList.remove('active')
}))

/*
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

const key = document.querySelector("#keyphrase");
const key1 = document.querySelector("#keyphrase2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame());

// This should be refactored.
function checkSame() {
	if (key.value !== key1.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		key1.style.backgroundColor = "#fff0f3";
		key1.value = "";
		key1.focus();
	} else {
		message.style.display = "none";
		key1.style.backgroundColor = "#fff";
		key1.style.color = "#000";
	}
}
*/
const weatherIcon = document.querySelector('#icon');
const currentTemp = document.querySelector('#temp');
const captionDesc = document.querySelector('#desc');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-26.397533502892312&lon=31.174390313757037&units=metric&appid=fc8d1b420fc07c171a0593af05bbeb2b';

async function apiFetch() {
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



const displayResults = (data) => {
    currentTemp.innerHTML = `${data.main.temp}`
    let desc = data.weather[0].description;
	weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    weatherIcon.setAttribute('alt', `${data.weather[0].icon}`);
    captionDesc.textContent = `${desc}`
};

apiFetch();


const visitsDisplay = document.querySelector("#visit");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;    
} 

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
