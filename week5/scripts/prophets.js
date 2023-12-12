const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); 
    displayProphets(data.prophets);
  }
  
  getProphetData();

  
  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      let card = document.createElement('section');
      let fullName = document.createElement('h4');
      let bday = document.createElement('p');
      let bplace = document.createElement('p');
      let portrait = document.createElement('img');
  
      fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
      bday.textContent = `Date of Birth: ${prophet.birthdate}`;
      bplace.textContent = `Place of Birth: ${prophet.birthplace}`
     
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(fullName); //fill in the blank
      card.appendChild(bday);
      card.appendChild(bplace);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
  }