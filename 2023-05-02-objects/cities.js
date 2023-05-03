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
      touristAttractions: ['Central park', 'Brooklyn bridge'],
      isCapital: false,
  },
  {
      name: 'Tokyo',
      population: 14000000,
      location: {
          continent: 'Asia',
          country: 'Japan',
      },
      touristAttractions: ['Sensō-ji', 'Tokyo Sky Tree'],
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
      touristAttractions: ['Oceanographic museum', "Prince's Palace of Monaco", 'Monaco Grand Prix'],
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
      touristAttractions: ['Melbourne Skydeck', 'Queen Victoria Market'],
      isCapital: false,
  },
  {
      name: 'Sapporo',
      population: 1900000,
      location: {
          continent: 'Asia',
          country: 'Japan',
      },
      touristAttractions: ['Hokkaido Jingu', 'Sapporo Beer Museum'],
      isCapital: false,
  },
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
    console.log(city);
    // 1.6.1. Visų miestų pavadinimis išvesti į konsolę.
    console.log(city.name);
    // 1.6.2. Visų miestų populiaciją išvesti į konsolę.
    console.log(city.population);
    // 1.6.3. Visų miestų žemyną išvesti į konsolę.
    console.log(city.location.continent);
    // 1.6.4. Visų miestų šalį išvesti į konsolę.
    console.log(city.location.country);
    // 1.6.5. Į konsolę išvesti ar miestas yra sostinė, ar ne.
    console.log(city.isCapital);
    // 1.6.6. Į konsolę išvesti visas miesto lankytinas vietas.
    console.log(city.touristAttractions);

    city.touristAttractions.forEach(attraction => {
      console.log(attraction);
    });


    citiesList.innerHTML += `<div class="city-item">Mietas</div>`;
  })
}

renderCities(citiesData);

