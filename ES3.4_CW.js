// destructuring

// to extract elements from array


const extractArrayValues = (arr) => {
    const [a, b, c] = arr;

    console.log(a);
    console.log(b);
    console.log(c);
}

extractArrayValues([1, 2, 3]);



// to extract values from an object
const extractValuesFromObj = (obj) => {

    const { name, age, city } = obj;
    // console.log(name);
    // console.log(age);
    // console.log(city);
    console.log(`${name} is ${age} years old and lives in ${city}.`)

};
extractValuesFromObj({ name: "Alice", age: 25, city: "Paris" });



// extract values from nested object 
const obj1 = {
    id: 1,
    info: {
        title: "Javscript Basics",
        description: "Learn Funcdamentals"
    }
}

const getObjValues = (obj) => {
    const { info: { title, description } } = obj;
    console.log(title);
    console.log(description);
}

getObjValues(obj1)