localStorage.setItem('test', 'labas');
console.log(localStorage.getItem('test'));

localStorage.removeItem('test');
console.log(localStorage.getItem('test'));

const input = document.querySelector('#test');
input.value = localStorage.getItem('input-field');

input.addEventListener('input', (event) => {
  localStorage.setItem('input-field', event.target.value);
})

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // localStorage.setItem('input-field', '');
  localStorage.removeItem('input-field');
})

localStorage.setItem('vienas', 'vienas');
localStorage.setItem('du', 'vienas');
localStorage.setItem('trys', 'vienas');
localStorage.clear();

let personAge = 25;
console.log(personAge, typeof personAge);
localStorage.setItem('age', personAge);

// Gaunama reikšmė yra string tipo
let personAgeLocalStorage = localStorage.getItem('age');
console.log(personAgeLocalStorage, typeof personAgeLocalStorage);

let person = {
  age: 30,
  name: 'John',
}

console.log(person, typeof person);

let personObjStr = JSON.stringify(person);
localStorage.setItem('person-obj', personObjStr);

let personLocalStr = localStorage.getItem('person-obj');
console.log(personLocalStr, typeof personLocalStr);

let personLocalObj = JSON.parse(personLocalStr);
console.log(personLocalObj, typeof personLocalObj);
console.log(personLocalObj.age);
console.log(personLocalObj.name);

let arr = [1, 2, 'labas', [5, 10, '15'], true, { test: 'labas' }];
console.log(arr);

localStorage.setItem('new-arr', JSON.stringify(arr));

let arrLocalStr = localStorage.getItem('new-arr');
console.log(arrLocalStr);

let arrLocal = JSON.parse(arrLocalStr);
console.log(arrLocal);