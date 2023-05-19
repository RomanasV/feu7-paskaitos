function init() {
  const nameForm = document.querySelector('#ai-name-form');
  const nameOutput = document.querySelector('#name-output');

  console.log(nameOutput)

  nameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInputValue = event.target['name-input'].value;

    let ageText = '';
    let nationalizeText = '';
    let genderText = '';

    fetch(`https://api.agify.io?name=${nameInputValue}`)
      .then(response => response.json())
      .then(data => {
        const age = data.age;
        const output = `1. ${nameInputValue} is ${age} years old.`;
        ageText = output;

        fetch(`https://api.nationalize.io?name=${nameInputValue}`)
          .then(response => response.json())
          .then(data => {
            const countryCode = data.country[0].country_id;
            
            fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
              .then(res => res.json())
              .then(countryData => {
                const countryName = countryData[0].name.common;

                const output = `2. ${nameInputValue} is from ${countryName}.`;
                nationalizeText = output;

                fetch(`https://api.genderize.io?name=${nameInputValue}`)
                  .then(res => res.json())
                  .then(data => {
                    const gender = data.gender;
                    const output = `3. ${nameInputValue} is a ${gender}.`;
                    genderText = output;

                    nameOutput.textContent = `${ageText} ${nationalizeText} ${genderText}`;
                  })
              })
          }) 
      })

    

    
      
  })
}

init();