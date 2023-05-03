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
  'second name': 'Steve',
  grades: [7, 8, 9, 10],
  address: {
    city: 'Kaunas',
    street: 'Vilniaus st.',
  },
  getFullName: function() {
    return `Full name is: ${this.name} ${this['second name']} ${this.surname}.`;
  },
  setStudentInactive: function() {
    this.isActive = false;
  },
  setStudentActive: function() {
    this.isActive = true;
    return this.isActive;
  },
  removeHobby(hobbyToRemove) {
    // let updatedHobbies = this.hobbies.filter((hobby) => {
    //   return hobby !== hobbyToRemove;
    // });

    // this.hobbies = updatedHobbies;

    this.hobbies = this.hobbies.filter(hobby => hobby !== hobbyToRemove);
  }
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

// Objekto properties pakeitimas
console.log(studentObj.age);
// studentObj.age = studentObj.age + 1;
studentObj.age = 26;
console.log(studentObj.age);

studentObj['city'] = 'Kaunas';
console.log(studentObj.city);

// Objekto properties sukūrimas
console.log(studentObj.isActive);
studentObj.isActive = true;
console.log(studentObj.isActive);

studentObj['birth city'] = 'Klaipėda';

delete studentObj['birth city'];

studentObj.hobbies = ['sports', 'reading'];
console.log(studentObj.hobbies);

studentObj.hobbies.map((hobby) => {
  console.log(hobby);
});

for (let i = 0; i < studentObj.hobbies.length; i++) {
  console.log(studentObj.hobbies[i]);
}

studentObj.contacts = {
  phone: 864543131,
  email: 'vardas@email.com',
}

console.log(studentObj);
console.log(studentObj.contacts);
console.log(studentObj.contacts.phone);
console.log(studentObj.contacts.email);


console.log(studentObj.getFullName());

console.log(studentObj.isActive);
studentObj.setStudentInactive();
console.log(studentObj.isActive);
console.log(studentObj.setStudentActive());
console.log(studentObj.isActive);

studentObj.switchStudentActivity = function() {
  // if (this.isActive) {
  //   this.isActive = false;
  // } else {
  //   this.isActive = true;
  // }

  this.isActive = !this.isActive;

  return this.isActive;
}

console.log(studentObj.isActive);
console.log(studentObj.switchStudentActivity());
console.log(studentObj.switchStudentActivity());
console.log(studentObj.switchStudentActivity());

studentObj.addHobby = function(hobbyToAdd) {
  this.hobbies.push(hobbyToAdd);
  return this.hobbies;
}

console.log(studentObj.hobbies);
console.log(studentObj.addHobby('traveling'));


studentObj.removeHobby('reading');
console.log(studentObj.hobbies);