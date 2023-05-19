function init() {
  const nameForm = document.querySelector('#ai-name-form');
  const nameOutput = document.querySelector('#name-output');

  nameForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nameInputValue = event.target['name-input'].value;
    nameOutput.textContent = '';

    const ageOutput = await getAgeByName(nameInputValue);
    const countryOutput = await getCountryByName(nameInputValue);
    const genderOutput = await getGenderByName(nameInputValue);

    nameOutput.textContent = `${ageOutput} ${countryOutput} ${genderOutput}`;
  })
}

async function getCountryByName(name) {
  const nationalResponse = await fetch(`https://api.nationalize.io?name=${name}`);
  const nationalData = await nationalResponse.json();
  const countryCode = nationalData.country[0].country_id;

  const countryResponse = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
  const countryData = await countryResponse.json();

  const countryName = countryData[0].name.common;
  const output = `2. ${name} is from ${countryName}.`;
  
  return output;
}

async function getGenderByName(name) {
  const response = await fetch(`https://api.genderize.io?name=${name}`);
  const data = await response.json();

  const gender = data.gender;
  const output = `3. ${name} is a ${gender}.`;

  return output;
}

async function getAgeByName(name) {
  const response = await fetch(`https://api.agify.io?name=${name}`);
  const data = await response.json();

  const age = data.age;
  const output = `1. ${name} is ${age} years old.`;

  return output;
}

init();










function regularFetch() {
  fetch('https://api.nationalize.io?name=michael')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
}

// regularFetch();

async function asyncAwaitFetch() {
  const response = await fetch('https://api.nationalize.io?name=michael');
  const data = await response.json();

  console.log(data);
}

// asyncAwaitFetch();