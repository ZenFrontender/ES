// Write an arrow function that uses the rest parameter to log the first element and the rest of the elements in an array.

const logFirstAndRest = (firstElem, ...restElems) => {

    console.log(`First: ${firstElem}`)
    console.log("Rest:",restElems);
}

logFirstAndRest(1, 2, 3, 4, 5);



// 2. Write an arrow function that uses the rest parameter to log the first and second element and the rest of the elements in an array.

const logFirstAndSecond = (firstElem,secondElem, ...restElems) => {
  console.log(`\nFirst: ${firstElem}\nSecond: ${secondElem}`);
  console.log("Rest:", restElems);
};
 
logFirstAndSecond(12, 22, 33, 44, 55);




//3. Write an arrow function that uses the rest parameter to calculate the product of numeric values.

const calculateProduct = (...allValues) => allValues.reduce((elem1, elem2) => elem1 * elem2);

console.log(calculateProduct(2, 3, 4)); 
console.log(calculateProduct(5, 2, 1, 3));



// 4. Write an arrow function that uses the rest parameter to concatenate an arbitrary number of words into a sentence.

const createSentence = (...words) => words.join(" ")

console.log(createSentence("JavaScript", "is", "awesome")); // Output: JavaScript is awesome




// 5. Write an arrow function that uses the rest parameter to calculate the sum of numeric values.

const findSum = (str, ...nums) => console.log(nums.reduce((elem1, elem2) => elem1 + elem2));

// code for function call    
findSum("Sum of Numbers: ", 2, 4, 6, 8, 10); 




// 6. Write an arrow function that uses the rest parameter to check if a specific value is present in an array. The first parameter that the function takes is the value that you have to find in the array.

const containsValue = (firstElem, ...restElems) => {
    for (let elems of restElems) {
        if (elems == firstElem) {
            return true;
        }

    }
    return false;
}
    // code for function call
     console.log(containsValue(3, 1, 2, 3, 4)); // Output: true
     console.log(containsValue("apple", "banana", "orange")); 
    



// 7. Write an arrow function that uses the rest parameter to find the average of an arbitrary number of numeric values.

const calculateAverage = (...allNums) => (allNums.reduce((elem1, elem2) => elem1 + elem2)) / allNums.length;
     // code for function call
     console.log(calculateAverage(10, 5, 15)); // Output: 10
     console.log(calculateAverage(2, 4, 6, 8)); // Output: 5