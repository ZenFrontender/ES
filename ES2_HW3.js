//1
const returnObjPersonName = (firstNam,lastNam) => ({firstName: firstNam, lastName: lastNam});

console.log(returnObjPersonName("neoG","Camp"))

//2
const returnStrObj = (str) => ({length: str.length, upppercase: str.toUpperCase()})
console.log(returnStrObj("hello"));


//3
const returnPersonObj = (firstName, lastName, age, phoneNumber) => ({fullName: firstName+lastName, age: age, phoneNumber: phoneNumber});
console.log("Adrian","Gee",24,6745983445);


//4
const concatenateWords = (word1, word2) => ({concatenation: word1+" "+word2, charCount: (word1+word2).length})
console.log(concatenateWords("Hello","World"));


//5
const calculateCircleProperties = (rad) => ({circumference: 2*Math.PI*rad, area: Math.PI*rad**2});
console.log(calculateCircleProperties(5));


//6
const calculateDifferenceAndQuotient = (num1, num2) => ({difference: num1-num2, quotient: num1/num2});
console.log(calculateDifferenceAndQuotient(10,2))

//7
const analyzeSentence = (word) => ({wordCount: (word.split(" ")).length })
console.log(analyzeSentence("JavaScript is fun"));


//8
const calculateSqaureAndCube = (number) => ({square: number**2, cube: number**3});
console.log(calculateSqaureAndCube(4));


//9
const checkNumber = (num) => ({isPositive: num>0, isNegative: num<0});
console.log(checkNumber(5));