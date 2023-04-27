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

console.log(filteredNums);
console.log(originalNums);
