// Paselektinti HTML elementą
let paragraph = document.querySelector('p');
paragraph.textContent = 'Labas';
paragraph.innerHTML = 'Laba <span style="color: red;" class="test">diena</span>';

// Sukurti HTML elemntą
let spanElement = document.createElement('span');
spanElement.textContent = '!';

// Append - prideda su JS sukurtą HTML elementą (node) į kito elemento pabaigą
paragraph.append(spanElement);

// Prepend - prideda su JS sukurtą HTML elementą (node) į kito elemento pradžią
paragraph.prepend(spanElement);

// After - prideda su JS sukurtą HTML elemntą (node) po kitu elementu (šalia kito elemento)
paragraph.after(spanElement);

// Before - prideda su JS sukurtą HTML elementą (node) prieš kitą elementą (šalia kito elemento)
paragraph.before(spanElement);

// Remove - pašalina HTML elementą
spanElement.remove();

let newParagraph = document.createElement('p');
newParagraph.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia assumenda totam consectetur nostrum, quibusdam, consequuntur ut incidunt quasi aut perspiciatis voluptate ullam fugit placeat nisi laboriosam maxime asperiores ea perferendis.';

paragraph.after(newParagraph);

// Būdas pakeisti HTML elemento klases
newParagraph.className = 'pirma-klase antra-klase';
console.log(newParagraph.className);

// newParagraph.className = 'trecia-klase';
// newParagraph.className = newParagraph.className + ' trecia-klase';
newParagraph.className += ' trecia-klase';
console.log(newParagraph.className);

// Prideda klasę prie HTML elemento
newParagraph.classList.add('ketvirta-klase');
newParagraph.classList.add('penkta-klase', 'sesta-klase');

// Pašalina klasę iš HTML elemento
newParagraph.classList.remove('ketvirta-klase', 'penkta-klase');
newParagraph.classList.remove('septinta-klase');

// Pakeičia klasę HTML elemente
newParagraph.classList.replace('sesta-klase', 'ketvirta-klase');

// Prideda klasę prie HTML elemento, jeigu tokios klasės dar neturi ir pašalina jeigu tokią klasę jau turi
newParagraph.classList.toggle('toggle-klase'); // prideda
newParagraph.classList.toggle('toggle-klase'); // pašalina
newParagraph.classList.toggle('toggle-klase'); // prideda

// Patikrina ar HTML elementas turi nurodytą klasę (grąžina true arba false)
console.log(newParagraph.classList.contains('pirma-klase'));
console.log(newParagraph.classList.contains('antra-klase'));
console.log(newParagraph.classList.contains('klase'));

// Keičia (arba prideda) HTML elemento ID
newParagraph.id = 'paragrafo-id';
console.log(newParagraph.id);

let link = document.createElement('a');
link.textContent = 'nuoroda';
newParagraph.after(link);

// link.href = 'https://www.google.com';
link.setAttribute('href', 'https://www.google.com');
link.setAttribute('target', '_blank');
link.setAttribute('title', 'cia yra nuoroda');
link.setAttribute('class', 'nuorodos-klase');
link.setAttribute('class', 'antra-nuorodos-klase');
link.setAttribute('id', 'nuorodos-id');

console.log(link.getAttribute('title'));
link.removeAttribute('title');
console.log(link.title);

link.style.border = '2px solid black';
link.style.padding = '5px 10px';
link.style.fontSize = '25px';
link.style.display = 'inline-block';

link.style = `color: red;
              border: 2px solid black;
              padding: 5px 10px;
              font-size: 25px;
              display: inline-block;
              text-decoration: none;
              text-transform: uppercase;`
