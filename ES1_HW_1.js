const isBirthday = true;
// your code here
let age = 11;
if (isBirthday)
    age++;

console.log("Program 1:");
console.log(`Current Age: ${age}`);
console.log("\n");

//Program 2
// your code here
console.log("Program 2");
let passengerAge = 40;
let ticketPrice = 100;
if (passengerAge > 60) {
    let discountedPrice = ticketPrice * 0.85;
    console.log(`Ticket price for age greater than 60: ${discountedPrice}`);
} else {
    console.log(`Ticket price for age less than or equal to 60: ${ticketPrice}`);
}
console.log("\n");

// Program 3

let num1 = 5;
let num2 = 20;
let num3 = 15;
console.log("Program 3");
if (num3 > num1 && num3 > num2)
    console.log(`The third number ${num3} is the largest.`);
else
    console.log(`The third number ${num3} is not the largest.`);
console.log("\n");
//Program 4

const saree = 500;
const kurta = 300;
const jeans = 900;
const shoes = 400;
let totalCartPrice = saree + kurta + jeans + shoes;
let deliveryCharges = 0;
if (totalCartPrice < 1999)
    deliveryCharges = 99;

console.log("Program 4:");
console.log("Shopping Cart:");
console.log("---------------------------------------");
console.log("Item: Saree, Price:", saree);
console.log("Item: Kurta, Price:", kurta);
console.log("Item: Jeans, Price:", jeans);
console.log("Item: Shoes, Price:", shoes);
console.log("---------------------------------------");
console.log("Delivery Charges:", (deliveryCharges == 0 ? "No Delivery Charge" : deliveryCharges));
console.log("---------------------------------------");
console.log('Total Cart Price:', deliveryCharges + totalCartPrice, "\n");

//Program 5

const num4 = 5;
console.log("Program 5:")
if (num4 > 0)
    console.log('The number is positive.');
else if (num4 < 0)
    console.log('The number is negative.');
else
    console.log('The number is zero.');
console.log("\n");

//Program 6

const marks1 = 85;
const student1 = "Rahul";
const marks2 = 90;
const student2 = "Priya";
const marks3 = 78;
const student3 = "Tina";

console.log('Program 6:')
if(marks1 > marks2 && marks1 > marks3)
    console.log(`${student1}, scored the highest marks.\n`);
else if(marks2 > marks3)
    console.log(`${student2}, scored the highest marks.\n`);
else 
    console.log(`${student3}, scored the highest marks.\n`);
