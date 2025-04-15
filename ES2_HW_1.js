
const areaOfRectangle = (length, breadth) => length * breadth;
console.log("Area of Rectangle:", areaOfRectangle(10, 20));


const checkDivisibility = (x, y) => x % y === 0;
console.log("Check Divisibility for (15, 5):", checkDivisibility(15, 5));


const calculateDifference = (x, y) => x - y;
console.log("Check Difference for (15, 5):", calculateDifference(15, 5));


const concatenateString = (str1, str2, str3) => str1 + str2 + str3;
console.log("Concatenated Result:", concatenateString("I ", "am ", "happy."));


function isBigger(a, b) {
    if(a > b)
        return true;
    return false;
}
console.log("Is 2 bigger than 3?", isBigger(2, 3));


const printProduct = (a, b) => a * b;
console.log("Product of two numbers: ", printProduct(2, 6));


const getGreeting = (greeting, name) => greeting + name;
console.log(getGreeting("Hello", "John"));