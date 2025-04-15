

const displayWeather = (city, temp) => {
    return `The weather in ${city} is ${temp} degrees celsius`;
}    
    
console.log(displayWeather("New York", 20));
// Output: The weather in New York is 20 degrees Celsius.

console.log(displayWeather("London", 15));
// Output: The weather in London is 15 degrees Celsius.


    
    
const formatCurrency = (amount, currency) => {
    return `You have ${amount} ${currency}`
}

console.log(formatCurrency(50.5, "USD")); // Output: You have 50.5 USD.

console.log(formatCurrency(100, "EUR")); // Output: You have 100 EUR.




const displayBookSummary = (bookName, authorName, genre) => {
    return `The book "${bookName}" is written by ${authorName} belongs to the ${genre} genre`
}

console.log(displayBookSummary("To Kill a Mockingbird", "Harper Lee", "Fiction"));
// Output: The book "To Kill a Mockingbird" written by Harper Lee belongs to the Fiction genre.


const displayMovieInfo = (movieName, releaseYear, directorName) => {
    return `The movie "${movieName} was release in ${releaseYear} by ${directorName}.`
}

console.log(displayMovieInfo("Inception", 2010, "Christopher Nolan"));
// Output: The movie "Inception" was released in 2010 and directed by Christopher Nolan.



const constructEmail = (toEmailAdress, subject) => {
    return `To: ${toEmailAdress}\nSubject: ${subject}\n\nDear ${subject}\n\n...`
}

console.log(constructEmail("alice@example.com", "Meeting Reminder"));



// Expected Output should be in the following format with proper line spaces as shown below:

// To: alice@example.com
// Subject: Meeting Reminder

// Dear alice@example.com,

// ...

const assessGrade = (marks) => {
    return `You are ${marks>60?"passing":"failing"}`
}

console.log(assessGrade(75)); // Output: You are passing.

console.log(assessGrade(60)); // Output: You are passing.

console.log(assessGrade(45)); // Output: You are failing.






const showMessage = (item, number) => {
    return `You have ${number} ${item}${number>1?"s":""}`
}

console.log(showMessage("bangle", 10)); // Output: You have 10 bangles.

console.log(showMessage("lipstick", 1)); // Output: You have 1 lipstick.





    
const assessMarks = (marks, grade) => {
    return `You are ${marks>=60&&grade=="A"?"passing":"failing"}`
}

console.log(assessMarks(95, "A")); // Output: You are passing.

console.log(assessMarks(62, "C")); // Output: You are failing.

console.log(assessMarks(45, "D")); // Output: You are failing.




const showMsg = (item1, number1, item2, number2) => {
    return `${number1>10&&number2>5?"You have a good collection":"You need to update your collection"}`
}

console.log(showMsg("bangle", 11, "lipstick", 6)); // Output: You have a good collection.

console.log(showMsg("bangle", 5, "lipstick", 1)); // Output: You need to update your collection.

console.log(showMsg("bangle", 12, "lipstick", 4)); // Output: You need to update your collection.



const shareStationeryMessage = (pencilNumbers, eraserNumbers) => {
    return `${((pencilNumbers>10&&eraserNumbers>5)||(eraserNumbers>10&&pencilNumbers>5))?"Please share stationery with friends":"Please ask your friends for stationery"}`
}

console.log(shareStationeryMessage(12, 8)); // Output: Please share stationery with friends.

console.log(shareStationeryMessage(7, 15)); // Output: Please share stationery with friends.

console.log(shareStationeryMessage(5, 3));  // Output: Please ask your friends for stationery.