// arrow function to return the sum of all numbers in an array


const sumOfNumsArr = (arr) => arr.reduce((num1,num2)=>num1+num2);

console.log(sumOfNumsArr([1,4,6,3,7]));



// arrow function to reverse a string
const reverseStr = (str) => {
    let reverseStr = "";
    for(let i=str.length-1;i>=0;i--){
        reverseStr = reverseStr + str[i]
    }
    return reverseStr;
}

console.log(reverseStr("Hello"));