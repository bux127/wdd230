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
