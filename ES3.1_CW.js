// default params

// write an arrow function with default params to add two numbers
const addNumbers = (num1,num2=5) => num1+num2;
console.log(addNumbers(2));

// default params means if the param is missed then the value will be filled

// write an arrow function that multiplies two nums
const multiplyNumbers = (a,b=1) => a*b;
console.log(multiplyNumbers(2,2));


// write an arrow function with default params to concatenates two strings
const concatenateStrings = (name, greeting="Hello ") => greeting+name
console.log(concatenateStrings("Bob"));


// write an arrow function with default params to greet user

const greetUser = (name="neoGrammer", greeting="Hello") => greeting+name;
console.log(greetUser());



// write an arrow function with default params to add three numbers
const addThreeNumbers = (a,b,c=3) => a+b+c;
console.log(addThreeNumbers(1,3));