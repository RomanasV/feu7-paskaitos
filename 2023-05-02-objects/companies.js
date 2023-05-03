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
}

console.log(company1);
company1.subsidiaries = [company2];

console.log(company2);