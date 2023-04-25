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

loop(15);