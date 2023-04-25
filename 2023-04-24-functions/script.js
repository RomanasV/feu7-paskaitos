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
  return output;
}

console.log(rectArea(10, 15, 'cm'));
// rectArea(100, 14, 'm');
// rectArea(100, 14);
// rectArea(100);

// Užduotis 2:
// Atlikti tą patį kaip ir pirmoje užduotyje, tačiau apskaičiuoti stačiojo trikampio plotą.

function triangleArea(width = 0, height = 0, units = 'vnt') {
  let answer = width * height / 2;
  let output = `Stačiojo trikampio plotas yra ${answer} kv. ${units}.`;
  return output;
}

// triangleArea(10, 15, 'cm');
// triangleArea(100, 14, 'm');
// triangleArea(100, 14);
// triangleArea(100);

// Užduotis 3:
// Sukurti naują funkciją, kuri apjungtų šias dvi užduotis ir išvestų abu rezultatus.

function allData(width, height, units) {
  // let rectAreaText = rectArea(width, height, units);
  // let triangleAreaText = triangleArea(width, height, units);
  // return rectAreaText + ' ' + triangleAreaText;

  return rectArea(width, height, units) + ' ' + triangleArea(width, height, units);
}

console.log(allData(10, 15, 'cm'));
// allData(25, 46);
// allData(25);



// Sukurti:
// 1. Funkciją, kuri paverčia žmogaus metus į šuns metus:
// 1.1. Funkcija priima vieną parametrą: žmogaus amžius.
// 1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.

function humanToDogYears(humanAge) {
  // if (humanAge && !isNaN(humanAge)) {
  //   let dogAge = humanAge * 7;
  //   return `${humanAge} žmogaus metai yra ${dogAge} šuns metai.`;
  // } else {
  //   return 'Wrong data...';
  // }


  // if (humanAge && !isNaN(humanAge)) {
  //   let dogAge = humanAge * 7;
  //   return `${humanAge} žmogaus metai yra ${dogAge} šuns metai.`;
  // }

  // return 'Wrong data...';

  if (!humanAge || isNaN(humanAge)) {
    return 'Wrong data...';
  }
    
  let dogAge = humanAge * 7;
  return `${humanAge} žmogaus metai yra ${dogAge} šuns metai.`;
}

console.log(humanToDogYears(50));
console.log(humanToDogYears(35));
console.log(humanToDogYears(28));
console.log(humanToDogYears('asads'));

// 2. Funkciją, kuri skaičiuoja per kiek laiko reikia perskaityti knygą, kad pasiekti užsibrėžtą knygų per metaus skaičių:
// 2.1. Funkcija priima vieną parametrą: norimų per metus perskaityti knygų skaičių.
// 2.1. Funkcija grąžina atsakymą tokiu formatu: norint perskaityti 10 knygų per metus, vienai knygai perskaityti turėsi 36 dienas.

function bookDays(booksPerYear) {
  if (!booksPerYear || isNaN(booksPerYear)) {
    return 'Įvesti duomenys yra netinkami...';
  }

  let daysPerBook = Math.round(365 / booksPerYear);
  return `Norint perskaityti ${booksPerYear} knygų per metus, vienai knygai perskaityti turėsi ${daysPerBook} dienas`;
}

console.log(bookDays(15));

// 3. Funkciją, kuri konvertuoja dienas į savaites:
// 3.1. Funkcija priima vieną argumentą: dienų skaičių.
// 3.2. Funkcija grąžina atsakymą tokiu formatu: 35 dienos yra 5 savaitės.

function daysToWeeks(days) {
  let weeks = (days / 7).toFixed(1);
  return `${days} dienos yra ${weeks} savaitės.`;
}

console.log(daysToWeeks(18));

// 4. Funkciją, kuri konvertuoja dienas į metus:
// 4.1. Funkcija priima vieną argumentą: dienų skaičių.
// 4.1. Funkcija grąžina atsakymą tokiu formatu (atsakymą apvalinant): 365 dienos yra 1 metai.

function daysToYears(days) {
  let years = (days / 365).toFixed(1);
  return `${days} dienos yra ${years} metai.`;
}

console.log(daysToYears(1000));

// 5. Funkciją, kuri konvertuoja metus į valandas:
// 5.1. Funkcija priima vieną argumentą: metų skaičių.
// 5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.

function yearsToHours(years) {
  let hours = years * 365 * 24;
  return `${years} metai turi ${hours} valandas.`
}

console.log(yearsToHours(3));

// 6. Funkciją, kuri konvertuoja mėnesius į valandas:
// 6.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.

function monthsToHours(months) {
  let hours = months * 30 * 24;
  return `${months} mėnesiai turi ${hours} valandas.`
}

console.log(monthsToHours(13));

// 7. Funkciją, kuri konvertuoja mėnesius į minutes:
// 7.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.

function monthsToMinutes(months) {
  let minutes = months * 30 * 24 * 60;
  return `${months} mėnesiai turi ${minutes} minutes.`;
}

console.log(monthsToMinutes(10));


// 8. Funkciją, kuri konvertuoja dienas į pasirinktą formatą (minutes, valandas, savaites, mėnesius arba metus):
// 8.1. Funkcija priima du argumentus: 
//   8.1.1. Dienų skaičių.
//   8.1.2. Formatą. Galimos formato reikšmės yra:
//     8.1.2.1. minutes
//     8.1.2.2. hours
//     8.1.2.3. weeks
//     8.1.2.4. months
//     8.1.2.5. years
// 8.2. Funkcija konvertuoja dienas į pasirinktą formatą ir grąžina atsakymą tokiu formatu: 5 days - 7200 minutes.

function convertDays(days, format) {
  // if (format === 'minutes') {
  //   let minutes = days * 24 * 60;
  //   return `${days} days - ${minutes} minutes.`;
  // } else if (format === 'hours') {
  //   let hours = days * 24;
  //   return `${days} days - ${hours} hours.`;
  // } else if (format === 'weeks') {
  //   let weeks = (days / 7).toFixed(1);
  //   return `${days} days - ${weeks} weeks.`;
  // } else if (format === 'months') {
  //   let months = (days / 30).toFixed(1);
  //   return `${days} days - ${months} months.`;
  // } else if (format === 'years') {
  //   let years = (days / 365).toFixed(2);
  //   return `${days} days - ${years} years.`;
  // } else {
  //   return 'Wrong format...';
  // }
  
  if (format === 'minutes') {
    let minutes = days * 24 * 60;
    return `${days} days - ${minutes} minutes.`;
  } 
  
  if (format === 'hours') {
    let hours = days * 24;
    return `${days} days - ${hours} hours.`;
  }
  
  if (format === 'weeks') {
    let weeks = (days / 7).toFixed(1);
    return `${days} days - ${weeks} weeks.`;
  }
  
  if (format === 'months') {
    let months = (days / 30).toFixed(1);
    return `${days} days - ${months} months.`;
  } 
  
  if (format === 'years') {
    let years = (days / 365).toFixed(2);
    return `${days} days - ${years} years.`;
  } 
    
  return 'Wrong format...';
}

console.log(convertDays(5, 'weeks'));


// 9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
// 9.1. Funkcija priima du argumentus: 
//   9.1.1. Skaičių, kuris bus dalinamas (dalinys).
//   9.1.2. Skaičių, iš kurio bus dalinama (daliklis).
// 9.2. Funkcija grąžina atsakymą tokiu formatu:
//   9.2.1. Jeigu dalinasi: 10 dalinasi iš 5.
//   9.2.2. Skaičius 11 nesidalina iš 5. Liekana yra 1.

function numberCheker(num1, num2) {
  let answer = num1 % num2;

  // if (answer === 0) {
  //   return `${num1} dalinasi iš ${num2}`;
  // } else {
  //   return `Skaičius ${num1} nesidalina iš ${num2}. Liekana yra ${answer}.`
  // }

  if (answer === 0) {
    return `${num1} dalinasi iš ${num2}`;
  } 
  
  return `Skaičius ${num1} nesidalina iš ${num2}. Liekana yra ${answer}.`
}

console.log(numberCheker(14, 7));

// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.

function textChecker(str) {
  let strLength = str.length;

  if (strLength % 2 === 0) {
    return 'Porinis';
  }

  return 'Ne porinis';
}

console.log(textChecker('Labas ryta'));


// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio. 
// 11.1. Funkcija priima du argumentus: tekstą ir kelintą simbolį reikia grąžinti.
// 11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".

// 11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.

// 11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.

function getLetter(str, num) {
  let strLength = str.length;
  let convertedNum = num < 0 ? num * -1 : num;

  if (num === 0) {
    return 'Reikia įvesti arba teigiamą skaičių, arba neigiamą.';
  }

  if (strLength < convertedNum) {
    return `Tekstas "${str}" turi ${strLength} simbolius, o jūs nurodėte grąžinti ${convertedNum}.`
  }

  if (num < 0) {
    let letter = str.at(num);
    return `Teksto "${str}" ${convertedNum} raidė nuo galo yra "${letter}".`; 
  }

  let letterIndex = num - 1;
  let letter = str.at(letterIndex);

  return `Teksto "${str}" ${num} raidė yra "${letter}".`;
}

console.log(getLetter('Labas', -1));



