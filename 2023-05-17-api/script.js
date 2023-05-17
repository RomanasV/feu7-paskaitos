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