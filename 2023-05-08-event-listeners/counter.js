// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// let numbersWrapper = document.getElementById('numbers');
let numbersWrapper = document.querySelector('#numbers');

// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 12. Sukurti du naujus mygtukus, kurie:
// 12.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
// 12.2. Atima dvejetą iš esamos h3 elemento reikšmės.

let numberDisplay = document.createElement('h3');
let minusButton = document.createElement('button');
let plusButton = document.createElement('button');
let minus2Button = document.createElement('button');
let plus2Button = document.createElement('button');

// 3. h3 elemento tekstas turėtų būti „5"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
let count = 5;
checkData(0);

minusButton.textContent = '-';
plusButton.textContent = '+';
minus2Button.textContent = '-2';
plus2Button.textContent = '+2';

// numbersWrapper.append(numberDisplay);
// numbersWrapper.append(minusButton);
// numbersWrapper.append(plusButton);

numbersWrapper.append(numberDisplay, minus2Button, minusButton, plusButton, plus2Button);

// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti

// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra 10, tai „+" mygtukas turėtų patapti neveiksnus (disabled)

minusButton.addEventListener('click', () => checkData(-1));
minus2Button.addEventListener('click', () => checkData(-2));
plusButton.addEventListener('click', () => checkData(1));
plus2Button.addEventListener('click', () => checkData(2));

// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.
function checkColor() {
  if (count < 5) {
    numberDisplay.style.color = 'red';
  } else {
    numberDisplay.style.color = 'green'
  }
}

function checkData(changeNum) {
  count = count + changeNum;
  numberDisplay.textContent = count;
  checkColor();

  if (count >= 10) {
    plusButton.setAttribute('disabled', true);
  } else {
    plusButton.removeAttribute('disabled');
  }

  if (count >= 9) {
    plus2Button.setAttribute('disabled', true);
  } else {
    plus2Button.removeAttribute('disabled');
  }

  if (count > 1) {
    minusButton.removeAttribute('disabled');
  } else {
    minusButton.setAttribute('disabled', true);
  }

  if (count > 2) {
    minus2Button.removeAttribute('disabled');
  } else {
    minus2Button.setAttribute('disabled', true);
  }
}