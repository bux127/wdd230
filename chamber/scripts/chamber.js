

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
 
//document.querySelector('.active').textContent = message;


// fetch json

const url = '../data/members.json'
const cards = document.querySelector('#include');

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members); 
    displayMembers(data.members);
  }
  
  getMembersData();

  
  const displayMembers = (members) => {
    members.forEach((member) => {
      let card = document.createElement('section');
      let name = document.createElement('h4');
	    let phone = document.createElement('p');
      let address = document.createElement('p');
      let website = document.createElement('a');
	    let level = document.createElement('p');
      let portrait = document.createElement('img');
  
      name.textContent = `${member.name}`;
      phone.textContent = `${member.phone}`;
      address.textContent = `${member.address}`;
	  website.textContent = `${member.website}`;
	  level.textContent = `${member.membershipLevel}`
	
     
      portrait.setAttribute('src', member.profilePic);
      portrait.setAttribute('alt', `Portrait of ${member.name}`); 
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '200');
  
      // Append the section(card) with the created elements
	  card.appendChild(portrait);
      card.appendChild(name); //fill in the blank
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
      card.appendChild(level);

      
  
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
  }

 
`const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#include");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}`
//weather

const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('#details');
//const forecastInfo = document.querySelector('#forecast');

const url1 = 'https://api.openweathermap.org/data/2.5/weather?lat=-26.4018&lon=31.1783&units=imperial&appid=5443c1edf2b4aa0ca3be31167228081e';
//const forecastUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-26.4018&lon=31.1783&exclude=curent,minutely&appid=5443c1edf2b4aa0ca3be31167228081e';

async function fetchWeatherApi() {
  try {
    const response = await fetch(url1);
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

async function fetchWeatherApi() {
  try {
    const response = await fetch(forecastUrl);
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
    currentTemp.textContent = `${weather.main.temp}`;
    captionDesc.textContent = `${weather.weather[0].description}`

};


fetchWeatherApi();

