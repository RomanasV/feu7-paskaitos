// Įprasta funkcija
function func1() {
  return 2 + 2;
}
console.log(func1());

// Įprasta funkcija su parametrais
function func2(num1, num2) {
  return num1 + num2;
}

console.log(func2(5, 5));

// Sukuriams kintamasis ir jam, kaip reikšmė, priskiriama anoniminė funkcija
let func3 = function(num1, num2) {
  return num1 + num2;
}

console.log(func3(5, 5));

// ARROW FUNCTIOn
// 1. Sukurti kintamąjį
// 2. Priskirti reikšmę:
// 2.1. Paprasti skliaustai ()
// 2.2. Arrow function =>
// 2.3. Riestiniai skliaustai

let arrowFunc1 = () => {
  return 3 + 3;
}
console.log(arrowFunc1());

let arrowFunc2 = (num1, num2) => {
  return num1 * num2;
}
console.log(arrowFunc2(5, 5));

let arrowFunc3 = (num) => {
  return num * num;
}
console.log(arrowFunc3(6));

// Jeigu arrow funkcija turi vieną parametrą, tai galima nerašyti paprastų skliaustų. Jeigu neturi nei vieno parametro arba jų turi daugiau nei vieną, tai paprasti skliaustai yra būtini.

let arrowFunc4 = num => {
  return num * num;
}
console.log(arrowFunc4(6));

// Jeigu funkcijos veiksmas aprašomas vienoje eilutėje (arba funkciją grąžina reikšmę), tai galima nerašyti žodelio return ir riestinių skliaustų.

let arrowFunc5 = (num1, num2) => num1 * num2;
console.log(arrowFunc5(5, 5));

let arrowFunc6 = num => num * num;
console.log(arrowFunc6(6));

let arr = [1, 2, 3];
// let filteredArr = arr.filter((num) => {
//   return num > 2;
// });

let filteredArr = arr.filter(num => num > 2);