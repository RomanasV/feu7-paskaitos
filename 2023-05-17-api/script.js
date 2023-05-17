const randomJokeButton = document.querySelector('#random-joke-button');
const jokeParagraph = document.querySelector('#joke-paragraph');

// fetch('https://api.chucknorris.io/jokes/random')
//   .then(response => response.json())
//   .then(jokeData => {
//     jokeParagraph.textContent = jokeData.value;
//   })

randomJokeButton.addEventListener('click', () => {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(jokeData => {
      jokeParagraph.textContent = jokeData.value;
    })
})


fetch('https://api.chucknorris.io/jokes/categories')
  .then(response => response.json())
  .then(categories => {
    const categorySelectElement = document.querySelector('#category-select');

    categories.forEach(category => {
      const categoryOptionElement = document.createElement('option');
      categoryOptionElement.textContent = category;
      categorySelectElement.append(categoryOptionElement);
    });
  })