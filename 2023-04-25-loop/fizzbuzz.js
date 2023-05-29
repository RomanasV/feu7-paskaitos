// FIZZ BUZZ
// 1. Skaičius nuo 1 iki 100.
// 2. Skaičiai, kurie dalinasi iš 3 turi būti pakeisti į žodį „Fizz";
// 3. Skaičiai, kurie dalinasi iš 5 turi būti pakeisti į žodį „Buzz";
// 4. Skaičiai, kurie dalinasi iš 3 ir 5 turi būti pakeisti į žodį „FizzBuzz";

// 5. Skaičiai, kurie dalinasi iš 7, turi būti pakeisti į žodį „Biff".
// 5.1. Skaičiai, kurie dalinasi iš 7 ir 3 turi būti pakeisti į žodį „FizzBiff";
// 5.2. Skaičiai, kurie dalinasi iš 7 ir 5 turi būti pakeisti į žodį „BuzzBiff";
// 5.3. Skaičiai, kurie dalinasi iš 7, iš 5 ir iš 3 turi būti pakeisti į žodį „FizzBuzzBiff";

// 6. Skaičiai, kurie dalinasi iš 9, turi būti pakeisti į žodį „Fuzz".
// 7. Skaičiai, kurie dalinasi iš 11, turi būti pakeisti į žodį „Bizz".

// 3 5 7 9 11
// 3 5 7 9
// 3 5 7 11
// 5 7 9 11
// 3 5 7 +
// 3 5 9
// 3 7 9
// 5 7 9
// 3 5 11
// 3 7 11
// 3 9 11
// 5 7 11
// 5 9 11
// 7 9 11
// 3 5 +
// 3 7 +
// 5 7 +
// 3 9
// 5 9
// 7 9
// 3 11
// 5 11
// 7 11
// 9 11
// 3 + 
// 5 +
// 7 +
// 9
// 11

function fizzBuzz1() {
  for (let i = 1; i <= 200; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      console.log('FizzBuzzBiff');
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0 && i % 7 === 0) {
      console.log('FizzBiff');
    } else if (i % 5 === 0 && i % 7 === 0) {
      console.log('BuzzBiff');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 7 === 0) {
      console.log('Biff');
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz1();

function fizzBuzz2() {
  for (let i = 1; i <= 200; i++) {
    let output = '';

    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      output = 'FizzBuzzBiff';
    } else if (i % 3 === 0 && i % 5 === 0) {
      output = 'FizzBuzz';
    } else if (i % 3 === 0 && i % 7 === 0) {
      output = 'FizzBiff';
    } else if (i % 5 === 0 && i % 7 === 0) {
      output = 'BuzzBiff';
    } else if (i % 3 === 0) {
      output = 'Fizz';
    } else if (i % 5 === 0) {
      output = 'Buzz';
    } else if (i % 7 === 0) {
      output = 'Biff';
    } else {
      output = i;
    }

    console.log(output);
  }
}

// fizzBuzz2();


function fizzBuzz3() {
  for (let i = 1; i <= 1000; i++) {
    let output = '';

    if (i % 3 === 0) {
      output += 'Fizz';
    }

    if (i % 5 === 0) {
      output += 'Buzz';
    }

    if (i % 7 === 0) {
      output += 'Biff';
    }

    if (i % 9 === 0) {
      output += 'Fuzz';
    }

    if (i % 11 === 0) {
      output += 'Bizz';
    }
    
    if (i % 13 === 0) {
      output += 'Muzz';
    }

    if (!output) {
      output = i;
    }

    console.log(output);
  }
}

// fizzBuzz3();

function fizzBuzz4() {
  for (let i = 1; i <= 200; i++) {
    let output = '';

    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    if (i % 7 === 0) output += 'Biff';
    if (i % 9 === 0) output += 'Fuzz';
    if (i % 11 === 0) output += 'Bizz';
    if (i % 13 === 0) output += 'Muzz';
    if (!output) output = i;

    console.log(output);
  }
}

// fizzBuzz4();


function fizzBuzz4while() {
  let i = 1;

  while (i <= 200) {
    let output = '';

    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    if (i % 7 === 0) output += 'Biff';
    if (i % 9 === 0) output += 'Fuzz';
    if (i % 11 === 0) output += 'Bizz';
    if (i % 13 === 0) output += 'Muzz';
    if (!output) output = i;

    console.log(output);

    i++;
  }
}

fizzBuzz4while();