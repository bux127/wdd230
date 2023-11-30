let currentDate = new Date();
let currentYear = currentDate.getFullYear();

document.querySelector('.year').innerHTML = currentYear;


var latesDate = document.lastModified;
document.querySelector('#lastModified').innerHTML = latesDate;

const mainnav = document.querySelector('nav');
const hambutton = document.querySelector('.menu');


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



const msToDays = 84600000;
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let lastVisit = numVisits - 1;
let difference = Date.now() - lastVisit

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
}else if (numVisits == 0)  {
	visitsDisplay.textContent = `Welcome, let us know if you have any questions`;
}else if (numVisits == 1) {
	visitsDisplay. textContent = `You last visited 1 day ago`;
}else if (difference < msToDays) {
	visitsDisplay.textContent = `Back so soon! Awesome!`;
}else if (numVisits > 1){
	visitsDisplay.textContent = "You last visited" + difference/msToDays + "ago."
}
numVisits++;

localStorage.setItem("numVisits-ls", numVisits);





