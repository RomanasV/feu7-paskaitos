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

listMovies(moviesArr);

// 12.2. Sukurti dar 2 naujus masyvus, kuriuose būtų po keletą filmų ir:
let moviesArr2 = ["Vaikystė", "Jausmų galia", "Gyvenimo medis"];
let moviesArr3 = ["Ji ji", "Zodiakas ", "Žmonių vaikai", "Žudymo aktas"];

// 12.3. Išvesti visuose 3 masyvuose esančius filmus į ekraną kaip vieną sąrašą.

function listAllMovies(arr1, arr2, arr3) {
  console.log(arr1);
  console.log(arr2);
  console.log(arr3);

  console.log([arr1, arr2, arr3]);

  console.log([...arr1, ...arr2, ...arr3]);
  console.log(arr1.concat(arr2, arr3));
  console.log([arr1, arr2, arr3].flat());
}

listAllMovies(moviesArr, moviesArr2, moviesArr3);