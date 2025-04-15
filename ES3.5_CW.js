// restructuring

// function to rename parameters of an object using restructuring

const printPersonDetails = ({name: personName, age: personAge}) => {
    console.log(`Person: ${personName}, Age: ${personAge}`);
}

printPersonDetails({ name: "Alice", age: 25 });



// function to rename parameters in an array

const printFruits = ([fruitName, fruitColor]) => {
    console.log(`Fruit: ${fruitName} is ${fruitColor} in color`);
}

printFruits(["Apple", "Red"]);




// function to print book details using restructuring

const printBookInfo = ({title: bookTitle, author: {name: bookAuthor, nationality}}) => { 
    console.log(`Book: ${bookTitle}, Author: ${bookAuthor}, Nationality: ${nationality}`)
}

printBookInfo({ title: "JavaScript Basics", author: { name: "John Doe", nationality: "American" } });



// function to display person
//Person Name: Bob, Person Age: 28
const displayPerson = ({ name: personName = "Bob", age: personAge = 28 }) => {
    console.log(`Person Name: ${personName}, Person Age: ${personAge}`);
}
displayPerson({})