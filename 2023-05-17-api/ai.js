function init() {
  const nameForm = document.querySelector('#ai-name-form');
  const nameOutput = document.querySelector('#name-output');

  nameForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nameInputValue = event.target['name-input'].value;
    nameOutput.textContent = '';

    const ageResponse = await fetch(`https://api.agify.io?name=${nameInputValue}`);
    const ageData = await ageResponse.json()

    const genderResponse = await fetch(`https://api.genderize.io?name=${nameInputValue}`);
    const genderData = await genderResponse.json();

    const nationalResponse = await fetch(`https://api.nationalize.io?name=${nameInputValue}`);
    const nationalData = await nationalResponse.json();
    const countryCode = nationalData.country[0].country_id;

    const countryResponse = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
    const countryData = await countryResponse.json();

    const age = ageData.age;
    const ageOutput = `1. ${nameInputValue} is ${age} years old.`;

    const countryName = countryData[0].name.common;
    const countryOutput = `2. ${nameInputValue} is from ${countryName}.`;
    
    const gender = genderData.gender;
    const genderOutput = `3. ${nameInputValue} is a ${gender}.`;

    nameOutput.textContent = `${ageOutput} ${countryOutput} ${genderOutput}`;
  })
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