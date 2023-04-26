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