'use strict';
console.log('JS1-W3-PROJECT-Credit Card Validator');

function validateCreditCardNumber(cardNumber) {
  // Credit card number must be 16 digits.
  if (cardNumber.length !== 16) {
    return `Error: INVALID Card Number! Your credit card number must be 16 digits!`;
  }

  // All of the credit card digits must be numbers.
  let numbers = [];
  if (typeof cardNumber === 'number') {
    numbers = ('' + cardNumber).split('');
  } else if (typeof cardNumber === 'string') {
    numbers = cardNumber.split('');
  } else {
    // else
    return `Error: INVALID Card Number!`;
  }

  for (const character of numbers) {
    if (isNaN(character)) {
      return `Error: INVALID Card Number! Your credit card number digits must be numbers!`;
    }
  }

  // All of the digits cannot be the same number.
  // And the sum of all the digits must be greater than 16.
  let digits = [];
  for (let i = 0; i < 10; ++i) {
    digits.push(0);
  }

  let sumOfAllDigits = 0;
  for (const character of numbers) {
    const number = +character;
    digits[number] += 1;
    sumOfAllDigits += number;
  }

  if (sumOfAllDigits <= 16) {
    return `Error: INVALID Card Number! Sum of your credit card number digits must be greater than 16!`;
  }

  for (const usedAmounts of digits) {
    if (usedAmounts === 16) {
      return `Error: INVALID Card Number! Your credit card number digits cannot be the same!`;
    }
  }

  // Final digit of the card number must be even.

  if (cardNumber % 2 === 1) {
    return `Error: INVALID Card Number! Your credit card number must be even`;
  }

  return `SUCCESS! YOUR CREDIT CARD NUMBER: ${cardNumber} IS VALID`;
}
console.log(validateCreditCardNumber('1234567890123456')); // TRUE
console.log(validateCreditCardNumber('12345678901234567')); // Error: must be 16 digits.
console.log(validateCreditCardNumber('12345s7890m123d5')); // Error: all of the digits must be numbers.
console.log(validateCreditCardNumber('2222222222222222')); // Error: Digits cannot be the same.
console.log(validateCreditCardNumber('7575757575757575')); // Error: Card Number must be even.
console.log(validateCreditCardNumber('1111111111110111')); // Error: The sum of digits must be greater than 16.
