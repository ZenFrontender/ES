// Arrow functions with no params.
//arrow function that generates random numbers between 1 to 10.

const getRandomNumber = () => Math.floor(Math.random() * 10);
console.log(getRandomNumber());

// Arrow function that returns current date.

const getCurrentDate = () => new Date().toLocaleDateString();
console.log(getCurrentDate());

// Arrow functions that returns a greeting.
const getGreeting = () => "Hello, Welcome to NeoG Camp.";
console.log(getGreeting());


//Arrow function with one param
//arrow function to get the square of a number.

const getSquareValue = (num) => num ** 2; //(** means x to power y)
console.log(getSquareValue(4));

//arrow function to check if a number is positive.
const isPositive = num => num > 0; // If you're using only 1 param, then it doesn't matter if you're using round brackets or not.
console.log(isPositive(3));

//arrow function to check if a number is Even.
const isEven = num => num % 2 === 0;
console.log(isEven(5));