let moviesArr = ["Malholando kelias", "Meilės laukimas", "Bus kraujo"];

// 12.1. Filmų sąrašą išvesti į ekraną (ul - li elementuose). Prie filmo pavadinimo pridėti filmo eilės numerį.

function listMovies(movies) {
  let ulElement = document.querySelector('#movies-1');

  // movies.map((movie, index) => {
  //   let movieElement = `<li>${index + 1}. ${movie}</li>`;
  //   ulElement.innerHTML += movieElement;
  // })

  for (let i = 0; i < movies.length; i++) {
    let movieElement = `<li>${i + 1}. ${movies[i]}</li>`;
    ulElement.innerHTML += movieElement;
  }
}

// listMovies(moviesArr);

// 12.2. Sukurti dar 2 naujus masyvus, kuriuose būtų po keletą filmų ir:
let moviesArr2 = ["Vaikystė", "Jausmų galia", "Gyvenimo medis"];
let moviesArr3 = ["Ji ji", "Zodiakas ", "Žmonių vaikai", "Žudymo aktas"];

// 12.3. Išvesti visuose 3 masyvuose esančius filmus į ekraną kaip vieną sąrašą.

function listAllMovies(movies) {
  let ulElement = document.querySelector('#movies-1');
  let count = 1;

  // movies1.map((movie) => {
  //   let movieElement = `<li>${count}. ${movie}</li>`;
  //   ulElement.innerHTML += movieElement;
  //   count++;
  // })

  // movies2.map((movie) => {
  //   let movieElement = `<li>${count}. ${movie}</li>`;
  //   ulElement.innerHTML += movieElement;
  //   count++;
  // })

  // movies3.map((movie) => {
  //   let movieElement = `<li>${count}. ${movie}</li>`;
  //   ulElement.innerHTML += movieElement;
  //   count++;
  // })

  // movies.map((innerMovies) => {
  //   innerMovies.map((movie) => {
  //     let movieElement = `<li>${count}. ${movie}</li>`;
  //     ulElement.innerHTML += movieElement;
  //     count++;
  //   });
  // })

  // console.log(movies);
  // console.log(movies[0]);
  // console.log(movies[0][0]);
  // console.log(movies[0][1]);
  // console.log(movies[0][2]);

  // console.log(movies[1]);
  // console.log(movies[1][0]);
  // console.log(movies[1][1]);
  // console.log(movies[1][2]);

  // console.log(movies[2]);
  // console.log(movies[2][0]);
  // console.log(movies[2][1]);
  // console.log(movies[2][2]);
  // console.log(movies[2][3]);


  // for (let i = 0; i < movies.length; i++) {
  //   console.log(movies[i]);

  //   for (let j = 0; j < movies[i].length; j++) {
  //     let movieElement = `<li>${count}. ${movies[i][j]}</li>`;
  //     ulElement.innerHTML += movieElement;
  //     count++;
  //   }
  // }
  
  for (let i = 0; i < movies.length; i++) {
    let innerMovies = movies[i];

    for (let j = 0; j < innerMovies.length; j++) {
      let movieElement = `<li>${count}. ${innerMovies[j]}</li>`;
      ulElement.innerHTML += movieElement;
      count++;
    }
  }
}

let allMoviesArr = [moviesArr, moviesArr2, moviesArr3];

listAllMovies(allMoviesArr);