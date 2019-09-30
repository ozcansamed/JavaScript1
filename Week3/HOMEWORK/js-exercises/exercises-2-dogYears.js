'use strict';
console.log('EXERCISE 2 - Dog years');

/* EXERCISE-2 =>
1=> Create a function with one parameter, 
2=> Calculate and convert dog age, 
3=> Return a string,
4=> Call it 3 times with different values.    */

function calculateDogAge(age) {
  const convertedAge = age * 7;
  const dogAgeString = `Your doggie is ${convertedAge} years old in dog years!`;
  return dogAgeString;
  // or we can abbreviate the return part like this:
  //return 'Your doggie is ' + age * 7 + ' years old in dog years!';
}

console.log(calculateDogAge(1));
console.log(calculateDogAge(1.55));
console.log(calculateDogAge(7.5));
