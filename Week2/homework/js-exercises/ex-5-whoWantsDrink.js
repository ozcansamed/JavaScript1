'use strict';
console.log('EXERCISE 5 - Who wants a drink?');

/* EXERCISE-5 =>  */

/* We declared our empty array, then with for loop 
we pushed our drinkTypes. Finally with back tick we logged our sentence.  */

const drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];

for (let i = 0; i < 5; ++i) {
  drinkTray.push(drinkTypes[i % 3]);
}

console.log('Hey guys, I brought a ' + drinkTray.join(', ') + '!');
