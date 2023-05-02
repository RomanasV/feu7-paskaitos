console.groupCollapsed('Arrays');
// Masyvų kūrimas
let students = ['Steve', 'John', 'Peter'];

// Masyvo narių pasiekimas
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

// Kaip iteruojama per masyvą (ciklai/loops)

// for ciklas
for (let i = 0; i < students.length; i++) {
  console.log('For ciklas: ' + students[i]);
}

// map ciklas
students.map(student => {
  console.log('Map ciklas: ' + student);
})

// forEach ciklas
students.forEach(student => {
  console.log('forEach ciklas: ' + student);
})

// while ciklas
let n = 0;
while (n < students.length) {
  console.log('While ciklas: ' + students[n]);
  n++;
}

// do..while
let m = 0;
do {
  console.log('do..while ciklas: ' + students[m]);
  m++;
} while (m < students.length);

// for ...of ciklas
for (let student of students) {
  console.log('for ...of ciklas: ' + student);
}

//              Vardas Pavard. amzius
let student1 = ['John', 'Doe', 25, 'Vilnius', 'FEU7', 'Steve', 30];

console.log(student1);
console.log(student1[0]);
console.log(student1[1]);
console.log(student1[2]);
console.log(student1[3]);
console.log(student1[4]);
console.log(student1[5]);

console.groupEnd();


/*

Objekto sintaksė:

let object = {
  key: 'value',
}

Studentas 1:
  - Vardas: John,
  - Pavardė: Doe,
  - Amžius: 25,
  - Miestas: Vilnius,
  - Grupė: FEU7,
  - Antras vardas: Steve.

*/

let studentObj = {
  name: 'John', // Property (key: value)
  surname: 'Doe', // Ypatybė (pavadinimas: vertė)
  age: 25,
  city: 'Vilnius',
  group: 'FEU7',
  'first name': 'Steve',
};

// Objekto properties pasiekimas
console.log(studentObj);
console.log(studentObj['name']);
console.log(studentObj['surname']);
console.log(studentObj['age']);
console.log(studentObj['city']);
console.log(studentObj['group']);

let propertyName = 'age';
console.log(studentObj[propertyName]);

console.log(studentObj.name);
console.log(studentObj.surname);
console.log(studentObj.age);
console.log(studentObj.city);
console.log(studentObj.group);

console.log(studentObj['first name']);