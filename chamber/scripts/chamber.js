const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav_menu');
const load = document.querySelector('#loadtime');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
})

document.querySelectorAll('.nav_link').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('active')
    nav.classList.remove('active')
}))





document.getElementById('date').innerHTML = new Date(document.lastModified);

/*
// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
    
} else {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

*/
const baseURL = "https://bux127.github.io/wdd230/";
const linksURL = "https://bux127.github.io/wdd230/chamber/data/members.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayMembers(data.members);
  }
  
  getLinks();