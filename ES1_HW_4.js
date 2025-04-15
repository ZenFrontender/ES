// QUESTION 1
let car = {
    brand: 'Toyota',
    model: 'Corolla'
}

console.log("1.1:", car.brand);
console.log("1.2:", car.model);

car.brand = "Honda";
console.log("1.4:", car);

car.year = 2022;
car.color = "Blue";

console.log("1.6: Properties of 'car' object");
for(let key in car)
    console.log(`${key}: ${car[key]}`);
console.log("\n");

// QUESTION 2
let  citizen = {
    name: "Ramesh Kumar",
    age: 50,
    occupation: "Retired"
}

citizen.age = 68;
console.log("2.1: Updated Age:", citizen.age);

citizen.age += 2;
console.log("2.2: Updated age after adding 2:", citizen.age);

citizen.city = "Delhi";
console.log("2.3: Properties of 'citizen' object");
for(let key in citizen)
    console.log(`${key}: ${citizen[key]}`);
console.log("\n")

//QUESTION 3
let person = {
    name: "Ramesh Kumar",
    age: 70,
}

person.bp = "Normal";
console.log("3.1: BP Value", person.bp);

if(person.age > 60 && person.bp == "Normal")
    console.log("3.2: Fit to travel.");
else 
    console.log("3.2: Not fit to travel.");
