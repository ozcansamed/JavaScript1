'use strict';
console.log('EXERCISE 5 -  Total cost is ...');

/* EXERCISE-5 =>
1=> Create a function with one parameter, 
2=> To add all the numbers in the object, we create a for..in loop,
3=> Return the total value,
4=> Create an object with 5 properties,
5=> Call the function and log it with a string. */

function calculateTotalPrice(shoppingCart) {
  let total = 0;
  for (let shoppingItem in shoppingCart) {
    total += shoppingCart[shoppingItem];
  }
  return total;
}

const cartForParty = {
  cola: 3.25,
  chips: 2.75,
  gum: 0.25,
  biscuits: 1.75,
  chocolate: 0.9,
};
console.log('Your total cost is ' + calculateTotalPrice(cartForParty) + ' €.');

// ----------SECOND VERSION---------

// If one of the value is NaN, then our function could crash.
// Therefore I used if else statement in the second version.
console.log('\n----THIS IS SECOND VERSION,-----\n');

let cartForParty2 = {
  cola: 3.25,
  chips: 2.75,
  gum: 'Three',
  biscuits: 1.75,
  chocolate: 0.9,
};

let total = 0;
for (let item in cartForParty2) {
  if (typeof cartForParty2[item] !== 'number') {
    console.log(
      cartForParty2[item] +
        ' is not a number value! \nPlease enter the price of your items with numbers.',
    );
  } else {
    total += cartForParty2[item];
  }
}

console.log('\nYour total cost is ' + total + ' €.');
