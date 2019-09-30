'use strict';
console.log('EXERCISE 3 - Fortune Teller');

/* EXERCISE-3 =>  
1=> Create a function with 4 parameter, 
2=> Create four arrays as an argument for the function.
3=> Arrange for random values by using Math.floor and Math.random.
4=> Return with a string.
5=> Call the fortune teller function one time.*/

function tellFortune(childrenArr, partnersArr, locationsArr, jobsArr) {
  const randomChildrenNumber = childrenArr[Math.floor(Math.random() * (childrenArr.length - 1))];
  const randomNameOfPartner = partnersArr[Math.floor(Math.random() * (partnersArr.length - 1))];
  const randomLocation = locationsArr[Math.floor(Math.random() * (locationsArr.length - 1))];
  const randomJob = jobsArr[Math.floor(Math.random() * (jobsArr.length - 1))];

  const fortuneText = `You will be a ${randomJob.toLocaleUpperCase()} in ${randomLocation.toLocaleUpperCase()} and married to ${randomNameOfPartner.toLocaleUpperCase()} with ${randomChildrenNumber} kids.`;
  return fortuneText;
}
const numChildren = [1, 2, 3, 4, 5];
const partnerNames = ['Myrcella', 'Arya', 'Daenarys', 'Sansa', 'Cersie'];
const locations = ['Netherlands', 'USA', 'Germany', 'India', 'France'];
const jobs = ['Programmer', 'Teacher', 'Doctor', 'Manager', 'CEO'];

console.log(tellFortune(numChildren, partnerNames, locations, jobs));
