const obj = {
  name: 'John',
  age: 28,
  nextAge: 28 + 1,
  children: ['Child 1', 'Child 2'],
  address: {
    street: 'Vilniaus st.',
    city: 'Vilnius',
    country: 'Lithuania',
  },
  married: true,
  getAddress() {
    return `Address is: ${this.address.street} ${this.address.city} ${this.address.country}.`
  },
  test: undefined,
  test2: null,
}

console.log(obj.name);
console.log(obj['age']);
console.log(obj.children[0]);
console.log(obj.address.city);
console.log(obj.getAddress());

// Įprastinis objektas
console.log(obj);

// Objektas paverčiamas į JSON objektą
const json = JSON.stringify(obj);
console.log(json);

// json to obj
const convertedJson = JSON.parse(json);
console.log(convertedJson);