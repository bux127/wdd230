let currentDate = new Date();
let currentYear = currentDate.getFullYear();

document.querySelector('.year').innerHTML = currentYear;


var latesDate = document.lastModified;
document.querySelector('#lastModified').innerHTML = latesDate;

const mainnav = document.querySelector('.nav');
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




// Time between visits


const now = Date.now();
localStorage.setItem('visits', now);
let storedDate = (localStorage.getItem('visits'));
 
if (storedDate == null) {
  storedDate = now
}
//I want to display hours since the last visit

const msInHour = 1000 * 60 * 60;
const difference = (now - storedDate)/msInHour
console.log(difference)
 
if (difference > 1) {
  message = `It has been ${Math.floor(difference)} hours since your last visit`
} else {
  message = `Welcome to my website`
}
 
document.querySelector('.active').textContent = message;


