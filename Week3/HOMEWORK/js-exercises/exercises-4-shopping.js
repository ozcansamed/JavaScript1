'use strict';
console.log('EXERCISE 4 - Shopping at the supermarket');

/* EXERCISE-4 =>
1=> Create a function with one parameter, 
2=> Create an array to grocery item.
3=> If the amount of items is more than 3 remove the first one in the array.
4=> Return a string. 
5=> Create an array with 2 predefined strings.
6=> Call the function three times with a different string. */
//It takes in 1 argument: a grocery item ????(string)????

const shoppingList = ['bananas', 'milk'];

function addToShoppingCart(groceryItem) {
  shoppingList.push(groceryItem);
  if (shoppingList.length > 3) {
    shoppingList.shift();
  }
  return `You bought ${shoppingList.join(', ')}!`;
}

console.log(addToShoppingCart('apple'));
console.log(addToShoppingCart('tomato'));
console.log(addToShoppingCart('potato'));
