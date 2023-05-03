// UŽDUOTIS:
// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
// let company1 = {};
let company1 = new Object();

// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
company1['company name'] = 'Company ABC';
// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
company1.opened = 2000;

// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
company1.companyCode = 'LT6548798764';

// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
company1.employees = 15;

// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
company1.ceo = 'John Doe';

// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
company1.nvo = false;

// 2.7. Property „workingLocation" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
company1.workingLocations = ['Lithuania', 'Germany'];

// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
company1.activityAreas = ['Marketing', 'B2B Sales'];

// 2.9. Property „contacts", kuris turės:
company1.contacts = {};
//       2.9.1. „phone"
company1.contacts.phone = 8645461313;
//       2.9.2. „email"
company1.contacts.email = 'info@companyabc.lt';
//       2.9.3. „address", kuris turės:
company1.contacts.address = {};
//           2.9.3.1. „country"
company1.contacts.address.country = 'Lithuania';
//           2.9.3.2. „city"
company1.contacts.address.city = 'Vilnius';
//           2.9.3.3. „street"
company1.contacts.address.street = 'Vilniaus st.';
//           2.9.3.4. „apartment"
company1.contacts.address.apartment = 15;

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
company1.getFullAddress = function() {
  // return `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}.`;

  // let street = this.contacts.address.street;
  // let apartment = this.contacts.address.apartment;
  // let city = this.contacts.address.city;
  // let country = this.contacts.address.country;

  let { street, apartment, city, country } = this.contacts.address;

  return `${street} ${apartment}, ${city}, ${country}.`;
}

console.log(company1.getFullAddress());

// 6. Sukurti funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
company1.setNVO = function() {
  this.nvo = true;
}
//        6.2. Pakeičia NVO statusą į false.
company1.setNonNVO = function() {
  this.nvo = false;
}
//        6.3. Keičia NVO statusą iš true į false ir iš false į true.
company1.switchNVO = function() {
  this.nvo = !this.nvo;
}
// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
company1.getWorkingLocations = function() {
  return 'Working locations are: ' + this.workingLocations.join(', ') + '.';
}
console.log(company1.getWorkingLocations());

//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
company1.getActivityAreas = function() {
  return this.activityAreas.join(', ');
}
console.log(company1.getActivityAreas());

// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
company1.addWorkingLocation = function(newLocation) {
  this.workingLocations.push(newLocation);
  return this.workingLocations;
}
console.log(company1.addWorkingLocation('Italy'));

//        8.2. Naują veiklos rūšį prie veiklų masyvo.
company1.addActivityArea = function(newArea) {
  this.activityAreas.push(newArea);
  return this.activityAreas;
}
console.log(company1.addActivityArea('Sales'));

// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
company1.removeWorkingLocation = function(locationToRemove) {
  let updatedLocations = this.workingLocations.filter((location) => {
    return location !== locationToRemove;
  });

  this.workingLocations = updatedLocations;
  return this.workingLocations;
}
console.log(company1.removeWorkingLocation('Germany'));

//        9.2. Veiklos rūšį iš veiklų masyvo.
company1.removeActivityArea = function(areaToRemove) {
  return this.activityAreas = this.activityAreas.filter(area => area.toLowerCase() !== areaToRemove.toLowerCase());
}

console.log(company1.removeActivityArea('SALES'));
console.log(company1.removeActivityArea('b2b sales'));
console.log(company1.addActivityArea('Sales'));

let company2 = {
  'company name': 'Company XYZ',
  opener: 2015,
  companyCode: 4654788946,
  employees: 20,
  ceo: 'Doe John',
  nvo: true,
  workingLocations: ['Latvia', 'Poland'],
  activityAreas: ['Tourism', 'B2C Sales'],
  contacts: {
    phone: 8674654311,
    email: 'info@companyxyz.lt',
    address: {
      country: 'Lithuania',
      city: 'Vilnius',
      street: 'Vilniaus st.',
      apartment: 20,
    },
  },
  getFullAddress: function() {
    let { street, apartment, city, country } = this.contacts.address;
    return `${street} ${apartment}, ${city}, ${country}.`;
  },
  setNVO: function() {
    this.nvo = true;
  },
  setNonNVO: function() {
    this.nvo = false;
  },
  switchNVO() {
    this.nvo = !this.nvo;
  },
  getWorkingLocations() {
    return 'Working locations are: ' + this.workingLocations.join(', ') + '.';
  },
  getActivityAreas() {
    return this.activityAreas.join(', ');
  },
  addWorkingLocation(newLocation) {
    this.workingLocations.push(newLocation);
    return this.workingLocations;
  },
  addActivityArea(newArea) {
    this.activityAreas.push(newArea);
    return this.activityAreas;
  },
  removeWorkingLocation(locationToRemove) {
    let updatedLocations = this.workingLocations.filter((location) => {
      return location !== locationToRemove;
    });
  
    this.workingLocations = updatedLocations;
    return this.workingLocations;
  },
  removeActivityArea(areaToRemove) {
    return this.activityAreas = this.activityAreas.filter(area => area.toLowerCase() !== areaToRemove.toLowerCase());
  }
}

// console.log(company1);
company1.subsidiaries = [company2];

// console.log(company2);