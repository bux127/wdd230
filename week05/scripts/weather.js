
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.78&lon=6.59&units=imperial&appid=fc8d1b420fc07c171a0593af05bbeb2b';

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
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description;
   
    weatherIcon.setAttribute('alt', `${data.weather[0].icon}`);
    captionDesc.textContent = `${desc}`
};

apiFetch();
