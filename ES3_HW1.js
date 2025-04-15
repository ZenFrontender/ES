// arrow function with default parameters that calculate the area of rectangle

const rectangleArea = (length=5, breadth=3) => length*breadth;
console.log(rectangleArea());
console.log(rectangleArea(4));


// arrow function with default parameters that concatenate two strings
const concatenateStrings = (str1,str2=" neoG") => str1+str2;
console.log(concatenateStrings("Hello","World"));
console.log(concatenateStrings("Hello"));



// arrow function with radius and height as defualt parameter with values 2 and 4 respectively, to calculate the volume of cylinder
const cylinderVolume = (rad=2,height=4) => Math.PI*rad**2*height;
console.log(cylinderVolume(3));
console.log(cylinderVolume(3,5));



// arrow function with price and quality as default parameters to calculate the total cost of a shopping cart
const shoppingCartTotal = (price=0,quantity=1) => price*quantity;
console.log(shoppingCartTotal(10));
console.log(shoppingCartTotal(15,3));
console.log(shoppingCartTotal());



// arrow function with default parameters that generate a user profile. It should take a username, age and country as parameters
const generateUserProfile = (username="Guest",age=25,country="Unknown") => `Username: ${username}, Age: ${age}, Country: ${country}`
console.log(generateUserProfile());
console.log(generateUserProfile("Alice",30,"USA"));



//6
const sum = (a,b=5) => a+b;
console.log(sum(2,4));
console.log(sum(3));




//7
const calculatePower = (base,exponent=1) => base**exponent;
console.log(calculatePower(2,3));
console.log(calculatePower(5));



//8
const triangleArea = (base, height=4) => 0.5*base*height;
console.log(triangleArea(5));
console.log(triangleArea(3,6));


//9
const concatenateString = (str1,str2="") => str1+str2;
console.log(concatenateString("Good"));


