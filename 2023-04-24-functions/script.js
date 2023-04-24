// UŽDUOTIS:
// Į konsole išvesti apskaičiuotus keturkampio perimetrus pagal šias kraštines:
// 1. 10 ilgis ir 10 plotis.
// 2. 10 ilgis ir 25 plotis.
// 3. 10 ilgis ir 30 plotis.
// 4. 10 ilgis ir 35 plotis.
// 5. 10 ilgis ir 40 plotis.
// 6. 10 ilgis ir 45 plotis.
// 7. 10 ilgis ir 50 plotis.
// 8. 10 ilgis ir 55 plotis.
// 9. 10 ilgis ir 60 plotis.
// 10. 10 ilgis ir 120 plotis.

// console.log(10 * 2 + 10 * 2);
// console.log('Perimetras: ' + (10 + 10) * 2 + ' cm.');
// console.log('Perimetras: ' + (10 + 25) * 2 + ' cm.');
// console.log('Perimetras: ' + (10 + 30) * 2 + ' cm.');
// console.log('Perimetras: ' + (10 + 35) * 2 + ' cm.');
// console.log('Perimetras: ' + (10 + 40) * 2 + ' cm.');
// console.log('Perimetras: ' + (10 + 45) * 2 + ' cm.');
// console.log('Perimetras: ' + (10 + 50) * 2 + ' cm.');
// console.log('Perimetras: ' + (10 + 55) * 2 + ' cm.');
// console.log('Perimetras: ' + (10 + 60) * 2 + ' cm.');
// console.log('Perimetras: ' + (10 + 120) * 2 + ' cm.');

// DRY - Don't Repeat Yourself

// FUNKCIJOS
// Funkcijos sukūrimas:
// 1. Iniciavimo žodelis (function)
// 2. Pavadinimas
// 3. Paprasti skliaustai () - funkcijos argumentams.
// 4. Riestiniai skliaustai {} - funkcijos apibrėžimas

function hello() {
  return 'Hello, Steve.';
}

// Funkcijos iškvietimas
// 1. Funkcijos pavadinimas
// 2. Paprasti skliaustai ()

console.log(hello());
document.querySelector('h2').textContent = hello();

function helloWithName(personName, personSurname) {
  return `- Hello, ${personName} ${personSurname}!!!`;
}

console.log(helloWithName('John', 'Doe'));

let helloSteve = helloWithName('Steve', 'Steve');
console.log(helloSteve);
// helloWithName('Peter', 'Peter');

function perimeter(width, height, units = 'vnt') {
  // let unitsText = 'vnt';
  // if (units) {
  //   unitsText = units;
  // }

  // let unitsText = units ? units : 'vnt';

  if (width && height) {
    let answer = (width + height) * 2;
    let output = `Perimetras: ${answer} ${units}.`
    return output;
  } else {
    return 'Įvesti neteisingi duomenys';
  }
}

console.log(perimeter(10, 50, 'cm'));
console.log(perimeter(10));
console.log(perimeter(10, 100, 'm'));
// perimeter(100, 100, 'km');

// Užduotis 1:
// 1. Sukurti funkciją, kuri skaičiuotų stačiakampio plotą.
// 2. Funkcija turi priimti du argumentus (ilgį ir plotį).
// 3. Funkcija turi grąžinti tekstą: „Stačiakampio plotas yra 10 kv. vnt."
// 4. Į konsolę išvesti šios funkcijos rezultatą.

function rectArea(width = 0, height = 0, units = 'vnt') {
  let answer = width * height;
  let output = `Stačiakampio plotas yra ${answer} kv. ${units}.`;
  console.log(output);
}

// rectArea(10, 15, 'cm');
// rectArea(100, 14, 'm');
// rectArea(100, 14);
// rectArea(100);

// Užduotis 2:
// Atlikti tą patį kaip ir pirmoje užduotyje, tačiau apskaičiuoti stačiojo trikampio plotą.

function triangleArea(width = 0, height = 0, units = 'vnt') {
  let answer = width * height / 2;
  let output = `Stačiojo trikampio plotas yra ${answer} kv. ${units}.`;
  console.log(output);
}

// triangleArea(10, 15, 'cm');
// triangleArea(100, 14, 'm');
// triangleArea(100, 14);
// triangleArea(100);

// Užduotis 3:
// Sukurti naują funkciją, kuri apjungtų šias dvi užduotis ir išvestų abu rezultatus.

function allData(width, height, units) {
  rectArea(width, height, units);
  triangleArea(width, height, units);
}

// allData(10, 15, 'cm');
// allData(25, 46);
// allData(25);