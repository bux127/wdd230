let currentDate = new Date();
let currentYear = currentDate.getFullYear();

document.querySelector('.year').innerHTML = currentYear;


var latesDate = document.lastModified;
document.querySelector('#lastModified').innerHTML = latesDate;

const mainnav = document.querySelector('nav');
const hambutton = document.querySelector('.menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

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

const visitsDisplay = document.querySelector(".visits");

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

key.addEventListener("same", checkSame);

function checkSame() {
	if (lock.value!== key.value) {
		message.textContent = "Password does not match";
		message.style.visibilty = "show";
		key.style.backgroundColor = '#fff0f3'
		key.value = "";
		key.focus();
	}else{
		message.style.display = "none";
		key.style.backgroundColor = "#fff";
		key.style.color = "#000";
	}
}

//form range

const rangeValue = document.getElementById("calibration");
const range = document.getElementById("values");

range.addEventListener('change', displaySelection);
range.addEventListener('input', displaySelection);

function displaySelection() {
	rangeValue.innerHTML = range.value;
}


