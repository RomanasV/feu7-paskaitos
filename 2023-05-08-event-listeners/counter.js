// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// let numbersWrapper = document.getElementById('numbers');
let numbersWrapper = document.querySelector('#numbers');

// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
let numberDisplay = document.createElement('h3');
let minusButton = document.createElement('button');
let plusButton = document.createElement('button');

// 3. h3 elemento tekstas turėtų būti „5"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
numberDisplay.textContent = 5;
checkColor();

minusButton.textContent = '-';
plusButton.textContent = '+';

// numbersWrapper.append(numberDisplay);
// numbersWrapper.append(minusButton);
// numbersWrapper.append(plusButton);

numbersWrapper.append(numberDisplay, minusButton, plusButton);

// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti

// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra 10, tai „+" mygtukas turėtų patapti neveiksnus (disabled)

minusButton.addEventListener('click', () => {
  numberDisplay.textContent = numberDisplay.textContent - 1;

  if (numberDisplay.textContent <= 1) {
    minusButton.setAttribute('disabled', true);
  }

  if (numberDisplay.textContent < 10) {
    plusButton.removeAttribute('disabled');
  }

  checkColor();
})

plusButton.addEventListener('click', () => {
  numberDisplay.textContent = Number(numberDisplay.textContent) + 1;

  if (numberDisplay.textContent >= 10) {
    plusButton.setAttribute('disabled', true);
  }

  if (numberDisplay.textContent > 1) {
    minusButton.removeAttribute('disabled');
  }

  checkColor();
})

// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.
function checkColor() {
  if (numberDisplay.textContent < 5) {
    numberDisplay.style.color = 'red';
  } else {
    numberDisplay.style.color = 'green'
  }
}
