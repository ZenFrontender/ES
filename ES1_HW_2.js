
function calculateSalary(hoursWorked, hourlyRate){
    let totalSalary = hoursWorked * hourlyRate;
    return totalSalary;
}
console.log("Program 1:")
console.log(calculateSalary(50, 100));
console.log("\n");

function calculateBonus(workedHours, marks, salary){
    let bonus = 0;
    if(workedHours > 25 && marks > 85)
        bonus = salary * 0.1;
    else if(workedHours > 15 && marks > 75)
        bonus = salary * 0.05;
    return (salary + bonus);
}
console.log("Program 2:");
console.log(calculateBonus(20, 80, 5000));
console.log("\n");

function calculateFinalAmount(price1, quantity1, price2, quantity2){
    return (price1*quantity1 + price2*quantity2);
}
console.log("Program 3:");
console.log(calculateFinalAmount(200, 10, 500, 5));
console.log("\n");

function calculateAllowance(age, isStudent, baseAllowance){
    if(age < 18 && isStudent)
        baseAllowance += 100;
    else if(age >= 18 && age <= 25 && isStudent)
        baseAllowance += 50;
    return baseAllowance; 
}

console.log('Program 4:');
console.log(calculateAllowance(16, true, 500));
console.log("\n");

function calculateShippingCost(totalWeight, country, baseCost){
    if(totalWeight <= 1 && country == "Local")
        baseCost += 10;
    else if(totalWeight > 1 && country == "International")
        baseCost += 20;
    return baseCost;
}

console.log("Program 5:");
console.log(calculateShippingCost(0.5, "Local", 50));
