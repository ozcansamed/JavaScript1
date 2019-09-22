'use strict';
console.log('EXERCISE 3 - The Recipe Card');

/* EXERCISE-3 => 
First of all we made an object with 3 properties.
Then we logged out the properties using loop. */

let myMealRecipe = {
  nameOfMeal: 'meat saute',
  serves: 4,
  ingredients: ['1 kg meat', '7 tomatoes', '11 pepper', 'salt'],
};

console.log(`Meal name: ${myMealRecipe.nameOfMeal}`); // 'Meal name: ' + myMealRecipe.nameOfMeal
console.log(`Serves: ${myMealRecipe.serves}`);
console.log('Ingredients:');
for (let i = 0; i < myMealRecipe.ingredients.length; ++i) {
  console.log(myMealRecipe.ingredients[i]);
}

/* Or we can do this with for..of..loop

for (let ingredient of myMealRecipe.ingredients) {
  console.log(ingredient);
}
*/
