console.groupCollapsed();

const obj = {
  name: 'John',
  age: 28,
  nextAge: 28 + 1,
  children: ['Child 1', 'Child 2'],
  address: {
    street: 'Vilniaus st.',
    city: 'Vilnius',
    country: 'Lithuania',
  },
  married: true,
  getAddress() {
    return `Address is: ${this.address.street} ${this.address.city} ${this.address.country}.`
  },
  test: undefined,
  test2: null,
}

console.log(obj.name);
console.log(obj['age']);
console.log(obj.children[0]);
console.log(obj.address.city);
console.log(obj.getAddress());

// Įprastinis objektas
console.log(obj);

// Objektas paverčiamas į JSON objektą
const json = JSON.stringify(obj);
console.log(json);

// json to obj
const convertedJson = JSON.parse(json);
console.log(convertedJson);

// fetch('obj.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })

// fetch('obj.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     console.log(data.name);
//     console.log(data.age);
//   })

console.groupEnd();

function renderMovies() {
  fetch('movies.json')
    .then(response => response.json())
    .then(movies => {
      const moviesList = document.getElementById('movies-list');
      
      movies.map(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');

        const movieTitle = document.createElement('h2');
        movieTitle.textContent = `${movie.movieName} (${movie.releaseDate})`;

        const movieRanking = document.createElement('span');
        movieRanking.textContent = `Average: ${movie.ratings.rate} / Total: ${movie.ratings.rated}`;

        const genresList = document.createElement('ul');

        movie.genres.map(genre => {
          const genreItem = document.createElement('li');
          genreItem.textContent = genre;
          genresList.append(genreItem);
        })

        const movieDescription = document.createElement('p');
        movieDescription.textContent = movie.aboutMovie;

        const producersWrapper = document.createElement('div');
        producersWrapper.classList.add('producers-wrapper');

        const producersTitle = document.createElement('h3');
        producersTitle.textContent = 'Producers:';

        const producersList = document.createElement('ul');

        movie.producers.map(producer => {
          const producerItem = document.createElement('li');
          producerItem.textContent = producer;
          producersList.append(producerItem);
        })

        producersWrapper.append(producersTitle, producersList);

        const actorsWrapper = document.createElement('div');
        actorsWrapper.classList.add('actors-wrapper');

        const actorsTitle = document.createElement('h3');
        actorsTitle.textContent = 'Actors:';

        const actorsList = document.createElement('ul');

        movie.actors.map(actor => {
          const actorItem = document.createElement('li');
          actorItem.textContent = actor;
          actorsList.append(actorItem);
        })

        actorsWrapper.append(actorsTitle, actorsList);

        movieItem.append(movieTitle, movieRanking, genresList, movieDescription, producersWrapper, actorsWrapper);
        moviesList.append(movieItem);
      })
    })
}

// renderMovies();


function renderMovies2() {
  fetch('movies-list.json')
    .then(response => response.json())
    .then(movieIds => {
      const moviesList = document.getElementById('movies-list');

      movieIds.map(movieId => {
        fetch(`movie-${movieId}.json`)
          .then(response => response.json())
          .then(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');

            const movieTitle = document.createElement('h2');
            movieTitle.textContent = `${movie.movieName} (${movie.releaseDate})`;

            const movieRanking = document.createElement('span');
            movieRanking.textContent = `Average: ${movie.ratings.rate} / Total: ${movie.ratings.rated}`;

            const genresList = document.createElement('ul');

            movie.genres.map(genre => {
              const genreItem = document.createElement('li');
              genreItem.textContent = genre;
              genresList.append(genreItem);
            })

            const movieDescription = document.createElement('p');
            movieDescription.textContent = movie.aboutMovie;

            const producersWrapper = document.createElement('div');
            producersWrapper.classList.add('producers-wrapper');

            const producersTitle = document.createElement('h3');
            producersTitle.textContent = 'Producers:';

            const producersList = document.createElement('ul');

            movie.producers.map(producer => {
              const producerItem = document.createElement('li');
              producerItem.textContent = producer;
              producersList.append(producerItem);
            })

            producersWrapper.append(producersTitle, producersList);

            const actorsWrapper = document.createElement('div');
            actorsWrapper.classList.add('actors-wrapper');

            const actorsTitle = document.createElement('h3');
            actorsTitle.textContent = 'Actors:';

            const actorsList = document.createElement('ul');

            movie.actors.map(actor => {
              const actorItem = document.createElement('li');
              actorItem.textContent = actor;
              actorsList.append(actorItem);
            })

            actorsWrapper.append(actorsTitle, actorsList);

            movieItem.append(movieTitle, movieRanking, genresList, movieDescription, producersWrapper, actorsWrapper);
            moviesList.append(movieItem);
          })
      })
    })
}

renderMovies2();