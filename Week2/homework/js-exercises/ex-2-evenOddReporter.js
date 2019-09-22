'use strict';
console.log('EXERCISE 2 - The even/odd reporter');

/* EXERCISE-2 =>  
First we made a for loop which iterates 0 to 20.
Then we made an if + else statement to check if our number is odd or even. 
To do this we used remainder/modulo operator. 
finally we console.log our numbers. ta da...*/

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 1) {
    console.log('The number ' + i + ' is odd!');
  } else {
    console.log(`The number ${i} is even!`);
  }
}
