'use strict';
console.log('EXERCISE 2 - Dog years');

/* EXERCISE-2 =>
1=> Create a function with one parameter, 
2=> Calculate and convert dog age, 
3=> Return a string,
4=> Call it 3 times with different values.    */

function calculateDogAge(humanYears) {
  const dogYears = humanYears / 7;
  const dogAgeString = `Your doggie is ${dogYears} years old in dog years!`;
  return dogAgeString;
}

console.log(calculateDogAge(28));
console.log(calculateDogAge(42));
console.log(calculateDogAge(34));
