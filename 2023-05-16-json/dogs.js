function randomImageOnInit() {
  const contentElement = document.querySelector('#content');
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(imageData => {
      const imageUrl = imageData.message;

      const dogImage = document.createElement('img');
      dogImage.src = imageUrl;

      contentElement.append(dogImage);
    })
}

// randomImageOnInit();

function init() {
  const contentElement = document.querySelector('#content');
  const dogForm = document.querySelector('#dog-form');
  const breedSelectElement = dogForm['breed-select'];
  const dogImage = document.createElement('img');
  contentElement.append(dogImage);

  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(breedsData => {
      const breeds = breedsData.message;

      // for ..in būdas
      // for (const key in breeds) {
      //   const mainBreed = key;
      //   const subBreeds = breeds[key];
        
      //   const optionElement = document.createElement('option');
      //   optionElement.textContent = mainBreed;

      //   breedSelectElement.append(optionElement);
      // }


      // Object.keys() ir Object.values() būdas
      // const breedKeys = Object.keys(breeds);
      // const breedValues = Object.values(breeds);

      // breedKeys.forEach((mainBreed, index) => {
      //   const subBreeds = breedValues[index]
        
      //   const optionElement = document.createElement('option');
      //   optionElement.textContent = mainBreed;

      //   breedSelectElement.append(optionElement);
      // })

      // Object.entries() būdas

      const breedEntries = Object.entries(breeds);

      breedEntries.forEach(breedEntry => {
        const mainBreed = breedEntry[0];
        const subBreeds = breedEntry[1];

        const optionElement = document.createElement('option');
        optionElement.textContent = mainBreed;

        breedSelectElement.append(optionElement);
      })
    })

  dogForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const breedSelect = form['breed-select'];

    const selectedBreed = breedSelect.value;
    const apiUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(imageData => {
        const imageUrl = imageData.message;
        dogImage.src = imageUrl;
      })
  })
}

init();