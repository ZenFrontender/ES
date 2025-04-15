// // ES2_HW1

// //1
// const calcAreaOfRect = (a,b) => a*b;
// console.log(calcAreaOfRect(2,5));


// //2
// const firstNumDivBySec = (a,b) => a%b==0;
// console.log(firstNumDivBySec(15,5));


// //3
// const calcDiff = (a,b) => a-b;
// console.log(calcDiff(15,5));


// //4
// const concatenates = (a,b,c) => a+b+c;
// console.log(concatenates("I ","am "," happy"));


// //5
// function isBigger(a,b){
//     return a>b;
// }
// console.log("Is 2 bigger than 3?", isBigger(2,3));


// //6
// const printProduct = (a, b) => a * b
// console.log("Product of two numbers: ", printProduct(2, 6));


// //7
// const getGreeting = (greeting,name) => greeting+name;
// console.log(getGreeting("Hello ","John"));




//ES2_HW2
//1
const checkOdd = (num) => num%2!=0;
console.log(checkOdd(5));


//2
const calcLengthOfString = (string) => string.length;
console.log(calcLengthOfString("length"));


//3
const capitalizesString = (str) => str.toUpperCase();
console.log(capitalizesString("neog"));


//4
const returnCurrentDate = () => new Date().toLocaleDateString();
console.log(returnCurrentDate());


//5
const returnCurrentTime = () => new Date().toLocaleTimeString();
console.log(returnCurrentTime());


//6
const convFarhToCels = (farenheit) => (farenheit - 32)*(5/9);
console.log(convFarhToCels());


//7
const isEmptyString = (str) => str=="";
console.log(isEmptyString("Hello"));
console.log(isEmptyString(""));


//8
const retRandNum = () => Math.random()*30;
console.log(retRandNum());


//9
const squareRootRandNum = () => Math.sqrt(Math.random()*100);
console.log(squareRootRandNum());


//10
const convToLowerCase = () =>{
console.log(convToLowerCase("WORLD"))    
}
