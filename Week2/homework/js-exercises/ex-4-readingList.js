'use strict';
console.log('EXERCISE 4 - The reading list');

/* EXERCISE-4 =>  */

/* First we creat our objects, then using for loop and if
we can log our reading list. */

const myBookList = [
  {
    title: 'The Count of Monte Cristo',
    author: 'Alexander Dumas',
    alreadyRead: true,
  },
  {
    title: 'Les Misarebles',
    author: 'Victor Hugo',
    alreadyRead: true,
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    alreadyRead: false,
  },
];

for (let i = 0; i < myBookList.length; ++i) {
  console.log(myBookList[i].title + ' by ' + myBookList[i].author);
  if (myBookList[i].alreadyRead) {
    console.log(`You already read "${myBookList[i].title}"`);
  } else {
    console.log(`You still need to read "${myBookList[i].title}"`);
  }
}
