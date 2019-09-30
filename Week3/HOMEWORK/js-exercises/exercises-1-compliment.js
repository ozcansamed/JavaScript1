'use strict';
console.log('EXERCISE 1 - You are amazing, ....!');

/* EXERCISE-1 =>
1=> Create a function with one parameter, 
2=> An array with 10 strings,
3=> Use Math.random and Math.floor to pick compliments randomly
4=> Compose our strings and edit name and compliments uppercase by .toUpperCase method,
5=> Return the string and log,
6=> Call 3 times and it worked!!!  */

function giveCompliment(name) {
  const complimentArr = [
    'awesome',
    'spectacular',
    'superb',
    'amazing',
    'glorious',
    'magnificent',
    'majestic',
    'extraordinary',
    'incredible',
    'marvelous',
  ];
  const randomCompliment = complimentArr[Math.floor(Math.random() * (complimentArr.length - 1))];
  const complimentText = `You are ${randomCompliment.toLocaleUpperCase()}, ${name.toLocaleUpperCase()}!`;
  return complimentText;
  /*or we can abbreviate the return part like this:
  return `You are ${complimentArr[
    Math.floor(Math.random() * (complimentArr.length - 1))
  ].toLocaleUpperCase()}, ${name.toLocaleUpperCase()}!`; */
}
console.log(giveCompliment('David'));
console.log(giveCompliment('Yash'));
console.log(giveCompliment('all HYF instructors'));
