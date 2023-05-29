// console.log('- ' + 1 + '!');
// console.log('- ' + 2 + '!');
// console.log('- ' + 3 + '!');
// console.log('- ' + 4 + '!');
// console.log('- ' + 5 + '!');
// console.log('- ' + 6 + '!');
// console.log('- ' + 7 + '!');
// console.log('- ' + 8 + '!');
// console.log('- ' + 9 + '!');
// console.log('- ' + 10 + '!');
// console.log('- ' + 11 + '!');
// console.log('- ' + 12 + '!');
// console.log('- ' + 13 + '!');
// console.log('- ' + 14 + '!');
// console.log('- ' + 15 + '!');
// console.log('- ' + 16 + '!');
// console.log('- ' + 17 + '!');
// console.log('- ' + 18 + '!');
// console.log('- ' + 19 + '!');
// console.log('- ' + 20 + '!');

function count(num) {
  console.log('-' + num + ' !!!');
}

// count(1);
// count(2);
// count(3);
// count(4);
// count(5);

// FOR CIKLA (LOOP)
// 1. Iniciavimo žodelis - for
// 2. Paprasti skliaustai - ()
// 2.1. Sukuriamas kintamasis (dažniausiai jo pavadinimas yra i)
// 2.2. Sąlyga
// 2.3. Kintamojo vertės keitimas
// 3. Riestiniai skliaustai - {}

/* 
  for (kintamasis; sąlyga; kintamojo keitimas) {

  }
*/

// for (let i = 1; i <= 10; i++) {
//   console.log('-' + i + ' !!!');
// }

// for (let i = 0; i < 10; i++) {
//   count(i);
// }

function loop(cycles) {
  for (let i = 0; i < cycles; i++) {
    count(i);
  }
}

// loop(15);

// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
// 1. Padaugina skaičių iš 2.

function task1(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i += nth) {
    let answer = i * 2;
    let output = `${i} * 2 = ${answer}`;
    console.log(output);
  }
}

// task1();

function task1while(start = 1, end = 100, nth = 1) {
  let i = start;

  while (i <= end) {
    let answer = i * 2;
    let output = `${i} * 2 = ${answer}`;
    console.log(output);
    i += nth
  }
}

// task1while();

function task11(start = 100, end = 1, nth = 1) {
  for (let i = start; i >= end; i -= nth) {
    let answer = i * 2;
    let output = `${i} * 2 = ${answer}`;
    console.log(output);
  }
}

// task11();

function task11while(start = 100, end = 1, nth = 1) {
  let i = start;

  while (i >= end) {
    let answer = i * 2;
    let output = `${i} * 2 = ${answer}`;
    console.log(output);

    i -= nth;
  }
}

task11while();

// 2. Padaugina skaičių iš 5.
function task2(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i += nth) {
    let answer = i * 5;
    let output = `${i} * 5 = ${answer}`;
    console.log(output);
  }
}

// task2();

function task21(start = 100, end = 1, nth = 1) {
  for (let i = start; i >= end; i -= nth) {
    let answer = i * 5;
    let output = `${i} * 5 = ${answer}`;
    console.log(output);
  }
}

// task21();

// 3. Prideda prie skaičiaus 5.
function task3(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i += nth) {
    let answer = i + 5;
    let output = `${i} + 5 = ${answer}`;
    console.log(output);
  }
}

// task3();

// 4. Atima iš skaičiaus 2.
function task4(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i += nth) {
    let answer = i - 2;
    let output = `${i} - 2 = ${answer}`;
    console.log(output);
  }
}

// task4();

// 5. Pakelia skaičių kvadratu.
function task5(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i += nth) {
    let answer = i * i;
    let output = `${i} * ${i} = ${answer}`;
    console.log(output);
  }
}

// task5();

// 6. Pakelia skaičių kūbu.
function task6(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i += nth) {
    // let answer = Math.pow(i, 3);
    let answer = i**3;
    let output = `${i} ** 3 = ${answer}`;
    console.log(output);
  }
}

// task6()

// 7. Sukurti analogiškas funkcijas pirmoms užduotims, tačiau padaryti, jog ciklai skaičiuotųsi nuo 100 iki 1.

// 8. Kiekvienos užduoties išvesties tekstą suformuluoti, jog būtų parašytas užduoties sprendimas, pvz.: 
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ir t.t.

// 9. Papildyti funkcijas, jog jos priimtu šiuos argumentus:
// 9.1. Nusakytų nuo kokio skaičiaus prasidės ciklas.
// 9.2. Nusakytų iki kokio skaičiaus veiks ciklas.
// 9.3. Nusakytų kelinto ciklo metu turi išvesti atsakymą į konsolę.


// WHILE / do... while

for (let i = 0; i < 0; i++) {
  console.log('For ciklas: ' + i);
}

let n = 0;

while (n < 0) {
  console.log('while ciklas: ' + n);
  n++;
}

let m = 0;
do {
  console.log('do..while ciklas: ' + m);
  m++;
} while (m < 0);
