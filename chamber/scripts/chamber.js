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

const baseURL = "https://bux127.github.io/wdd230/";
const linksURL = "https://bux127.github.io/wdd230/chamber/data/members.json";
const display = document.querySelector("article");
const ad = document.querySelector('.advert');



async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayMembers(data.members);
  }
  
  const displayMembers = (members) => {
    members.forEach((member) => {
        const card = document.createElement('div');
        card.innerHTML = `
            <img src="${member.profilePic}">
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p>${member.website}</p>
            `;
        cards.append(card);
        if (member.membershipLevel == 'Gold' || member.membershipLevel == 'Silver') {
            ad.innerHTML = 'great';
        }
    })
}

getLinks();



//chamber weather

const celc = document.querySelector('.chamber_temp');
const describe = document.querySelector('.chamber_weather');
const forecast = document.querySelector('.chamber_forecast');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-26.397533502892312&lon=31.174390313757037&units=metric&appid=fc8d1b420fc07c171a0593af05bbeb2b';
const url1 = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=-26.397533502892312&lon=31.174390313757037&cnt=3&units=metric&appid=fc8d1b420fc07c171a0593af05bbeb2b';

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
    celc.innerHTML = `${data.main.temp}`
    let desc = data.weather[0].description;
    describe.textContent = `${desc}`
};

apiFetch();


//banner

const ban = document.querySelector(".banner");
const banner = document.querySelector(".banner_close");
let now = new Date();
let day = now.getDay();

banner.addEventListener('click', function() {
    ban.style.display = "none";
})

if (day == 1 || day == 2 || day == 3) {
    ban.style.display = "block";
}else{
    ban.style.display = "none";
}
