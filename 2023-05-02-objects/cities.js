// 1. Sukurti masyvą, kuriame būtų 10 skirtingų miestų. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:
//  1.1. name - miesto pavadinimas (string)
//  1.2. population - miesto populiacija (number)
//  1.3. location - (object)
//    1.3.1. continent - žemynas (string)
//    1.3.2. country - šalis (string)
//  1.4. touristAttractions - lankytinos vietos (array)
//  1.5. isCapital - reikšmė nurodanti ar miestas yra sostinė (boolean)

let citiesData = [
  {
      name: 'Vilnius',
      population: 500000,
      location: {
          continent: 'Europe',
          country: 'Lietuva',
      },
      touristAttractions: ['Gedimino pilies bokstas', 'Vilniaus katedra'],
      isCapital: true,
  },
  {
      name: 'New York',
      population: 8500000,
      location: {
          continent: 'North America',
          country: 'United States',
      },
      touristAttractions: [],
      isCapital: false,
  },
  {
      name: 'Tokyo',
      population: 14000000,
      location: {
          continent: 'Asia',
          country: 'Japan',
      },
      touristAttractions: ['Sensō-ji'],
      isCapital: true,
  },
  {
      name: 'Amsterdam',
      population: 1400000,
      location: {
          continent: 'Europe',
          country: 'Netherlands',
      },
      touristAttractions: ['Van gogh museum', 'Rijksmuseum', 'Anne Frank museum'],
      isCapital: true,
  },
  {
      name: 'Monaco',
      population: 40000,
      location: {
          continent: 'Europe',
          country: 'Monaco',
      },
      touristAttractions: [],
      isCapital: true,
  },
  {
      name: 'Havana',
      population: 2400000,
      location: {
          continent: 'North America',
          country: 'Cuba',
      },
      touristAttractions: ['National Capitol of Cuba', 'Plaza de la Catedral'],
      isCapital: true,
  },
  {
      name: 'Singapore',
      population: 5600000,
      location: {
          continent: 'Asia',
          country: 'Singapore',
      },
      touristAttractions: ['Marina Bay Sands', 'Gardens by the Bay', 'Singapore Zoo'],
      isCapital: true,
  },
  {
      name: 'Melbourne',
      population: 5000000,
      location: {
          continent: 'Australia',
          country: 'Australia',
      },
      touristAttractions: ['Melbourne Skydeck'],
      isCapital: false,
  },
//   {
//       name: 'Sapporo',
//       population: 1900000,
//       location: {
//           continent: 'Asia',
//           country: 'Japan',
//       },
//       touristAttractions: ['Hokkaido Jingu'],
//       isCapital: false,
//   },
  {
      name: 'Miami',
      population: 400000,
      location: {
          continent: 'North America',
          country: 'United States',
      },
      touristAttractions: ['Miami Zoo', 'Ocean drive', 'Little Havana', 'Vizcaya Museum & Gardens'],
      isCapital: false,
  },
];

function renderCities(cities) {
  let citiesList = document.querySelector('#cities-list');

  cities.forEach(city => {
    // 1.6. Visus miestų masyvų narius išvesti į konsolę.
    // console.log(city);
    // 1.6.1. Visų miestų pavadinimis išvesti į konsolę.
    // console.log(city.name);
    // 1.6.2. Visų miestų populiaciją išvesti į konsolę.
    // console.log(city.population);
    // 1.6.3. Visų miestų žemyną išvesti į konsolę.
    // console.log(city.location.continent);
    // 1.6.4. Visų miestų šalį išvesti į konsolę.
    // console.log(city.location.country);
    // 1.6.5. Į konsolę išvesti ar miestas yra sostinė, ar ne.
    // console.log(city.isCapital);
    // 1.6.6. Į konsolę išvesti visas miesto lankytinas vietas.
    // console.log(city.touristAttractions);

    // let name = city.name;
    // let population = city.population;
    // let isCapital = city.isCapital;
    // let touristAttractions = city.touristAttractions;
    // let continent = city.location.continent;
    // let country = city.location.country;

    let {name, population, isCapital, touristAttractions} = city;
    let {continent, country} = city.location;
    
    // 4. Priklausomai nuo miesto lankytinų objektų kiekio, tekstas turi skirtis:
    //  4.1. Jeigu lankytina vieta tik viena, tai turėtų būti naudojama vienaskaita, pvz.: „Main Tourist attraction of Vilnius is".
    //  4.2. Jeigu lankytinų vietų yra daugiau, nei viena, tai tekstas turėtų būti daugiskaitoje, pvz. „Main Tourist attractions of Kaunas are".
    //  4.3. Jeigu lankytinų vietų nėra, tai tekstas neturėtų būti atvaizduojamas.
    let attractionsTitle = '';
    let attractionsSection = '';

    if (touristAttractions.length > 1) {
        attractionsTitle = `Main Tourist attractions of ${name} are:`;
    } else if (touristAttractions.length === 1) {
        attractionsTitle = `Main Tourist attraction of ${name} is:`;
    }

    if (touristAttractions.length > 0) {
        let touristAttractionElements = '';

        touristAttractions.forEach(attraction => {
          touristAttractionElements += `<li>${attraction}</li>`;
        });

        attractionsSection = `<h3>${attractionsTitle}</h3>
                              <ul>${touristAttractionElements}</ul>`;
    }

    // 3.1. Jeigu miestas yra sostinė, tai:
    //  3.1.1. Prie miesto pavadinimo pridėti žodį capital, pvz.: Vilnius (capital)

    //  3.1.2. Prie miesto aprašymo pridėti tekstą, kuris nusako jog tai šalies sostinė, pvz.: „Vilnius is the capital of Lithuania."

    //  3.1.3. Jeigu miestas yra sostinė, tai prie apgaubiančio elemento pridėti klasę „capital".

    let capitalTitle = '';
    let capitalDescription = '';
    let capitalClass = '';

    if (isCapital) {
      capitalTitle = ' (capital)';
      capitalDescription = ` ${name} is the capital of ${country}.`;
      capitalClass = ' capital';
    }

    citiesList.innerHTML += `<div class="city-item${capitalClass}">
                              <h2>${name}${capitalTitle}</h2>
                              <p>${name} city is located in ${continent}, ${country} and has population of ${population} people.${capitalDescription}</p>
                              ${attractionsSection}
                            </div>`;
  })
}

renderCities(citiesData);


// 5. Naudojant tik JavaScript:

function styleCities() {
    //  5.1. Pakeisti visų sostinių teksto spalvą.
    let cityTitles = document.querySelectorAll('.capital h2');
    
    // for (let i = 0; i < cityTitles.length; i++) {
        //     cityTitles[i].style.color = 'red';
        //     cityTitles[i].style.backgroundColor = 'black';
        //     cityTitles[i].style.padding = '20px 10px';
        // }
        
    cityTitles.forEach((titleElement) => {
        //  5.1. Pakeisti visų sostinių teksto spalvą.
        titleElement.style.color = 'green';
        // titleElement.style.backgroundColor = 'black';
        // titleElement.style.padding = '20px 10px';
    })


    //  5.2. Pakeisti kas antro miesto fono spalvą.
    // let cities = document.querySelectorAll('.city-item');

    // cities.forEach((city, index) => {
    //     if (index % 2 === 0) {
    //         city.style.backgroundColor = '#f0f0f0';
    //     }
    // })

    // for (let i = 0; i < cities.length; i++) {
    //     if (i % 2 === 0) {
    //         cities[i].style.backgroundColor = '#f0f0f0';
    //     }
    // }

    // for (let i = 0; i < cities.length; i+=2) {
    //     cities[i].style.backgroundColor = '#f0f0f0';
    // }

    let oddCities = document.querySelectorAll('.city-item:nth-child(odd)');

    // oddCities.forEach(city => {
    //     city.style.backgroundColor = '#f0f0f0';
    // })

    for (let i = 0; i < oddCities.length; i++) {
        oddCities[i].style.backgroundColor = '#f0f0f0';
    }


    //  5.3. Pakeisti visų lankytinų vietų sąrašo pirmo nario spalvą į žalią.
    let firstLiElements = document.querySelectorAll('.city-item li:first-child');

    // firstLiElements.forEach(element => {
    //     element.style.color = 'green';
    // })

    for (let i = 0; i < firstLiElements.length; i++) {
        // firstLiElements[i].style.color = 'green';
    }

    //  5.4. Pakeisti visų lankytinų vietų sąrašo paskutinių narių spalvą į raudoną, jeigu narių (lankytinų vietų) yra daugiau nei 3.
    // let lastLiElements = document.querySelectorAll('.city-item li:nth-of-type(1n + 3)');

    // lastLiElements.forEach(element => {
    //     element.style.color = 'red';
    // })

    // for (let i = 0; i < lastLiElements.length; i++) {
    //     lastLiElements[i].style.color = 'red';
    // }

    let allCities = document.querySelectorAll('.city-item');

    // allCities.forEach(city => {
    //     let singleCityLiElements = city.querySelectorAll('li');

    //     singleCityLiElements.forEach((liElement, index) => {
    //         if (index === 0) {
    //             liElement.style.color = 'green';
    //         } else if (index > 2) {
    //             liElement.style.color = 'red';
    //         } else {
    //             liElement.style.color = 'orange';
    //         }
    //     })
    // })

    for (let i = 0; i < allCities.length; i++) {
        let singleCityLiElements = allCities[i].querySelectorAll('li');

        for (let j = 0; j < singleCityLiElements.length; j++) {
            let color = 'black';

            if (j === 0) {
                color = 'green';
            } else if (j > 2) {
                color = 'red';
            } else {
                color = 'orange';
            }

            singleCityLiElements[j].style.color = color;
        }
    }

    
    // 6. Miestų plotis turi būti 50%.
    // 6.1. Jeigu miestų skaičius nėra porinis, tai paskutinio miesto plotis turi būti 100%.

    let citiesList = document.querySelector('#cities-list');
    citiesList.style.display = 'flex';
    citiesList.style.flexWrap = 'wrap';
    citiesList.style.gap = '20px';

    // allCities.forEach((city, index) => {
    //     city.style.padding = '20px';
    //     city.style.boxSizing = 'border-box';

    //     if (index === allCities.length - 1 && allCities.length % 2 !== 0) {
    //         city.style.width = '100%';
    //     } else {
    //         city.style.width = 'calc((100% - 20px) / 2)';
    //     }
    // })

    for (let i = 0; i < allCities.length; i++) {
        allCities[i].style.padding = '20px';
        allCities[i].style.boxSizing = 'border-box';

        if (i === allCities.length - 1 && allCities.length % 2 !== 0) {
            allCities[i].style.width = '100%';
        } else {
            allCities[i].style.width = 'calc((100% - 20px) / 2)';
        }
    }
}

styleCities();


















// let name = 'Kaunas';
// let population = 400000;
// let country = 'Lithuania';
// let continent = 'Europe';
// let touristAttractions = ['Pirma', 'Antra', 'Trecia'];

// let liElements = '';

// touristAttractions.forEach(attraction => {
//   liElements += `<li>${attraction}</li>`;
// });

// let citiesList = document.querySelector('#cities-list');

// citiesList.innerHTML = `
// <div class="city-item">
//   <h2>${name}</h2>
//   <p>${name} city is located in ${continent}, ${country} and has population of ${population} people.</p>
//   <h3>Main Tourist attraction of ${name} is:</h3>
//   <ul>${liElements}</ul>
// </div>`;
