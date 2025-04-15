const array = [5, 12, 7, 25, 18, 3];

function printArray(){
    console.log(array);
}

console.log("Program 1:")
printArray();
console.log("\n");

function addTenToArray(){
    let tempArr = [];
    for(let i = 0; i < array.length; i++)
        tempArr.push(array[i] + 10);
    return tempArr;
}

console.log("Program 2:");
console.log(addTenToArray());
console.log("\n");

function convertAllOdd(){
    let tempArr = [];
    for(let i = 0; i < array.length; i++)
        array[i] % 2 !== 0 ? tempArr.push(array[i] + 1) : tempArr.push(array[i]);

    return tempArr;
}

console.log("Program 3:");
console.log(convertAllOdd());
console.log("\n");

function divisibleBy2(){
    let tempArr = [];
    for(let i = 0; i < array.length; i++)
        if(array[i] % 2 == 0)
            tempArr.push(array[i]);

    return tempArr;
}

console.log("Program 4:");
console.log(divisibleBy2());
console.log("\n");

function findSum(){
    let sum = 0;
    for(let i = 0; i < array.length; i++)
        sum += array[i];

    return sum;
}

console.log("Program 5:");
console.log(findSum());
console.log("\n");

function printOddEven(){
    let evenSum = 0;
    let oddSum = 0;
    for(let i = 0; i < array.length; i++)
        array[i] % 2 == 0 ? evenSum += array[i] : oddSum += array[i];

    console.log("Even Sum = " + evenSum);
    console.log("Odd Sum = " + oddSum);
}

console.log("Program 6:");
printOddEven();
console.log("\n");