'use strict';
console.log('EXERCISE 5 -  Total cost is ...');

/* EXERCISE-5 =>
1=> Create a function with one parameter, 
2=> To add all the numbers in the object, we create a for..in loop,
3=> Return the total value,
4=> Create an object with 5 properties,
5=> Call the function and log it with a string. */
/*
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
*/

const cartForParty = {
  cola: 3.25,
  chips: 2.75,
  gum: 0.25,
  biscuits: 1.75,
  chocolate: 0.9,
};
const calculateTotalPrice = Object.values(cartForParty).reduce((total, price) => {
  return total + price;
}, 0);
console.log('Your total cost is ' + calculateTotalPrice + ' €.');
