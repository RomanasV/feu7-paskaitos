console.groupCollapsed('Teorija');

// Masyvas / Array
let numsArray = [5, 100, -5, 54.45, 'labas'];
// Indeksai      0   3    4    5       6         

console.log(numsArray);
console.log(numsArray.length);

// Masyvo narių pasiekimas
// console.log(numsArray[0]);
// console.log(numsArray[1]);
// console.log(numsArray[2]);
// console.log(numsArray[3]);
// console.log(numsArray[4]);
// console.log(numsArray[5]);
// console.log(numsArray[6]);

for (let i = 0; i < numsArray.length; i++) {
  console.log(numsArray[i]);
}

let newArr = ['Vienas', 'Du', 'Du su puse', 5, true, [1, 2, 5]];

console.log(newArr);
console.log(newArr[5]);
console.log(newArr[5][0]);
console.log(newArr[5][1]);
console.log(newArr[5][2]);

let numsArr = [1, 5, 10, 15];
console.log(numsArr);
console.log(numsArr[1]);

numsArr[1] = 50;
console.log(numsArr[1]);
console.log(numsArr);

numsArr[numsArr.length] = 100;
console.log(numsArr);

console.log(typeof numsArr);



let cities = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiaulia', 'Panevėžys'];
console.log(cities);
// pop, push, shift ir unshift metodai modifikuoja (mutuoja) originalų masyvą.

// pop() metodas - pašalina paskutinį masyvo narį.
// console.log(cities.pop());
let lastCity = cities.pop();
console.log(lastCity);

cities.pop();
console.log(cities);

// shift() metodas - pašalina pirmą masyvo narį.
// console.log(cities.shift());
let firstCity = cities.shift();
console.log(firstCity);

cities.shift();
console.log(cities);

// push() metodas - prideda naują narį (narius) į masyvo pabaigą.
console.log(cities.push());
console.log(cities.push('Šiauliai'));
cities.push('Panevėžys');

cities.push('Alytus', 'Palanga');

console.log(cities);

// unshift() metodas - prideda naują narį (narius) į masyvo pradžią.
console.log(cities.unshift('Mažeikiai'));
cities.unshift('Vilnius', 'Kaunas');

console.log(cities);


let countries = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy'];
// Index              0          1         2          3         4         5
// Slice (+)    0           1         2         3         4          5        6
// Slice (-)   -6          -5        -4        -3        -2         -1        

// SLICE - nemutuoja (nemodifikuoja) originalaus masyvo
console.log('-----------SLICE-----------');
console.log(countries);

let slicedCountries1 = countries.slice();
console.log(slicedCountries1);

let slicedCountries2 = countries.slice(0);
console.log(slicedCountries2);

let slicedCountries3 = countries.slice(2);
console.log(slicedCountries3);

let slicedCountries4 = countries.slice(2, 4);
console.log(slicedCountries4);

let slicedCountries5 = countries.slice(0, 3);
console.log(slicedCountries5);

let slicedCountries6 = countries.slice(-4);
console.log(slicedCountries6);

let slicedCountries7 = countries.slice(-4, -2);
console.log(slicedCountries7);

let slicedCountries8 = countries.slice(-4, 2);
console.log(slicedCountries8);

let slicedCountries9 = countries.slice(-3, 2);
console.log(slicedCountries9);

let slicedCountries10 = countries.slice(2, -2);
console.log(slicedCountries10);

let slicedCountries11 = countries.slice(-2, -4);
console.log(slicedCountries11);

let slicedCountries12 = countries.slice(4, 2);
console.log(slicedCountries12);

console.log(countries);

let shoppingList = ['Obuoliai', 'Pienas', 'Cukrus', 'Kava', 'Popierius', 'Vanduo', 'Arbata'];
console.log(shoppingList);

// UZDUOTIS dirbant su pirkinių sąrašu (bent 7 pirkiniai):
// Kiekvienam iš punktų sukurti po atskirą kintamąjį ir jame išsaugoti reikšmę. Šią reikšmę atvaizduoti konsolėje.
// 1. Išimti pirmus du pirkinius.
let shoppingListTask1 = shoppingList.slice(0, 2);
console.log(shoppingListTask1);

// 2. Išimti tris paskutinius pirkinius.
let shoppingListTask2 = shoppingList.slice(-3);
console.log(shoppingListTask2);

// 3. Išimti ketvirtą ir penktą pirkinį.
let shoppingListTask3 = shoppingList.slice(3, 5);
console.log(shoppingListTask3);

// 4. Išimti antrą ir trečią pirkinį.
let shoppingListTask4 = shoppingList.slice(1, 3);
console.log(shoppingListTask4);

// 5. Išimti visus, išskyrus pirmą pirkinį.
let shoppingListTask5 = shoppingList.slice(1);
console.log(shoppingListTask5);

// SPLICE - modifikuoja (mutuoja) originalų masyvą
let nums = [1, 2, 3, 4, 5, 6, 7, 10];

console.log(nums);

// let splicedNums = nums.splice(2);
// let splicedNums = nums.splice(0, 1);
// let splicedNums = nums.splice(2, 1);
// let splicedNums = nums.splice(2, 3);
// let splicedNums = nums.splice(-1);
// let splicedNums = nums.splice(-3, 2);
// let splicedNums = nums.splice(-3, 2, 2);
// let splicedNums = nums.splice(-3, 2, 'Du');
// let splicedNums = nums.splice(1, 2, 'Labas');
// let splicedNums = nums.splice(2, 1, 2.5);
// let splicedNums = nums.splice(2, 0, 'Du su puse');
let splicedNums = nums.splice(2, 0, 2.5, 2.8, 2.9);

console.log(splicedNums);
console.log(nums);


// Sukurti 10-ties filmų masyvą ir iš jo:
let moviesList = ["Malholando kelias", "Meilės laukimas", "Bus kraujo", "Vaikystė", "Jausmų galia", "Gyvenimo medis", " Ji ji", "Zodiakas ", "Žmonių vaikai", "Žudymo aktas"];
console.log(moviesList);

// 1. Išimti pirmus 5 filmus.
let moviesTask1 = moviesList.slice(0, 5);
console.log(moviesTask1);

// 2. Išimti 4 paskutinius filmus.
let moviesTask2 = moviesList.slice(-4);
console.log(moviesTask2);

// 3. Išimti nuo trečio iki septinto filmo.
let moviesTask3 = moviesList.slice(2, 7);
console.log(moviesTask3);

// 4. Išimti antrą ir trečią filmą.
let moviesTask4 = moviesList.slice(1, 3);
console.log(moviesTask4);

// 5. Išimti visus, išskyrus pirmą filmą.
let moviesTask5 = moviesList.slice(1);
console.log(moviesTask5);

// 6. Išimti 5 filmus skaičiuojant nuo trečio.
let moviesTask6 = moviesList.slice(3, 8);
console.log(moviesTask6);

// 7. Išimti tris filmus nuo galo, tačiau palikti paskutinį.
let moviesTask7 = moviesList.slice(-4, -1);
console.log(moviesTask7);

// 8. Vietoje penkto filmo įrašyti du naujus filmus.
let moviesTask8 = moviesList.slice(4, 1, 'Naujas filmas');

// 9. Pašalinti pirmą filmą.
// moviesList.shift();
moviesList.splice(0, 1);

// 10. Įrašyti naują filmą į masyvo pradžią.
moviesList.unshift('Dar vienas naujas filmas');

console.log(moviesList);

// 11.1. Išimti pirmus tris filmus, skaičiuojant nuo antro filmo.
let moviesTask111 = moviesList.slice(1, 4);
console.log(moviesTask111);

// 11.2. Išimti paskutinius tris filmus, skaičiuojant nuo priešpaskutinio filmo.
let moviesTask112 = moviesList.slice(-4, -1);
console.log(moviesTask112);

// 11.3. Šiuos išimtus filmus išsaugoti naujame masyve ir padaryti, jog jo nariai būtų apsukti.
// let moviesTask113 = [moviesTask111, moviesTask112].flat().reverse();
// let moviesTask113 = [...moviesTask111, ...moviesTask112].reverse();
let moviesTask113 = moviesTask111.concat(moviesTask112).reverse();
console.log(moviesTask113);


// FILTER metodas

let originalNums = [1, 2, 3, 4, 5, 6, 7, 8, 10];
console.log(originalNums);

// let filteredNums = originalNums.filter(function(element, index, array){
//   console.log(element);
//   console.log(index);
//   console.log(array);
// });

let filteredNums = originalNums.filter(function(num){
  return num <= 5 && num % 2 === 0;
});

let filteredNums2 = originalNums.filter((num) => {
  return num <= 5 && num % 2 === 0;
});

let filteredNums3 = originalNums.filter(num => num <= 5 && num % 2 === 0);

console.log(filteredNums);
console.log(originalNums);


// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
let arr = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end'];
console.log(arr);

let filteredArr = arr.filter(item => {
  if (isNaN(item)) {
    let wordLetters = item.split('');

    let sameLetterArr = wordLetters.filter(letter => letter === 't');

    return sameLetterArr.length > 1;
  }
});

console.log(filteredArr);

let filteredArr2 = arr.filter(item => isNaN(item) && item.split('t').length > 2);

console.log(filteredArr2);

// MAP metodas
let numArr = [1, 4, 9, 16];

for (let i = 0; i < numArr.length; i++) {
  console.log('For ciklas: ' + numArr[i]);
}

numArr.map(function(num) {
  console.log('Map ciklas (paprasta funkcija): ' + num);
});

numArr.map((num) => {
  console.log('Map ciklas (arrow funkcija): ' + num);
});

numArr.map(num => console.log('Map ciklas (arrow funkcija sutrumpinta): ' + num));

numArr.map((num, index, originalArr) => {
  console.log(index);
  console.log('Map ciklas (arrow funkcija): ' + num);
  console.log(originalArr);
});

// FOREACH metodas
numArr.forEach(function(num) {
  console.log('ForEach ciklas: ' + num);
});

numArr.forEach((num) => {
  console.log('ForEach ciklas (arrow function): ' + num);
});


console.log(numArr);

// Map - grąžina reikšmę
// forEach - negrąžina reikšmės

let mapNums = numArr.map((num) => {
  return 'Atsakymas: ' + num * num;
}).reverse();

console.log(mapNums);

let forEachNums = numArr.forEach((num) => {
  return 'Atsakymas: ' + num * num;
});

console.log(forEachNums);

let animals = ['horse', 'chicken', 'cow'];

animals.map((animal) => {
  console.log(animal);
})

for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];

  console.log(animal);
}

console.groupEnd();


arr = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end'];



// 4.1. Tik skaičius (number tipo duomenis).
function task41(data) {
  // for (let i = 0; i < data.length; i++) {
  //   if (!isNaN(data[i])) {
  //     console.log(data[i]);
  //   }
  // }
  
  // data.map((item) => {
  //   if (!isNaN(item)) {
  //     console.log(item);
  //   }
  // })
  
  data.forEach((item) => {
    if (!isNaN(item)) {
      console.log(item)
    }
  })
}

// task41(arr);

// 4.2. Tik tekstą (string tipo duomenis).
function task42(data) {
  for (let i = 0; i < data.length; i++) {
    if (isNaN(data[i])) {
      console.log(data[i]);
    }
  }
  
  data.map((item) => {
    if (isNaN(item)) {
      console.log(item);
    }
  })
  
  data.forEach((item) => {
    if (isNaN(item)) {
      console.log(item)
    }
  })
}

// task42(arr);

// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
function task43(data, num) {
  for (let i = 0; i < data.length; i++) {
    if (!isNaN(data[i])) {
      // console.log(data[i]**num);
      console.log(Math.pow(data[i], num));
    }
  }
  
  data.map((item) => {
    if (!isNaN(item)) {
      console.log(item**num);
    }
  })
  
  data.forEach((item) => {
    if (!isNaN(item)) {
      console.log(item**num)
    }
  })
}

// task43(arr, 4);

// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
function task44(data, num) {
  for (let i = 0; i < data.length; i++) {
    if (!isNaN(data[i])) {
      console.log(data[i] + num);
    }
  }
  
  data.map((item) => {
    if (!isNaN(item)) {
      console.log(item + num);
    }
  })
  
  data.forEach((item) => {
    if (!isNaN(item)) {
      console.log(item + num);
    }
  })
}

// task44(arr, -55);

// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
function task45(data, num) {
  for (let i = 0; i < data.length; i++) {
    if (!isNaN(data[i])) {
      console.log(data[i] / num);
    }
  }
  
  data.map((item) => {
    if (!isNaN(item)) {
      console.log(item / num);
    }
  })
  
  data.forEach((item) => {
    if (!isNaN(item)) {
      console.log(item / num);
    }
  })
}

// task45(arr, 2);

// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
function task46(data, str) {
  for (let i = 0; i < data.length; i++) {
    if (!isNaN(data[i])) {
      console.log(str + data[i]);
    }
  }
  
  data.map((item) => {
    if (!isNaN(item)) {
      console.log(str + item);
    }
  })
  
  data.forEach((item) => {
    if (!isNaN(item)) {
      console.log(str + item);
    }
  })
}

// task46(arr, 'Number: ');


// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.

function task47(data) {
  let newArr = data.filter(item => !isNaN(item));
  for (let i = 0; i < newArr.length; i++) {
    console.log(`Index: ${i}, Number: ${newArr[i]}`);
  }
  
  newArr.map((item, index) => {
    console.log(`Index: ${index}, Number: ${item}`);
  })
  
  newArr.forEach((item, index) => {
    console.log(`Index: ${index}, Number: ${item}`);
  })
}

// task47(arr);

// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.

function task48(data) {
  for (let i = 0; i < data.length; i++) {
    if (!isNaN(data[i])) {
      console.log(i * data[i]);
    }
  }
  
  data.map((item, i) => {
    if (!isNaN(item)) {
      console.log(i * item);
    }
  })
  
  data.forEach((item, index) => {
    if (!isNaN(item)) {
      console.log(index * item);
    }
  })
}

// task48(arr);

// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.

function task49(data) {
  let numbersArr = data.filter(item => !isNaN(item));

  for (let i = 0; i < numbersArr.length; i++) {
    let currentNumber = numbersArr[i];
    let output;

    if (i > 0) {
      let prevNumber = numbersArr[i - 1];
      output = prevNumber * currentNumber;
    } else {
      output = currentNumber;
    }

    console.log(output);
  }
  
  numbersArr.map((currentNumber, index) => {
    let output;

    if (index > 0) {
      let prevNumber = numbersArr[index - 1];
      output = prevNumber * currentNumber;
    } else {
      output = currentNumber;
    }

    console.log(output);
  })
  
  numbersArr.forEach((number, index) => {
    let output;

    if (index > 0) {
      let prevNumber = numbersArr[index - 1];
      output = prevNumber * number;
    } else {
      output = number;
    }

    console.log(output);
  })
}

// task49(arr);

// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.

function task410(data) {
  for (let i = 0; i < data.length; i++) {
    if (!isNaN(data[i]) && data[i] * 5 > 350) {
      console.log(data[i]);
    }
  }
  
  data.map((item) => {
    if (!isNaN(item) && item * 5 > 350) {
      console.log(item);
    }
  })
  
  data.forEach((item) => {
    if (!isNaN(item) && item * 5 > 350) {
      console.log(item);
    }
  })
}

// task410(arr);

// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
function task411(data) {
  for (let i = 0; i < data.length; i++) {
    if (isNaN(data[i]) && typeof data[i] === 'string') {
      let word = data[i];
      let wordLength = word.length;
      let output = `${word} has ${wordLength} symbols`;
      console.log(output);
    }
  }
  
  data.map((item) => {
    if (isNaN(item) && typeof item === 'string') {
      console.log(`${item} has ${item.length} symbols`);
    }
  })
  
  data.forEach((item) => {
    if (isNaN(item) && typeof item === 'string') {
      console.log(`${item} has ${item.length} symbols`);
    }
  })
}

// task411(arr);

// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".

function task412(data, symbol = '-') {
  for (let i = 0; i < data.length; i++) {
    if (isNaN(data[i]) && typeof data[i] === 'string') {
      let word = data[i];
      let output = word.split('').join(symbol).toUpperCase();
      console.log(output);
    }
  }
  
  data.map((item) => {
    if (isNaN(item) && typeof item === 'string') {
      let output = item.split('').join(symbol).toUpperCase();
      console.log(output);
    }
  })
  
  data.forEach((item) => {
    if (isNaN(item) && typeof item === 'string') {
      let output = item.split('').join(symbol).toUpperCase();
      console.log(output);
    }
  })
}

// task412(arr);

// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
function task413(data) {
  for (let i = 0; i < data.length; i++) {
    if (isNaN(data[i]) && typeof data[i] === 'string') {
      let word = data[i];
      let wordLetters = word.split('');
      wordLetters[0] = '_';
      wordLetters[2] = '_';

      let convertedStr = wordLetters.join('');
      console.log(convertedStr);
    }
  }
  
  data.map((item) => {
    if (isNaN(item) && typeof item === 'string') {
      let wordLetters = item.split('');
      wordLetters[0] = '_';
      wordLetters[2] = '_';

      let convertedStr = wordLetters.join('');
      console.log(convertedStr);
    }
  })
  
  data.forEach((item) => {
    if (isNaN(item) && typeof item === 'string') {
      let wordLetters = item.split('');
      wordLetters[0] = '_';
      wordLetters[2] = '_';

      let convertedStr = wordLetters.join('');
      console.log(convertedStr);
    }
  })
}

// task413(arr);

// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
function task414(data) {
  for (let i = 0; i < data.length; i++) {
    if (isNaN(data[i]) && typeof data[i] === 'string') {
      let word = data[i];
      // let output = word.split('').reverse().join('');
      // console.log(output);

      let reversedStr = '';
      for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        reversedStr = letter + reversedStr;
      }
      console.log(reversedStr);
    }
  }
  
  data.map((item) => {
    if (isNaN(item) && typeof item === 'string') {
      let output = item.split('').reverse().join('');
      console.log(output);
    }
  })
  
  data.forEach((item) => {
    if (isNaN(item) && typeof item === 'string') {
      let output = item.split('').reverse().join('');
      console.log(output);
    }
  })
}

// task414(arr);

// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".

function task415(data) {
  for (let i = 0; i < data.length; i++) {
    if (isNaN(data[i]) && typeof data[i] === 'string') {
      let word = data[i];
      let previousItem = data[i - 1];
      let nextItem = data[i + 1];

      let output;

      if (i === 0) {
        output = `Word ${word} is the first in the array and the next item is ${nextItem}.`
      } else if (i < data.length - 1) {
        output = `Word ${word} is between ${previousItem} and ${nextItem} in the array`
      } else {
        output = `Word ${word} is the last in the array and the previous item is ${previousItem}.`
      }

      console.log(output);
    }
  }
  
  data.map((item, i) => {
    if (isNaN(item) && typeof item === 'string') {
      let previousItem = data[i - 1];
      let nextItem = data[i + 1];

      let output;

      if (i === 0) {
        output = `Word ${item} is the first in the array and the next item is ${nextItem}.`
      } else if (i < data.length - 1) {
        output = `Word ${item} is between ${previousItem} and ${nextItem} in the array`
      } else {
        output = `Word ${item} is the last in the array and the previous item is ${previousItem}.`
      }

      console.log(output);
    }
  })
  
  data.forEach((item, index) => {
    if (isNaN(item) && typeof item === 'string') {
      let previousItem = data[index - 1];
      let nextItem = data[index + 1];

      let output;

      if (index === 0) {
        output = `Word ${item} is the first in the array and the next item is ${nextItem}.`
      } else if (index < data.length - 1) {
        output = `Word ${item} is between ${previousItem} and ${nextItem} in the array`
      } else {
        output = `Word ${item} is the last in the array and the previous item is ${previousItem}.`
      }

      console.log(output);
    }
  })
}

// task415(arr);






console.log(arr);