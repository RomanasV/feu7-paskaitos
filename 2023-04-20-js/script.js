// Kintamojo sukūrimas:
// 1. Iniciavimo žodelis (var, let, const)
// 2. Kintamojo pavadinimas
// 3. Lygybės ženklas
// 4. Kintamojo reikšmė

var vardas = 'Steve'; // String (tekstas) duomenų tipas
let pavarde = "adafsd"; // String (tekstas) duomenų tipas
let miestas = `Kaunas`; // String (tekstas) duomenų tipas
const asmensKodas = 5466546131; // Number (skaičius) duomenų tipas
let yraStudentas = false; // Boolean (true/false) duomenų tipas
let amzius = 25;

console.log(vardas);
console.log(pavarde);
console.log(miestas);

console.log(vardas, typeof vardas);

console.log(asmensKodas);
console.log(typeof asmensKodas);

// pavarde = 'Kita pavarde';
console.log(pavarde);

// vardas = 'Kitas vardas';
console.log(vardas);

console.log(yraStudentas);
console.log(typeof yraStudentas);

console.log(amzius);
console.log(typeof amzius);

amzius = 26;
console.log(amzius);

amzius = amzius + 1;
console.log(amzius);

console.log('Hello, ' + vardas + ' ' + pavarde + '.');
console.log("Hello, " + vardas + " " + pavarde + ".");

// John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.

let asmensInformacija = vardas + ' ' + pavarde + ' (amžius ' + amzius + ' m.), asmens kodas: ' + asmensKodas + ', gyvenamasis miestas: ' + miestas + '.';

console.log(asmensInformacija);

console.log(vardas + " " + pavarde + " (amžius " + amzius + " m.), asmens kodas: " + asmensKodas + ", gyvenamasis miestas: " + miestas + ".");

console.log(vardas + ` ` + pavarde + ` (amžius ` + amzius + ` m.), asmens kodas: ` + asmensKodas + `, gyvenamasis miestas: ` + miestas + `.`);

console.log(`${vardas} ${pavarde} (amžius ${amzius} m.), asmens kodas: ${asmensKodas}, gyvenamasis miestas: ${miestas}.`);

// John said: "Good morning".
console.log('John said: "Good morning".');
console.log(`John said: "Good morning".`);

// That's my car.
console.log("That's my car.");
console.log(`That's my car.`);

// John said: "That's my car".
console.log(`John said: "That's my car".`);
console.log('John said: "That' + "'s my car" + '".');

// John `said`: "That's my car".
console.log('John `said`: ' + `"That's my car".`);

console.log('John `said`: "That\'s my car".');
console.log("John `said`: \"That's my car\".");
console.log(`John \`said\`: "That's my car".`);

// John `said`: "That's \my\ car".
console.log('John `said`: "That\'s \\my\\ car".');
console.log(`John \`said\`: "That's \\my\\ car".`);
console.log("John `said`: \"That's \\my\\ car\".");

// John \`said\`: "That's my car".
console.log('John \\`said\\`: "That\'s my car".');
console.log("John \\`said\\`: \"That's my car\".");
console.log(`John \\\`said\\\`: "That's my car".`);

// Matematiniai operatoriai
let num1 = 22;
let num2 = 10;
let num3 = '10';

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log(num1 + num2 * num2);
console.log((num1 + num2) * num2);

console.log(num1 + num3);
console.log(num1 - num3);
console.log(num1 * num3);
console.log(num1 / num3);
console.log(num1 % num3);

console.log(num1 + num3 * num3);
console.log(num1 + '10' * '10');
console.log(22 + 100);
console.log(122);

console.log((num1 + num3) * num3);
console.log((22 + '10') * num3);
console.log('2210' * '10');
console.log(22100);

// SĄLYGOS
// Dviguba lygybė (loosely equal ==): tikrina TIK reikšmes ir nekreipia dėmesio į duomenų tipą.
console.log(10 == 10); // true
console.log('vienas' == 'vienas'); // true
console.log('10' == '10'); // true
console.log(10 == '10'); // true

// Triguba lygybė (strictly qual ===): pirmiausiai tikrina ar sutampa duomenų tipai, o tada tikrina reikšmes.
console.log(10 === 10); // true
console.log('vienas' === 'vienas'); // true
console.log('10' === '10'); // true
console.log(10 === '10'); // false

console.log(10 > 10); // false
console.log(10 < 10); // false
console.log(10 >= 10); // true
console.log(10 <= 10); // true

console.log(10 == 10); // true
console.log(10 != 10); // false

console.log(10 === 10); // true
console.log(10 !== 10); // false

console.log(true);
console.log(!true);
console.log(!!true);

// IF, ELSE IF, ELSE
let originalLight = 'GreEn';
console.log(originalLight)

let light = originalLight.toLowerCase();
console.log(light);

// OR operator - AR operatorius ||

if (light === 'green' || light === 'Green') {
  console.log('Galima eiti!');
} else if (light === 'yellow') {
  console.log('Pasiruošk');
} else if (light === 'red') {
  console.log('STOP');
} else {
  console.log('Sugedo :(');
}

// AND operator - IR operatorius &&

let personAge = 16.5;

if (personAge >= 18) {
  console.log('Pirkti galima');
} else if (personAge >= 16 && personAge < 18) {
  console.log('Pirkti galima su tėvų sutikimu');
} else {
  console.log('Pirkti negalima');
}

if (personAge >= 18) {
  console.log('Pirkti galima');
} else if (personAge >= 16) {
  console.log('Pirkti galima su tėvų sutikimu');
} else {
  console.log('Pirkti negalima');
}

// if (personAge > 17) {
//   console.log('Pirkti galima');
// } else {
//   console.log('Pirkti negalima');
// }

if (personAge < 16) {
  console.log('Pirkti negalima');
} else if (personAge < 18) {
  console.log('Pirkti galima su tėvų sutikimu');
} else {
  console.log('Pirkti galima');
}

// if (personAge <= 17) {
//   console.log('Pirkti negalima');
// } else {
//   console.log('Pirkti galima');
// }

if (personAge < 18) {

  if (personAge >= 16) {
    console.log('Pirkti galima su tėvų sutikimu');
  } else {
    console.log('Pirkti negalima');
  }

} else {
  console.log('Pirkti galima');
}

// 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
// 2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
// 2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
// 2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."

let originalPassword = '    aask         ';
let trimedPassword = originalPassword.trim();
let passLength = trimedPassword.length;

console.log(trimedPassword);
console.log(passLength);

console.log(trimedPassword.includes('#'));

// if (password.length < 16) {
//   console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.');
// } else {
//   if (password.length > 20) {
//     console.log('Slaptažodis tinkamas');
//   } else {
//     console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.');
//   }
// }

// if (!trimedPassword.includes('#')) {
//   console.log('Slaptažodis privalo turėti grotažymes (#)');
// } else {
//   if (passLength >= 16) {
//     if (passLength > 20) {
//       console.log('Slaptažodis tinkamas');
//     } else {
//       console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.');
//     }
//   } else {
//     console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.');
//   }
// }

if (!trimedPassword.includes('#')) {
  console.log('Slaptažodis privalo turėti grotažymes (#)');
} else if (passLength >= 16) {
  if (passLength > 20) {
    console.log('Slaptažodis tinkamas');
  } else {
    console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.');
  }
} else {
  console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.');
}

// Pagal amžiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.

// 6.1. Jeigu amžius yra mažiau nei 0, tai parašyti jog įvestas amžius yra per mažas.
// 6.2. Jeigu amžius yra daugau nei 120, tai parašyti jog įvestas amžius yra per didelis.

// 7.1. Jeigu amžius yra 6 metai, tai parašyti: "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas."
// 7.2. Jeigu amžius yra 10 metai, tai parašyti: "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas."
// 7.3. Jeigu amžius yra 14 metai, tai parašyti: "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
// 7.3. Jeigu amžius yra 18 metai, tai parašyti: "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."

// 8. Jeigu įvestas ne amžius (t.y. ne skaičius), tai parašyti: "Netinkamai nurodytas amžius, amžius privalo būti skaičius."
// 9. Panaudoti prompt funkciją amžiui įvesti.

// let age = prompt('Įveskite savo amžių');
let age = 4;

console.log(age);
console.log(isNaN(age));

if (isNaN(age) || age === '') {
  console.log('Reikia įvesti skaičių');
} else if (age < 0) {
  console.log('Amžius privalo būti teigiamas skaičius');
} else if (age < 6) {
  console.log('Į mokyklą neina');
} else if (age < 7) {
  console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.');
} else if (age < 10) {
  console.log('Pradinukas');
} else if (age < 11) {
  console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.');
} else if (age < 14) {
  console.log('Pagrindinė');
} else if (age < 15) {
  console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.');
} else if (age < 18) {
  console.log('Gimnazija');
} else if (age < 19) {
  console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.');
} else if (age < 120) {
  console.log('Mokyklą baigė');
} else {
  console.log('Amžius yra per didelis');
}