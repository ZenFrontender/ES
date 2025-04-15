//1 arrow function that takes an string and returns an object.


const createObject = (str) => ({text: str})

console.log(createObject("Hello"));


//2 arrow function that takes two numbers and returns an object with sum and product

const sumAndProduct = (num1,num2) => ({sum: num1+num2, product: num1*num2});

console.log(sumAndProduct(2,4));



//3 arrow function that takes a person's name and age and return an object with those properties.


const personNameAndAge = (personName, personAge) => ({name: personName, age: personAge});


console.log(personNameAndAge("neoG",4));