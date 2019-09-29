'use strict';
console.log('EXERCISE 1 - Remove The Comma');

/* EXERCISE-1 =>  
In this exercise we want to remove all the commas and replace them with spaces.
So I used google for my searching and I found the answer in stackoverflow.com 
https://stackoverflow.com/questions/39345634/how-do-i-replace-all-spaces-commas-and-periods-in-a-variable-using-javascript/39346082
To achieve this, we should use regular expressions(regex).
It has 2 parameters, first one is what we want to change,
and the second parameter is the replacing ones.
In the end our sentence is "hello this is a difficult to read sentence"*/

let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log('The length of my string is ' + myString.length);
myString = myString.replace(/[","]/g, ' ');
// And also we could use :
//myString = myString.replace(/[,]/g, ' ');
console.log(myString);

console.log('------------');

/* Or we can do this with using split method and join method */

let myString2 = 'hello,this,is,a,difficult,to,read,sentence';
console.log('The length of my string is ' + myString.length);
let splittedString = myString.split(',');
console.log(splittedString);
myString = splittedString.join(' ');
console.log(myString);
