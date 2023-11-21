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


