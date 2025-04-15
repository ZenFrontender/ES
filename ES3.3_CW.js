//ES3.3_CW

// spread operators

// duplicate an array


let numbersArr = [1, 2, 3];
let newNumbersArr = [...numbersArr];


newNumbersArr.push(4);
console.log("Original array: ", numbersArr);


const duplicateArray = (arr) => [...arr];
console.log(duplicateArray(["apple", "banana"]));



// adding new element to an array

const addNewElement = (arr, element) => [...arr, element];
console.log(addNewElement(["kiwi", "orange"], "apple"));



//combining two arrays
const combineArray = (arr1, arr2) => [...arr1, ...arr2];
console.log(combineArray([11, 12, 13], [14, 15, 16]));


// copying an array of objects
const copyObject = (obj) => ({...obj });
console.log(copyObject({ name: "Alice", age: 20 }));


// adding a property to object
const addProperty = (obj, key, value) => ({ ...obj, [key]: value });
console.log(addProperty({ name: "Alice", age: 30 }, "favColor", "blue"));